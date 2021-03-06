export default {
    "contractName": "ShoppingMallItem",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "index",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "winNum",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "price",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_distribution",
            "type": "uint256"
          },
          {
            "name": "_totalPrice",
            "type": "uint256"
          },
          {
            "name": "_ownerAddress",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_buyer",
            "type": "address"
          }
        ],
        "name": "Staking",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "remainStaking",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "lottery",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getWinner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405260006005556001600660006101000a81548160ff02191690831515021790555034801561003057600080fd5b50604051606080610ade83398101806040528101908080519060200190929190805190602001909291908051906020019092919050505060008311801561008e575060008173ffffffffffffffffffffffffffffffffffffffff1614155b1515610102576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f506c6561736520636865636b2074686520696e7075742100000000000000000081525060200191505060405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826001819055508160028190555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001546002548115156101a057fe5b046008819055508260078190555073ca35b7d915458ef540ade6068dfe2f44e8fa733c600460006005600081548092919060010191905055815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507314723a09acff6d2a60dcdf7aa4aff308fddc160c600460006005600081548092919060010191905055815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550734b0897b0513fdc7c541b6d9d7e929c4e5364d2db600460006005600081548092919060010191905055815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506107bc806103226000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316442239146100885780632986c0e5146100b357806351dc7659146100de5780638e7ea5b214610109578063a035b1fe14610160578063ba13a5721461018b578063db9b42f5146101b6575b600080fd5b34801561009457600080fd5b5061009d6101ec565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c86101fa565b6040518082815260200191505060405180910390f35b3480156100ea57600080fd5b506100f3610200565b6040518082815260200191505060405180910390f35b34801561011557600080fd5b5061011e610206565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016c57600080fd5b50610175610243565b6040518082815260200191505060405180910390f35b34801561019757600080fd5b506101a0610249565b6040518082815260200191505060405180910390f35b6101ea600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061046e565b005b600060055460015403905090565b60055481565b60075481565b600060046000600754815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60085481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001807f546869732066756e6374696f6e2063616e20626520757365642062792073657281526020017f766963652070726f76696465722100000000000000000000000000000000000081525060400191505060405180910390fd5b600660009054906101000a900460ff1615156103b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5374616b696e67206973206f766572210000000000000000000000000000000081525060200191505060405180910390fd5b600060055414151515610434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f5468657265206973206e6f207374616b6520696e2074686973206974656d000081525060200191505060405180910390fd5b6000600660006101000a81548160ff02191690831515021790555060055460014303406001900481151561046457fe5b0660078190555090565b600660009054906101000a900460ff1615156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5374616b696e67206973206f766572210000000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001807f546869732066756e6374696f6e2063616e20626520757365642062792073657281526020017f766963652070726f76696465722100000000000000000000000000000000000081525060400191505060405180910390fd5b6001546001600554011115151561065b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f646973747269627574696f6e206973206d61780000000000000000000000000081525060200191505060405180910390fd5b60085434101515156106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f596f75206861766520746f20706179206d6f7265206b6c61790000000000000081525060200191505060405180910390fd5b60085434111561072b578073ffffffffffffffffffffffffffffffffffffffff166108fc60085434039081150290604051600060405180830381858888f19350505050158015610729573d6000803e3d6000fd5b505b80600460006005600081548092919060010191905055815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582004a6a833e120b4fb17b67ffa0705f0a3232307397b2206a6f403e472093882970029",
    "deployedBytecode": "0x608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316442239146100885780632986c0e5146100b357806351dc7659146100de5780638e7ea5b214610109578063a035b1fe14610160578063ba13a5721461018b578063db9b42f5146101b6575b600080fd5b34801561009457600080fd5b5061009d6101ec565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c86101fa565b6040518082815260200191505060405180910390f35b3480156100ea57600080fd5b506100f3610200565b6040518082815260200191505060405180910390f35b34801561011557600080fd5b5061011e610206565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016c57600080fd5b50610175610243565b6040518082815260200191505060405180910390f35b34801561019757600080fd5b506101a0610249565b6040518082815260200191505060405180910390f35b6101ea600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061046e565b005b600060055460015403905090565b60055481565b60075481565b600060046000600754815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60085481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001807f546869732066756e6374696f6e2063616e20626520757365642062792073657281526020017f766963652070726f76696465722100000000000000000000000000000000000081525060400191505060405180910390fd5b600660009054906101000a900460ff1615156103b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5374616b696e67206973206f766572210000000000000000000000000000000081525060200191505060405180910390fd5b600060055414151515610434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f5468657265206973206e6f207374616b6520696e2074686973206974656d000081525060200191505060405180910390fd5b6000600660006101000a81548160ff02191690831515021790555060055460014303406001900481151561046457fe5b0660078190555090565b600660009054906101000a900460ff1615156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5374616b696e67206973206f766572210000000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001807f546869732066756e6374696f6e2063616e20626520757365642062792073657281526020017f766963652070726f76696465722100000000000000000000000000000000000081525060400191505060405180910390fd5b6001546001600554011115151561065b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f646973747269627574696f6e206973206d61780000000000000000000000000081525060200191505060405180910390fd5b60085434101515156106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f596f75206861766520746f20706179206d6f7265206b6c61790000000000000081525060200191505060405180910390fd5b60085434111561072b578073ffffffffffffffffffffffffffffffffffffffff166108fc60085434039081150290604051600060405180830381858888f19350505050158015610729573d6000803e3d6000fd5b505b80600460006005600081548092919060010191905055815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582004a6a833e120b4fb17b67ffa0705f0a3232307397b2206a6f403e472093882970029",
    "sourceMap": "33:1870:0:-;;;215:1;195:21;;232:4;222:14;;;;;;;;;;;;;;;;;;;;518:629;8:9:-1;5:2;;;30:1;27;20:12;5:2;518:629:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;633:1;617:13;:17;:41;;;;;655:3;638:13;:20;;;;617:41;609:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;714:10;696:15;;:28;;;;;;;;;;;;;;;;;;749:13;734:12;:28;;;;785:11;772:10;:24;;;;821:13;806:12;;:28;;;;;;;;;;;;;;;;;;865:12;;852:10;;:25;;;;;;;;844:5;:33;;;;896:13;887:6;:22;;;;943:42;919:4;:13;924:5;;:7;;;;;;;;;;;;919:13;;;;;;;;;;;;:67;;;;;;;;;;;;;;;;;;1020:42;996:4;:13;1001:5;;:7;;;;;;;;;;;;996:13;;;;;;;;;;;;:67;;;;;;;;;;;;;;;;;;1097:42;1073:4;:13;1078:5;;:7;;;;;;;;;;;;1073:13;;;;;;;;;;;;:67;;;;;;;;;;;;;;;;;;518:629;;;33:1870;;;;;;",
    "deployedSourceMap": "33:1870:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1499:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1499:95:0;;;;;;;;;;;;;;;;;;;;;;;195:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;195:21:0;;;;;;;;;;;;;;;;;;;;;;;242:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;242:18:0;;;;;;;;;;;;;;;;;;;;;;;1815:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1815:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;266:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;266:17:0;;;;;;;;;;;;;;;;;;;;;;;1604:201;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1604:201:0;;;;;;;;;;;;;;;;;;;;;;;1157:332;;;;;;;;;;;;;;;;;;;;;;;;;;;;1499:95;1544:4;1582:5;;1567:12;;:20;1560:27;;1499:95;:::o;195:21::-;;;;:::o;242:18::-;;;;:::o;1815:86::-;1856:7;1882:4;:12;1887:6;;1882:12;;;;;;;;;;;;;;;;;;;;;1875:19;;1815:86;:::o;266:17::-;;;;:::o;1604:201::-;1650:4;346:15;;;;;;;;;;;332:29;;:10;:29;;;324:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;467:2;;;;;;;;;;;459:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1682:1;1673:5;;:10;;1665:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1733:5;1728:2;;:10;;;;;;;;;;;;;;;;;;1793:5;;1787:1;1772:12;:16;1762:27;1757:33;;;:41;;;;;;;;1748:6;:50;;;;1604:201;:::o;1157:332::-;467:2;;;;;;;;;;;459:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;346:15;;;;;;;;;;;332:29;;:10;:29;;;324:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1248:12;;1243:1;1235:5;;:9;:25;;1227:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1315:5;;1302:9;:18;;1294:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1376:5;;1364:9;:17;1360:91;;;1405:6;1397:24;;:43;1434:5;;1422:9;:17;1397:43;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1397:43:0;1360:91;1476:6;1460:4;:13;1465:5;;:7;;;;;;;;;;;;1460:13;;;;;;;;;;;;:22;;;;;;;;;;;;;;;;;;1157:332;:::o",
    "source": "pragma solidity >=0.4.0 <0.6.0;\n\ncontract ShoppingMallItem{\n    address serviceProvider;\n    uint distribution;\n    uint totalPrice;\n    address ownerAddress;\n    mapping(uint=>address)list;\n    uint public index = 0;\n    bool ok = true;\n    uint public winNum;\n    uint public price;\n    \n    modifier provider() {\n        require(msg.sender == serviceProvider, \"This function can be used by service provider!\");\n        _;\n    }\n    modifier Ok() {\n        require(ok, \"Staking is over!\");\n        _;\n    }\n    \n    constructor (uint _distribution, uint _totalPrice, address _ownerAddress) public {\n        require(_distribution > 0 && _ownerAddress != 0x0, \"Please check the input!\");\n        serviceProvider = msg.sender;\n        distribution = _distribution;\n        totalPrice = _totalPrice;\n        ownerAddress = _ownerAddress;\n        price = totalPrice / distribution;\n        winNum = _distribution;\n        list[index++] = address(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);\n        list[index++] = address(0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C);\n        list[index++] = address(0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB);\n    }\n    \n    function Staking(address _buyer) Ok provider payable public {\n        require(index + 1 <= distribution, \"distribution is max\");\n        require(msg.value >= price, \"You have to pay more klay\");\n        if (msg.value > price) {\n            address(_buyer).transfer(msg.value - price);\n        }\n        list[index++] = _buyer;\n    }\n    \n    function remainStaking() public view returns(uint) {\n        return distribution - index;\n    }\n    \n    function lottery() public provider Ok returns(uint){\n        require(index != 0, \"There is no stake in this item\");\n        ok = false;\n        winNum = uint(blockhash(block.number - 1)) % index;\n    }\n    \n    function getWinner() public view returns(address) {\n        return list[winNum];\n    }\n}",
    "sourcePath": "/home/lee/klaytn/klaytnProject/shoppingmall/contracts/ShoppingMallItem.sol",
    "ast": {
      "absolutePath": "/home/lee/klaytn/klaytnProject/shoppingmall/contracts/ShoppingMallItem.sol",
      "exportedSymbols": {
        "ShoppingMallItem": [
          224
        ]
      },
      "id": 225,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".0",
            "<",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:31:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 224,
          "linearizedBaseContracts": [
            224
          ],
          "name": "ShoppingMallItem",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "serviceProvider",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "64:23:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "64:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 5,
              "name": "distribution",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "93:17:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 4,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "93:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 7,
              "name": "totalPrice",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "116:15:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 6,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "116:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 9,
              "name": "ownerAddress",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "137:20:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 8,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "137:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 13,
              "name": "list",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "163:26:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 12,
                "keyType": {
                  "id": 10,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "171:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "163:22:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 11,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "177:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 16,
              "name": "index",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "195:21:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 14,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "195:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 15,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "215:1:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 19,
              "name": "ok",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "222:14:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 17,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "222:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "74727565",
                "id": 18,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "232:4:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "value": "true"
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 21,
              "name": "winNum",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "242:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 20,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "242:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 23,
              "name": "price",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "266:17:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 22,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "266:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 34,
                "nodeType": "Block",
                "src": "314:116:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 26,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 239,
                              "src": "332:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 27,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "332:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 28,
                            "name": "serviceProvider",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3,
                            "src": "346:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "332:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "546869732066756e6374696f6e2063616e206265207573656420627920736572766963652070726f766964657221",
                          "id": 30,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "363:48:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_dee6be91e659dcb5397443c2643a4283ed6b2f59ec70f32118cc2814d8a59f72",
                            "typeString": "literal_string \"This function can be used by service provider!\""
                          },
                          "value": "This function can be used by service provider!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_dee6be91e659dcb5397443c2643a4283ed6b2f59ec70f32118cc2814d8a59f72",
                            "typeString": "literal_string \"This function can be used by service provider!\""
                          }
                        ],
                        "id": 25,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "324:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 31,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "324:88:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32,
                    "nodeType": "ExpressionStatement",
                    "src": "324:88:0"
                  },
                  {
                    "id": 33,
                    "nodeType": "PlaceholderStatement",
                    "src": "422:1:0"
                  }
                ]
              },
              "documentation": null,
              "id": 35,
              "name": "provider",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 24,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "311:2:0"
              },
              "src": "294:136:0",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 43,
                "nodeType": "Block",
                "src": "449:59:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 38,
                          "name": "ok",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "467:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5374616b696e67206973206f76657221",
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "471:18:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_167155f9538354bd43776e218a9c08344bd59b41b8b1988f029999623a83d0ea",
                            "typeString": "literal_string \"Staking is over!\""
                          },
                          "value": "Staking is over!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_167155f9538354bd43776e218a9c08344bd59b41b8b1988f029999623a83d0ea",
                            "typeString": "literal_string \"Staking is over!\""
                          }
                        ],
                        "id": 37,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "459:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "459:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 41,
                    "nodeType": "ExpressionStatement",
                    "src": "459:31:0"
                  },
                  {
                    "id": 42,
                    "nodeType": "PlaceholderStatement",
                    "src": "500:1:0"
                  }
                ]
              },
              "documentation": null,
              "id": 44,
              "name": "Ok",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 36,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "446:2:0"
              },
              "src": "435:73:0",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 118,
                "nodeType": "Block",
                "src": "599:548:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 56,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 54,
                              "name": "_distribution",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46,
                              "src": "617:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 55,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "633:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "617:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 59,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 57,
                              "name": "_ownerAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50,
                              "src": "638:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 58,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "655:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            },
                            "src": "638:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "617:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "506c6561736520636865636b2074686520696e70757421",
                          "id": 61,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "660:25:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a56a39a449030df6c8066492874fff7fe291d99f8f8add09086949dbdf64bca1",
                            "typeString": "literal_string \"Please check the input!\""
                          },
                          "value": "Please check the input!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a56a39a449030df6c8066492874fff7fe291d99f8f8add09086949dbdf64bca1",
                            "typeString": "literal_string \"Please check the input!\""
                          }
                        ],
                        "id": 53,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "609:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 62,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "609:77:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 63,
                    "nodeType": "ExpressionStatement",
                    "src": "609:77:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 64,
                        "name": "serviceProvider",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "696:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 65,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 239,
                          "src": "714:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 66,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "714:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "696:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 68,
                    "nodeType": "ExpressionStatement",
                    "src": "696:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 71,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 69,
                        "name": "distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "734:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 70,
                        "name": "_distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "749:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "734:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 72,
                    "nodeType": "ExpressionStatement",
                    "src": "734:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 73,
                        "name": "totalPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "772:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "_totalPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "785:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "772:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 76,
                    "nodeType": "ExpressionStatement",
                    "src": "772:24:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 79,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9,
                        "src": "806:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "_ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "821:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "806:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 80,
                    "nodeType": "ExpressionStatement",
                    "src": "806:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "844:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 84,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 82,
                          "name": "totalPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "852:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "distribution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "865:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "852:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "844:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 86,
                    "nodeType": "ExpressionStatement",
                    "src": "844:33:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "winNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "887:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "_distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "896:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "887:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 90,
                    "nodeType": "ExpressionStatement",
                    "src": "887:22:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 98,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "919:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 94,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "924:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 92,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "924:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "919:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307843413335623764393135343538454635343061446536303638644665324634344538666137333363",
                            "id": 96,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "943:42:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "value": "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 95,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "935:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "935:51:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "919:67:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 99,
                    "nodeType": "ExpressionStatement",
                    "src": "919:67:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 100,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "996:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 103,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1001:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 101,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1001:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "996:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307831343732334130394143666636443241363044636446376141344146663330384644444331363043",
                            "id": 105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1020:42:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "value": "0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1012:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1012:51:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "996:67:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 108,
                    "nodeType": "ExpressionStatement",
                    "src": "996:67:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 109,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "1073:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 112,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1078:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 110,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1078:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1073:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307834423038393762303531336664433743353431423664394437453932394334653533363444326442",
                            "id": 114,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1097:42:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "value": "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1089:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1089:51:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1073:67:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 117,
                    "nodeType": "ExpressionStatement",
                    "src": "1073:67:0"
                  }
                ]
              },
              "documentation": null,
              "id": 119,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 51,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 46,
                    "name": "_distribution",
                    "nodeType": "VariableDeclaration",
                    "scope": 119,
                    "src": "531:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 45,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "531:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 48,
                    "name": "_totalPrice",
                    "nodeType": "VariableDeclaration",
                    "scope": 119,
                    "src": "551:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 47,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "551:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 50,
                    "name": "_ownerAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 119,
                    "src": "569:21:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "569:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "530:61:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 52,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "599:0:0"
              },
              "scope": 224,
              "src": "518:629:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 168,
                "nodeType": "Block",
                "src": "1217:272:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 131,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 129,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16,
                              "src": "1235:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 130,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1243:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1235:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "distribution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "1248:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1235:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "646973747269627574696f6e206973206d6178",
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1262:21:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_01849c1b76f50239fa05d11e5906c4a5db5677c866af110707baec44ca6d9c81",
                            "typeString": "literal_string \"distribution is max\""
                          },
                          "value": "distribution is max"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_01849c1b76f50239fa05d11e5906c4a5db5677c866af110707baec44ca6d9c81",
                            "typeString": "literal_string \"distribution is max\""
                          }
                        ],
                        "id": 128,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "1227:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1227:57:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 136,
                    "nodeType": "ExpressionStatement",
                    "src": "1227:57:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 138,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 239,
                              "src": "1302:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1302:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 140,
                            "name": "price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23,
                            "src": "1315:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1302:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f75206861766520746f20706179206d6f7265206b6c6179",
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1322:27:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7e537e325912a7bf5ec8d64217efc8ffa00239601eaa4fc04a9e208d852fdb62",
                            "typeString": "literal_string \"You have to pay more klay\""
                          },
                          "value": "You have to pay more klay"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7e537e325912a7bf5ec8d64217efc8ffa00239601eaa4fc04a9e208d852fdb62",
                            "typeString": "literal_string \"You have to pay more klay\""
                          }
                        ],
                        "id": 137,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "1294:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 143,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1294:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 144,
                    "nodeType": "ExpressionStatement",
                    "src": "1294:56:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 239,
                          "src": "1364:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1364:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "1376:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1364:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 160,
                    "nodeType": "IfStatement",
                    "src": "1360:91:0",
                    "trueBody": {
                      "id": 159,
                      "nodeType": "Block",
                      "src": "1383:68:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 156,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 153,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 239,
                                    "src": "1422:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 154,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1422:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 155,
                                  "name": "price",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23,
                                  "src": "1434:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1422:17:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 150,
                                    "name": "_buyer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121,
                                    "src": "1405:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 149,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "1397:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 151,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1397:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 152,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1397:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                "typeString": "function (uint256)"
                              }
                            },
                            "id": 157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1397:43:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 158,
                          "nodeType": "ExpressionStatement",
                          "src": "1397:43:0"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 161,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "1460:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 164,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1465:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 162,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1465:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1460:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "_buyer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1476:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1460:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 167,
                    "nodeType": "ExpressionStatement",
                    "src": "1460:22:0"
                  }
                ]
              },
              "documentation": null,
              "id": 169,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 124,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 123,
                    "name": "Ok",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44,
                    "src": "1190:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1190:2:0"
                },
                {
                  "arguments": null,
                  "id": 126,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 125,
                    "name": "provider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 35,
                    "src": "1193:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1193:8:0"
                }
              ],
              "name": "Staking",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 122,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 121,
                    "name": "_buyer",
                    "nodeType": "VariableDeclaration",
                    "scope": 169,
                    "src": "1174:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 120,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1174:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1173:16:0"
              },
              "payable": true,
              "returnParameters": {
                "id": 127,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1217:0:0"
              },
              "scope": 224,
              "src": "1157:332:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 178,
                "nodeType": "Block",
                "src": "1550:44:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1567:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 175,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1582:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1567:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 173,
                    "id": 177,
                    "nodeType": "Return",
                    "src": "1560:27:0"
                  }
                ]
              },
              "documentation": null,
              "id": 179,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "remainStaking",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 170,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1521:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 173,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 172,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 179,
                    "src": "1544:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 171,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1544:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1543:6:0"
              },
              "scope": 224,
              "src": "1499:95:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 212,
                "nodeType": "Block",
                "src": "1655:150:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 189,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1673:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1682:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1673:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5468657265206973206e6f207374616b6520696e2074686973206974656d",
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1685:32:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_472e75871d909b1d4579ca55544334ba9b930379bad4cf949aad4a5309e68565",
                            "typeString": "literal_string \"There is no stake in this item\""
                          },
                          "value": "There is no stake in this item"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_472e75871d909b1d4579ca55544334ba9b930379bad4cf949aad4a5309e68565",
                            "typeString": "literal_string \"There is no stake in this item\""
                          }
                        ],
                        "id": 188,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "1665:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1665:53:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 194,
                    "nodeType": "ExpressionStatement",
                    "src": "1665:53:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 195,
                        "name": "ok",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19,
                        "src": "1728:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1733:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "1728:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 198,
                    "nodeType": "ExpressionStatement",
                    "src": "1728:10:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 199,
                        "name": "winNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "1748:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 205,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 202,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 229,
                                      "src": "1772:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 203,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1772:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 204,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1787:1:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "src": "1772:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 201,
                                "name": "blockhash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 230,
                                "src": "1762:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                  "typeString": "function (uint256) view returns (bytes32)"
                                }
                              },
                              "id": 206,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1762:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1757:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 208,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "1793:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1757:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1748:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 211,
                    "nodeType": "ExpressionStatement",
                    "src": "1748:50:0"
                  }
                ]
              },
              "documentation": null,
              "id": 213,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 182,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 181,
                    "name": "provider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 35,
                    "src": "1630:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1630:8:0"
                },
                {
                  "arguments": null,
                  "id": 184,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 183,
                    "name": "Ok",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44,
                    "src": "1639:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1639:2:0"
                }
              ],
              "name": "lottery",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 180,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1620:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 187,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 186,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 213,
                    "src": "1650:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 185,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1650:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1649:6:0"
              },
              "scope": 224,
              "src": "1604:201:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 222,
                "nodeType": "Block",
                "src": "1865:36:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 218,
                        "name": "list",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "1882:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 220,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "winNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "1887:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1882:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 217,
                    "id": 221,
                    "nodeType": "Return",
                    "src": "1875:19:0"
                  }
                ]
              },
              "documentation": null,
              "id": 223,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getWinner",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 214,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1833:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 217,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 216,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 223,
                    "src": "1856:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 215,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1856:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1855:9:0"
              },
              "scope": 224,
              "src": "1815:86:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 225,
          "src": "33:1870:0"
        }
      ],
      "src": "0:1903:0"
    },
    "legacyAST": {
      "absolutePath": "/home/lee/klaytn/klaytnProject/shoppingmall/contracts/ShoppingMallItem.sol",
      "exportedSymbols": {
        "ShoppingMallItem": [
          224
        ]
      },
      "id": 225,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".0",
            "<",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:31:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 224,
          "linearizedBaseContracts": [
            224
          ],
          "name": "ShoppingMallItem",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "serviceProvider",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "64:23:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "64:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 5,
              "name": "distribution",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "93:17:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 4,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "93:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 7,
              "name": "totalPrice",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "116:15:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 6,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "116:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 9,
              "name": "ownerAddress",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "137:20:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 8,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "137:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 13,
              "name": "list",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "163:26:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 12,
                "keyType": {
                  "id": 10,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "171:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "163:22:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 11,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "177:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 16,
              "name": "index",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "195:21:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 14,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "195:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 15,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "215:1:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 19,
              "name": "ok",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "222:14:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 17,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "222:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "74727565",
                "id": 18,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "232:4:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "value": "true"
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 21,
              "name": "winNum",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "242:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 20,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "242:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 23,
              "name": "price",
              "nodeType": "VariableDeclaration",
              "scope": 224,
              "src": "266:17:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 22,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "266:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 34,
                "nodeType": "Block",
                "src": "314:116:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 26,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 239,
                              "src": "332:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 27,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "332:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 28,
                            "name": "serviceProvider",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3,
                            "src": "346:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "332:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "546869732066756e6374696f6e2063616e206265207573656420627920736572766963652070726f766964657221",
                          "id": 30,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "363:48:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_dee6be91e659dcb5397443c2643a4283ed6b2f59ec70f32118cc2814d8a59f72",
                            "typeString": "literal_string \"This function can be used by service provider!\""
                          },
                          "value": "This function can be used by service provider!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_dee6be91e659dcb5397443c2643a4283ed6b2f59ec70f32118cc2814d8a59f72",
                            "typeString": "literal_string \"This function can be used by service provider!\""
                          }
                        ],
                        "id": 25,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "324:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 31,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "324:88:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 32,
                    "nodeType": "ExpressionStatement",
                    "src": "324:88:0"
                  },
                  {
                    "id": 33,
                    "nodeType": "PlaceholderStatement",
                    "src": "422:1:0"
                  }
                ]
              },
              "documentation": null,
              "id": 35,
              "name": "provider",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 24,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "311:2:0"
              },
              "src": "294:136:0",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 43,
                "nodeType": "Block",
                "src": "449:59:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 38,
                          "name": "ok",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19,
                          "src": "467:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5374616b696e67206973206f76657221",
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "471:18:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_167155f9538354bd43776e218a9c08344bd59b41b8b1988f029999623a83d0ea",
                            "typeString": "literal_string \"Staking is over!\""
                          },
                          "value": "Staking is over!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_167155f9538354bd43776e218a9c08344bd59b41b8b1988f029999623a83d0ea",
                            "typeString": "literal_string \"Staking is over!\""
                          }
                        ],
                        "id": 37,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "459:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "459:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 41,
                    "nodeType": "ExpressionStatement",
                    "src": "459:31:0"
                  },
                  {
                    "id": 42,
                    "nodeType": "PlaceholderStatement",
                    "src": "500:1:0"
                  }
                ]
              },
              "documentation": null,
              "id": 44,
              "name": "Ok",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 36,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "446:2:0"
              },
              "src": "435:73:0",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 118,
                "nodeType": "Block",
                "src": "599:548:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 56,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 54,
                              "name": "_distribution",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46,
                              "src": "617:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 55,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "633:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "617:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 59,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 57,
                              "name": "_ownerAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50,
                              "src": "638:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 58,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "655:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            },
                            "src": "638:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "617:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "506c6561736520636865636b2074686520696e70757421",
                          "id": 61,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "660:25:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a56a39a449030df6c8066492874fff7fe291d99f8f8add09086949dbdf64bca1",
                            "typeString": "literal_string \"Please check the input!\""
                          },
                          "value": "Please check the input!"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a56a39a449030df6c8066492874fff7fe291d99f8f8add09086949dbdf64bca1",
                            "typeString": "literal_string \"Please check the input!\""
                          }
                        ],
                        "id": 53,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "609:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 62,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "609:77:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 63,
                    "nodeType": "ExpressionStatement",
                    "src": "609:77:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 64,
                        "name": "serviceProvider",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "696:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 65,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 239,
                          "src": "714:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 66,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "714:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "696:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 68,
                    "nodeType": "ExpressionStatement",
                    "src": "696:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 71,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 69,
                        "name": "distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "734:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 70,
                        "name": "_distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "749:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "734:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 72,
                    "nodeType": "ExpressionStatement",
                    "src": "734:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 73,
                        "name": "totalPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "772:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "_totalPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "785:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "772:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 76,
                    "nodeType": "ExpressionStatement",
                    "src": "772:24:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 79,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9,
                        "src": "806:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "_ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "821:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "806:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 80,
                    "nodeType": "ExpressionStatement",
                    "src": "806:28:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "844:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 84,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 82,
                          "name": "totalPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "852:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "distribution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "865:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "852:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "844:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 86,
                    "nodeType": "ExpressionStatement",
                    "src": "844:33:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "winNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "887:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "_distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "896:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "887:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 90,
                    "nodeType": "ExpressionStatement",
                    "src": "887:22:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 98,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "919:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 94,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "924:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 92,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "924:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "919:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307843413335623764393135343538454635343061446536303638644665324634344538666137333363",
                            "id": 96,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "943:42:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "value": "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 95,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "935:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "935:51:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "919:67:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 99,
                    "nodeType": "ExpressionStatement",
                    "src": "919:67:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 100,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "996:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 103,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1001:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 101,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1001:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "996:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307831343732334130394143666636443241363044636446376141344146663330384644444331363043",
                            "id": 105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1020:42:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "value": "0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1012:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1012:51:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "996:67:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 108,
                    "nodeType": "ExpressionStatement",
                    "src": "996:67:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 109,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "1073:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 112,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1078:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 110,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1078:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1073:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307834423038393762303531336664433743353431423664394437453932394334653533363444326442",
                            "id": 114,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1097:42:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "value": "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1089:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1089:51:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1073:67:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 117,
                    "nodeType": "ExpressionStatement",
                    "src": "1073:67:0"
                  }
                ]
              },
              "documentation": null,
              "id": 119,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 51,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 46,
                    "name": "_distribution",
                    "nodeType": "VariableDeclaration",
                    "scope": 119,
                    "src": "531:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 45,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "531:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 48,
                    "name": "_totalPrice",
                    "nodeType": "VariableDeclaration",
                    "scope": 119,
                    "src": "551:16:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 47,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "551:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 50,
                    "name": "_ownerAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 119,
                    "src": "569:21:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 49,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "569:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "530:61:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 52,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "599:0:0"
              },
              "scope": 224,
              "src": "518:629:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 168,
                "nodeType": "Block",
                "src": "1217:272:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 131,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 129,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16,
                              "src": "1235:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 130,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1243:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1235:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "distribution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "1248:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1235:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "646973747269627574696f6e206973206d6178",
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1262:21:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_01849c1b76f50239fa05d11e5906c4a5db5677c866af110707baec44ca6d9c81",
                            "typeString": "literal_string \"distribution is max\""
                          },
                          "value": "distribution is max"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_01849c1b76f50239fa05d11e5906c4a5db5677c866af110707baec44ca6d9c81",
                            "typeString": "literal_string \"distribution is max\""
                          }
                        ],
                        "id": 128,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "1227:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1227:57:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 136,
                    "nodeType": "ExpressionStatement",
                    "src": "1227:57:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 138,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 239,
                              "src": "1302:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1302:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 140,
                            "name": "price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23,
                            "src": "1315:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1302:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f75206861766520746f20706179206d6f7265206b6c6179",
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1322:27:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7e537e325912a7bf5ec8d64217efc8ffa00239601eaa4fc04a9e208d852fdb62",
                            "typeString": "literal_string \"You have to pay more klay\""
                          },
                          "value": "You have to pay more klay"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7e537e325912a7bf5ec8d64217efc8ffa00239601eaa4fc04a9e208d852fdb62",
                            "typeString": "literal_string \"You have to pay more klay\""
                          }
                        ],
                        "id": 137,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "1294:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 143,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1294:56:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 144,
                    "nodeType": "ExpressionStatement",
                    "src": "1294:56:0"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 239,
                          "src": "1364:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1364:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "1376:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1364:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 160,
                    "nodeType": "IfStatement",
                    "src": "1360:91:0",
                    "trueBody": {
                      "id": 159,
                      "nodeType": "Block",
                      "src": "1383:68:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 156,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 153,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 239,
                                    "src": "1422:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 154,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1422:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 155,
                                  "name": "price",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23,
                                  "src": "1434:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1422:17:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 150,
                                    "name": "_buyer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121,
                                    "src": "1405:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 149,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "1397:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 151,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1397:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 152,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1397:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                "typeString": "function (uint256)"
                              }
                            },
                            "id": 157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1397:43:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 158,
                          "nodeType": "ExpressionStatement",
                          "src": "1397:43:0"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 161,
                          "name": "list",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13,
                          "src": "1460:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 164,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1465:7:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 162,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1465:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1460:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "_buyer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1476:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1460:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 167,
                    "nodeType": "ExpressionStatement",
                    "src": "1460:22:0"
                  }
                ]
              },
              "documentation": null,
              "id": 169,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 124,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 123,
                    "name": "Ok",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44,
                    "src": "1190:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1190:2:0"
                },
                {
                  "arguments": null,
                  "id": 126,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 125,
                    "name": "provider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 35,
                    "src": "1193:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1193:8:0"
                }
              ],
              "name": "Staking",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 122,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 121,
                    "name": "_buyer",
                    "nodeType": "VariableDeclaration",
                    "scope": 169,
                    "src": "1174:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 120,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1174:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1173:16:0"
              },
              "payable": true,
              "returnParameters": {
                "id": 127,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1217:0:0"
              },
              "scope": 224,
              "src": "1157:332:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 178,
                "nodeType": "Block",
                "src": "1550:44:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "distribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1567:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 175,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1582:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1567:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 173,
                    "id": 177,
                    "nodeType": "Return",
                    "src": "1560:27:0"
                  }
                ]
              },
              "documentation": null,
              "id": 179,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "remainStaking",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 170,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1521:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 173,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 172,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 179,
                    "src": "1544:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 171,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1544:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1543:6:0"
              },
              "scope": 224,
              "src": "1499:95:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 212,
                "nodeType": "Block",
                "src": "1655:150:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 189,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16,
                            "src": "1673:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1682:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1673:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5468657265206973206e6f207374616b6520696e2074686973206974656d",
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1685:32:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_472e75871d909b1d4579ca55544334ba9b930379bad4cf949aad4a5309e68565",
                            "typeString": "literal_string \"There is no stake in this item\""
                          },
                          "value": "There is no stake in this item"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_472e75871d909b1d4579ca55544334ba9b930379bad4cf949aad4a5309e68565",
                            "typeString": "literal_string \"There is no stake in this item\""
                          }
                        ],
                        "id": 188,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          242,
                          243
                        ],
                        "referencedDeclaration": 243,
                        "src": "1665:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1665:53:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 194,
                    "nodeType": "ExpressionStatement",
                    "src": "1665:53:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 195,
                        "name": "ok",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19,
                        "src": "1728:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1733:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "1728:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 198,
                    "nodeType": "ExpressionStatement",
                    "src": "1728:10:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 199,
                        "name": "winNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "1748:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 205,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 202,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 229,
                                      "src": "1772:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 203,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1772:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 204,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1787:1:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "src": "1772:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 201,
                                "name": "blockhash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 230,
                                "src": "1762:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                  "typeString": "function (uint256) view returns (bytes32)"
                                }
                              },
                              "id": 206,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1762:27:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1757:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 208,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "1793:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1757:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1748:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 211,
                    "nodeType": "ExpressionStatement",
                    "src": "1748:50:0"
                  }
                ]
              },
              "documentation": null,
              "id": 213,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 182,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 181,
                    "name": "provider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 35,
                    "src": "1630:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1630:8:0"
                },
                {
                  "arguments": null,
                  "id": 184,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 183,
                    "name": "Ok",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44,
                    "src": "1639:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1639:2:0"
                }
              ],
              "name": "lottery",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 180,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1620:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 187,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 186,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 213,
                    "src": "1650:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 185,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1650:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1649:6:0"
              },
              "scope": 224,
              "src": "1604:201:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 222,
                "nodeType": "Block",
                "src": "1865:36:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 218,
                        "name": "list",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "1882:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 220,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "winNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "1887:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1882:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 217,
                    "id": 221,
                    "nodeType": "Return",
                    "src": "1875:19:0"
                  }
                ]
              },
              "documentation": null,
              "id": 223,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "getWinner",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 214,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1833:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 217,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 216,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 223,
                    "src": "1856:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 215,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1856:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1855:9:0"
              },
              "scope": 224,
              "src": "1815:86:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 225,
          "src": "33:1870:0"
        }
      ],
      "src": "0:1903:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "2.0.2",
    "updatedAt": "2019-09-21T07:22:34.568Z"
  }