var contract = artifacts.require("./Pza.sol");

module.exports = function(deployer) {
  deployer.deploy(contract);
};
