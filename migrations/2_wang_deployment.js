var WCTContract = artifacts.require("./WangCaiToken.sol");

module.exports = function(deployer) {
  deployer.deploy(WCTContract);
};
