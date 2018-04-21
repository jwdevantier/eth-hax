
const Web3 = require('web3')
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
  } else {
// set the provider you want from Web3.providers
web3 = new Web3(new Web3.providers.HttpProvider())
}

function balanceInEth(address) {
    return web3.fromWei(web3.eth.getBalance(address).toString(), 'ether')
}

const main = () => {
    const ethAccount = web3.eth.accounts[0]
    console.log(ethAccount)
}

main()