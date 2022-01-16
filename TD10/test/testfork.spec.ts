import { ethers } from "hardhat";
import { Signer, constants, Wallet, Contract } from "ethers";
import chai from "chai";
import { deployContract, solidity } from "ethereum-waffle";
import EvaluatorJson from "../build/contracts/Evaluator.json";
import LendingJson from "./LendingPool.json";
import { ExerciceSolution } from "../typechain/ExerciceSolution";
import ExerciceSolutionArtifact from "../artifacts/contracts/ExerciceSolution.sol/ExerciceSolution.json";
import { ModifiableContract, smoddit } from "@eth-optimism/smock";
import moment from "moment";
import Web3 from "web3";

const { expect, use } = chai;

describe("Signature testing", () => {
  const EVALUATOR_ADDRESS: string =
    "0x0605830a47081c4f3F8C4583C624A901945321dB";
  const LENDING_ADDRESS: string = "0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe";
  const DAI_ADDRESS: string = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD";
  //const LENDING_ADDRESS: string = '0xdcf0af9e59c002fa3aa091a46196b37530fd48a8'
  let evaluator: Contract;
  let lending: Contract;
  let ExerciceSolution: ExerciceSolution;
  let signers: Signer[];
  let userAddress: string;
  let myAcc: Wallet;
  let web3 = new Web3("http://127.0.0.1:7545");

  before(async () => {
    signers = await ethers.getSigners();
    myAcc = new ethers.Wallet(
      "e02acacfd692f93054d4273c0971ca19f8b46edf3e27549db15cde2fe1bb1c6d",
      signers[0].provider
    );
    evaluator = await ethers.getContractAt(
      EvaluatorJson.abi,
      EVALUATOR_ADDRESS,
      myAcc
    );
    lending = await ethers.getContractAt(LendingJson, LENDING_ADDRESS, myAcc);
    userAddress = await myAcc.getAddress();
    await signers[1].sendTransaction({
      to: userAddress,
      value: ethers.utils.parseEther("1000.0"),
    });

    ExerciceSolution = (await deployContract(myAcc, ExerciceSolutionArtifact, [
      DAI_ADDRESS,
      LENDING_ADDRESS,
    ])) as ExerciceSolution;
    ExerciceSolution = ExerciceSolution.connect(myAcc);
  });

  describe("Deployment", () => {
    it("should deploy the exercice solution  contract with a proper contract address", async () => {
      expect(ExerciceSolution.address).to.properAddress;
    });
    it("Submit exercice", async () => {
      expect(await evaluator.submitExercice(ExerciceSolution.address)).not.to.be
        .reverted;
      //console.log(await evaluator.studentExerciceSolution(userAddress))
    });
  });

  describe("deposit test", () => {
    it("deposit ", async () => {
      // expect(await evaluator.ex5_showContractCanDepositTokens()).to.be.reverted
    });
  });
});
