const ExerciceSolution = artifacts.require("ExerciceSolution");
const ExerciceSolutionToken = artifacts.require("ExerciceSolutionToken");
const LazyTd = artifacts.require("LazyTd")

module.exports = async function (deployer) {
    await deployer.deploy(ExerciceSolutionToken, "ExerciceSolutionToken", "ERC20", 18, 0);
    const token = await ExerciceSolutionToken.deployed();
    await deployer.deploy(
        ExerciceSolution,
        "0xb5d82FEE98d62cb7Bc76eabAd5879fa4b29fFE94",
        token.address,
    );
    const exercice = await ExerciceSolution.deployed();
    await deployer.deploy(LazyTd, exercice.address, token.address, "0x384C00Ff43Ed5376F2d7ee814677a15f3e330705", "0xb5d82FEE98d62cb7Bc76eabAd5879fa4b29fFE94")
    const td = await LazyTd.deployed()

};
