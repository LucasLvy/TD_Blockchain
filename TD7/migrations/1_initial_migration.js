const MockERC20 = artifacts.require("MockERC20");
const SwapContract = artifacts.require("SwapContract")

module.exports = async function (deployer) {
  // deployer.deploy(MockERC20, "JMwzT", "JMwzT");
  // const token = await MockERC20.deployed()
  deployer.deploy(SwapContract, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", "0x93e7A28E43544daFdf368039351Bc6eb06eA12cb", "0xfed1e3aa9fb4cf7ccd5ce0291deca90a3d23bfa6", "0xc778417E063141139Fce010982780140Aa0cD5Ab", "0x2333339067976549228acf2c083be13f4661c9f4")
};
