const TwoFactor = artifacts.require("TwoFactor");
const TwoFactorFactory = artifacts.require("TwoFactorFactory"); 
module.exports = function (_deployer) { 
  _deployer.deploy(TwoFactor).then(() => _deployer.deploy(TwoFactorFactory, TwoFactor.address)); 
};
