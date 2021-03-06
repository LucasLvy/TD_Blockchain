/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IExerciceSolution } from "./IExerciceSolution";

export class IExerciceSolutionFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExerciceSolution {
    return new Contract(address, _abi, signerOrProvider) as IExerciceSolution;
  }
}

const _abi = [
  {
    inputs: [],
    name: "borrowSomeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositSomeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "doAFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repayFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repaySomeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawSomeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
