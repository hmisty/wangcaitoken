var TokenContract = artifacts.require("./WangWangToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TokenContract);
};
