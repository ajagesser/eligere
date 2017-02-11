//import * as web3 from 'web3';
let Web3 = require('web3');
let web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

let contractAddress = "0x80507828ab1323056cbadf3fa297048be61b7499";
var filter = web3.eth.filter({fromBlock:0, toBlock: 'latest', address: contractAddress,
                              'topics':[web3.sha3('Deposit(bytes32,address)')]});
filter.watch(function(error, result) {
    console.log("hello");
    console.log(error);
    console.log(result);
});

