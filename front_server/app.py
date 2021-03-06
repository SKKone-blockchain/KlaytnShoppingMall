from flask import Flask, render_template, request, redirect, session
from werkzeug.utils import secure_filename
import pymysql
import json
from time import time
from os.path import join, dirname, realpath
import random
import hashlib
import requests

app = Flask(__name__)
app.secret_key = 'Nharu7'

conn = pymysql.connect(
    host='klaytn.cq9adtomv7hu.ap-northeast-2.rds.amazonaws.com',
    port=3306,
    user='ian',
    passwd='rubicscube213',
    db='klaytn',
    charset='utf8'
)
curs = conn.cursor(pymysql.cursors.DictCursor)

@app.route('/')
def home():
    sql = 'select * from item'

    curs.execute(sql)

    data = curs.fetchall()

    return render_template('index.html', items=data)


@app.route('/test')
def test():
    sql = 'select * from item where iid=15'

    curs.execute(sql)

    data = curs.fetchone()

    return render_template('test.html', item=data)


@app.route('/item')
def item():
    if not session:
        return redirect('/')

    sql = 'select * from item where iid=%s'

    curs.execute(sql, request.args.get('iid'))

    data = curs.fetchone()

    data['tprice'] = int(int(data['price'])/100)

    return render_template('item.html', item=data)


@app.route('/register', methods=['POST','GET'])
def register():
    if request.method == 'GET':
        if not session:
            return redirect('/')
        return render_template('register.html')
    else:
        name = request.form['name']
        price = request.form['price']

        image = request.files['image']
        nfilename = str(int(time()))+secure_filename(image.filename)
        filename = 'static/image/'+nfilename
        filename = join(dirname(realpath(__file__)), filename)
        image.save(filename)

        url = 'http://skkone.shop:3000/item'
        data = {
            'ownerAddress': session['address'],
            'distribution': price,
            'totalPrice': price,
        }
        res = requests.post(url, data=data)

        res = res.json();

        sql = 'insert into item (uid, name, price, address, image, ticket, owner) values (%s,%s,%s,%s,%s,%s,%s)'
        encod = str(random.random() * 100000 // 1)
        encoded = encod.encode()
        hexdigest = hashlib.sha256(encoded).hexdigest()[:20]
        curs.execute(sql, (session['uid'], name, price, res['item'], nfilename, price, session['address']))
        conn.commit()

        return redirect('/')


@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.method == 'GET':
        return render_template('signup.html')
    else:
        id = request.form['id']
        pw = request.form['pw']
        key = request.files['key']
        filename = str(int(time()))+secure_filename(key.filename)
        filename = 'static/keystore/'+filename
        filename = join(dirname(realpath(__file__)), filename)
        key.save(filename)

        with open(filename) as j:
            data = json.load(j)
            address = data['address']

            sql = 'insert into user (id, password, address) values (%s, %s, %s)'

            curs.execute(sql, (id, pw, address))
            conn.commit()

            return redirect('/')


@app.route('/login', methods=['POST','GET'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
        id = request.form['id']
        pw = request.form['pw']

        sql = 'select count(*) as c from user where id=%s and password=%s'

        curs.execute(sql, (id, pw))

        data = curs.fetchone()
        if data['c'] == 0:
            return redirect('/')

        sql = 'select uid, address from user where id=%s'

        curs.execute(sql, id)

        data = curs.fetchone()

        address = data['address']
        uid = data['uid']

        session['address'] = address
        session['uid'] = uid

        return redirect('/')


@app.route('/logout')
def logout():
    session.pop('address')
    session.pop('uid')
    return redirect('/')


@app.route('/stake', methods=['POST'])
def stake():
    ticket = request.form['ticket']
    iid = request.form['iid']
    uaddress = session['address']
    address = request.form['address']

    sql = 'update item set ticket=ticket-%s where iid=%s'

    curs.execute(sql, (ticket, iid))
    conn.commit()

    url = 'http://skkone.shop:3000/item/ticket'
    data = {
        'contractAddress': address,
        'buyerAddress': uaddress,
    }

    for i in range(0,int(ticket)):
        requests.put(url, data=data)

    return redirect('/')


@app.route('/lottery', methods=['POST'])
def lottery():
    iid = request.form['iid']
    address = request.form['address']
    uaddress = session['address']

    url = 'http://skkone.shop:3000/item/person'
    data = {
        'contractAddress': address,
        'ownerAddress': uaddress,
    }

    res = requests.put(url, data=data)

    res = res.json()

    sql = 'update item set lottery=1 where iid=%s'
    curs.execute(sql, iid)
    conn.commit()

    sql = 'update item set winner=%s where iid=%s'
    curs.execute(sql, (res['winner'],iid))
    conn.commit()

    return redirect('/')




if __name__ == '__main__':
    app.run(host='0.0.0.0', debug='True')