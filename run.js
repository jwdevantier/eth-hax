const Eth = require('ethjs');
const eth = new Eth(new Eth.HttpProvider('http://localhost:8545'));

// eth.getBlockByNumber(3, true, (err, block) => {
//     //console.log(err, block)
//   // result null { ...block data... }
// });

eth.accounts(function(accountsError, accounts) {
    accounts.forEach(function(account){
        console.log(account)
      eth.getBalance(account, function(balanceError, balance){
        console.log(balance)
        Eth.fromWei(balance, 'ether')
      });
    });
  });


// const etherValue = Eth.toWei(72, 'ether');

// // result <BN: 3e733628714200000>

// const tokenABI = [{
//   "constant": true,
//   "inputs": [],
//   "name": "totalSupply",
//   "outputs":[{"name": "","type": "uint256"}],
//   "payable": false,
//   "type": "function",
// }];

// const token = eth.contract(tokenABI).at('0x6e0E0e02377Bc1d90E8a7c21f12BA385C2C35f78');

// token.totalSupply().then((totalSupply) => {
//   // result <BN ...>  4500000
// });