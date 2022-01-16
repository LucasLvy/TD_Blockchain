const ExerciceSolution = artifacts.require("ExerciceSolution");

module.exports = async function (deployer) {
  await deployer.deploy(
    ExerciceSolution,
    "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD", // DAI
    "0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe", // Lending Pool proxy
    "0xe22da380ee6b445bb8273c81944adeb6e8450422" // USDC
  );
  console.log(await ExerciceSolution.deployed());
};
