const abiExchange = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "erc20TokenAddress",
                "type": "address"
            }
        ],
        "name": "addToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "priceInWei",
                "type": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "isSellOrder",
                "type": "bool"
            },
            {
                "name": "priceInWei",
                "type": "uint256"
            },
            {
                "name": "offerKey",
                "type": "uint256"
            }
        ],
        "name": "cancelOrder",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "depositEther",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "amountTokens",
                "type": "uint256"
            }
        ],
        "name": "depositToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            }
        ],
        "name": "getSymbolIndexOrThrow",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "priceInWei",
                "type": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "sellToken",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amountInWei",
                "type": "uint256"
            }
        ],
        "name": "withdrawEther",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "amountTokens",
                "type": "uint256"
            }
        ],
        "name": "withdrawToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_token",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "TokenAddedToSystem",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_amountTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "DepositForTokenReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_amountTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "WithdrawalToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "DepositForEthReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "WithdrawalEth",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_who",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_amountTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_priceInWei",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_orderKey",
                "type": "uint256"
            }
        ],
        "name": "LimitBuyOrderCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "_who",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_amountTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_priceInWei",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_orderKey",
                "type": "uint256"
            }
        ],
        "name": "LimitSellOrderCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_amountTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_priceInWei",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_orderKey",
                "type": "uint256"
            }
        ],
        "name": "BuyOrderFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_amountTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_priceInWei",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_orderKey",
                "type": "uint256"
            }
        ],
        "name": "SellOrderFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_priceInWei",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_orderKey",
                "type": "uint256"
            }
        ],
        "name": "BuyOrderCanceled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_symbolIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_priceInWei",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_orderKey",
                "type": "uint256"
            }
        ],
        "name": "SellOrderCanceled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_test1",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_test2",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_test3",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_test4",
                "type": "uint256"
            }
        ],
        "name": "Debug",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            }
        ],
        "name": "addressToken",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "Debug2",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            }
        ],
        "name": "getBalance",
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
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            }
        ],
        "name": "getBuyOrderBook",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getEthBalanceInWei",
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
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            }
        ],
        "name": "getSellOrderBook",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "symbolName",
                "type": "string"
            }
        ],
        "name": "hasToken",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

const Networks = {
    Offline: {
        rpc: 'offline',
        tx_explorer: null
    },
    'Ropsten Testnet': {
        rpc: 'https://ropsten.infura.io/v3/b2fe6cbf64f14f1b988b8e4d5c50cd56',
        tx_explorer: 'https://ropsten.etherscan.io/tx/'
    },
    'Main Net': {
        rpc: 'https://mainnet.infura.io/v3/b2fe6cbf64f14f1b988b8e4d5c50cd56',
        tx_explorer: 'https://etherscan.io/tx/'
    },
}

const contractAddress = '0x5006b7969f064f57456a5296d729773d502f3ae8'

const Web3Factory = function () {
    this.web3 = null
}

Web3Factory.prototype.getInstance = function () {
    if (this.web3) {
        return this.web3
    } else {
        this.web3 = new Web3()
        return this.web3
    }
}

const _getBalanceBySymbol = async function (Web3Factory, abiExchange, network, contractAddress, symbol) {
    const factory = new Web3Factory()

    const web3 = factory.getInstance()

    web3.setProvider(network.rpc)

    const contract = new web3.eth.Contract(abiExchange, contractAddress)

    const balance = await contract.methods.getBalance(symbol).call()

    return balance
}

const getBalanceBySymbol = async function (symbol) {
    return await _getBalanceBySymbol(
        Web3Factory,
        abiExchange,
        Networks['Ropsten Testnet'],
        contractAddress,
        symbol
    )
}

getBalanceBySymbol('FIXED')
    .then()
