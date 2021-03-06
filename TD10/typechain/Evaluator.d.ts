/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EvaluatorInterface extends ethers.utils.Interface {
  functions: {
    "TDAAVE()": FunctionFragment;
    "USDC()": FunctionFragment;
    "aDAI()": FunctionFragment;
    "ex1_showIDepositedTokens()": FunctionFragment;
    "ex2_showIBorrowedTokens()": FunctionFragment;
    "ex3_showIRepaidTokens()": FunctionFragment;
    "ex4_showIWithdrewTokens()": FunctionFragment;
    "ex5_showContractCanDepositTokens()": FunctionFragment;
    "ex6_showContractCanBorrowTokens()": FunctionFragment;
    "ex7_showContractCanRepayTokens()": FunctionFragment;
    "ex8_showContractCanWithdrawTokens()": FunctionFragment;
    "ex9_performFlashLoan()": FunctionFragment;
    "exerciceProgression(address,uint256)": FunctionFragment;
    "hasBeenPaired(address)": FunctionFragment;
    "studentExercice(address)": FunctionFragment;
    "submitExercice(address)": FunctionFragment;
    "variableDebtUSDC()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "TDAAVE", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "aDAI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ex1_showIDepositedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex2_showIBorrowedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex3_showIRepaidTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex4_showIWithdrewTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex5_showContractCanDepositTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex6_showContractCanBorrowTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex7_showContractCanRepayTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex8_showContractCanWithdrawTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ex9_performFlashLoan",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exerciceProgression",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasBeenPaired",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "studentExercice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "submitExercice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "variableDebtUSDC",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "TDAAVE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "aDAI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ex1_showIDepositedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex2_showIBorrowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex3_showIRepaidTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex4_showIWithdrewTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex5_showContractCanDepositTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex6_showContractCanBorrowTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex7_showContractCanRepayTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex8_showContractCanWithdrawTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ex9_performFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exerciceProgression",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasBeenPaired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "studentExercice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitExercice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variableDebtUSDC",
    data: BytesLike
  ): Result;

  events: {
    "constructedCorrectly(address,address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "constructedCorrectly"): EventFragment;
}

export class Evaluator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EvaluatorInterface;

  functions: {
    TDAAVE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "TDAAVE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    USDC(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "USDC()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    aDAI(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "aDAI()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    ex1_showIDepositedTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex1_showIDepositedTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex2_showIBorrowedTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex2_showIBorrowedTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex3_showIRepaidTokens(overrides?: Overrides): Promise<ContractTransaction>;

    "ex3_showIRepaidTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex4_showIWithdrewTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex4_showIWithdrewTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex5_showContractCanDepositTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex5_showContractCanDepositTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex6_showContractCanBorrowTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex6_showContractCanBorrowTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex7_showContractCanRepayTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex7_showContractCanRepayTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex8_showContractCanWithdrawTokens(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ex8_showContractCanWithdrawTokens()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ex9_performFlashLoan(overrides?: Overrides): Promise<ContractTransaction>;

    "ex9_performFlashLoan()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    exerciceProgression(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "exerciceProgression(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    hasBeenPaired(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasBeenPaired(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    studentExercice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "studentExercice(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    submitExercice(
      studentExercice_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "submitExercice(address)"(
      studentExercice_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    variableDebtUSDC(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "variableDebtUSDC()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  TDAAVE(overrides?: CallOverrides): Promise<string>;

  "TDAAVE()"(overrides?: CallOverrides): Promise<string>;

  USDC(overrides?: CallOverrides): Promise<string>;

  "USDC()"(overrides?: CallOverrides): Promise<string>;

  aDAI(overrides?: CallOverrides): Promise<string>;

  "aDAI()"(overrides?: CallOverrides): Promise<string>;

  ex1_showIDepositedTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "ex1_showIDepositedTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex2_showIBorrowedTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "ex2_showIBorrowedTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex3_showIRepaidTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "ex3_showIRepaidTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex4_showIWithdrewTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "ex4_showIWithdrewTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex5_showContractCanDepositTokens(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ex5_showContractCanDepositTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex6_showContractCanBorrowTokens(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ex6_showContractCanBorrowTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex7_showContractCanRepayTokens(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ex7_showContractCanRepayTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex8_showContractCanWithdrawTokens(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ex8_showContractCanWithdrawTokens()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ex9_performFlashLoan(overrides?: Overrides): Promise<ContractTransaction>;

  "ex9_performFlashLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

  exerciceProgression(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "exerciceProgression(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasBeenPaired(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "hasBeenPaired(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  studentExercice(arg0: string, overrides?: CallOverrides): Promise<string>;

  "studentExercice(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  submitExercice(
    studentExercice_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "submitExercice(address)"(
    studentExercice_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  variableDebtUSDC(overrides?: CallOverrides): Promise<string>;

  "variableDebtUSDC()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    TDAAVE(overrides?: CallOverrides): Promise<string>;

    "TDAAVE()"(overrides?: CallOverrides): Promise<string>;

    USDC(overrides?: CallOverrides): Promise<string>;

    "USDC()"(overrides?: CallOverrides): Promise<string>;

    aDAI(overrides?: CallOverrides): Promise<string>;

    "aDAI()"(overrides?: CallOverrides): Promise<string>;

    ex1_showIDepositedTokens(overrides?: CallOverrides): Promise<void>;

    "ex1_showIDepositedTokens()"(overrides?: CallOverrides): Promise<void>;

    ex2_showIBorrowedTokens(overrides?: CallOverrides): Promise<void>;

    "ex2_showIBorrowedTokens()"(overrides?: CallOverrides): Promise<void>;

    ex3_showIRepaidTokens(overrides?: CallOverrides): Promise<void>;

    "ex3_showIRepaidTokens()"(overrides?: CallOverrides): Promise<void>;

    ex4_showIWithdrewTokens(overrides?: CallOverrides): Promise<void>;

    "ex4_showIWithdrewTokens()"(overrides?: CallOverrides): Promise<void>;

    ex5_showContractCanDepositTokens(overrides?: CallOverrides): Promise<void>;

    "ex5_showContractCanDepositTokens()"(
      overrides?: CallOverrides
    ): Promise<void>;

    ex6_showContractCanBorrowTokens(overrides?: CallOverrides): Promise<void>;

    "ex6_showContractCanBorrowTokens()"(
      overrides?: CallOverrides
    ): Promise<void>;

    ex7_showContractCanRepayTokens(overrides?: CallOverrides): Promise<void>;

    "ex7_showContractCanRepayTokens()"(
      overrides?: CallOverrides
    ): Promise<void>;

    ex8_showContractCanWithdrawTokens(overrides?: CallOverrides): Promise<void>;

    "ex8_showContractCanWithdrawTokens()"(
      overrides?: CallOverrides
    ): Promise<void>;

    ex9_performFlashLoan(overrides?: CallOverrides): Promise<void>;

    "ex9_performFlashLoan()"(overrides?: CallOverrides): Promise<void>;

    exerciceProgression(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "exerciceProgression(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasBeenPaired(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "hasBeenPaired(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    studentExercice(arg0: string, overrides?: CallOverrides): Promise<string>;

    "studentExercice(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    submitExercice(
      studentExercice_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "submitExercice(address)"(
      studentExercice_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    variableDebtUSDC(overrides?: CallOverrides): Promise<string>;

    "variableDebtUSDC()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    constructedCorrectly(
      erc20Address: null,
      adaiAddress: null,
      UsdcAddress: null,
      variableDebtUSDCAddress: null
    ): EventFilter;
  };

  estimateGas: {
    TDAAVE(overrides?: CallOverrides): Promise<BigNumber>;

    "TDAAVE()"(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    "USDC()"(overrides?: CallOverrides): Promise<BigNumber>;

    aDAI(overrides?: CallOverrides): Promise<BigNumber>;

    "aDAI()"(overrides?: CallOverrides): Promise<BigNumber>;

    ex1_showIDepositedTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex1_showIDepositedTokens()"(overrides?: Overrides): Promise<BigNumber>;

    ex2_showIBorrowedTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex2_showIBorrowedTokens()"(overrides?: Overrides): Promise<BigNumber>;

    ex3_showIRepaidTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex3_showIRepaidTokens()"(overrides?: Overrides): Promise<BigNumber>;

    ex4_showIWithdrewTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex4_showIWithdrewTokens()"(overrides?: Overrides): Promise<BigNumber>;

    ex5_showContractCanDepositTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex5_showContractCanDepositTokens()"(
      overrides?: Overrides
    ): Promise<BigNumber>;

    ex6_showContractCanBorrowTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex6_showContractCanBorrowTokens()"(
      overrides?: Overrides
    ): Promise<BigNumber>;

    ex7_showContractCanRepayTokens(overrides?: Overrides): Promise<BigNumber>;

    "ex7_showContractCanRepayTokens()"(
      overrides?: Overrides
    ): Promise<BigNumber>;

    ex8_showContractCanWithdrawTokens(
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ex8_showContractCanWithdrawTokens()"(
      overrides?: Overrides
    ): Promise<BigNumber>;

    ex9_performFlashLoan(overrides?: Overrides): Promise<BigNumber>;

    "ex9_performFlashLoan()"(overrides?: Overrides): Promise<BigNumber>;

    exerciceProgression(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exerciceProgression(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasBeenPaired(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "hasBeenPaired(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    studentExercice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "studentExercice(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitExercice(
      studentExercice_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "submitExercice(address)"(
      studentExercice_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    variableDebtUSDC(overrides?: CallOverrides): Promise<BigNumber>;

    "variableDebtUSDC()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    TDAAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TDAAVE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "USDC()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aDAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "aDAI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ex1_showIDepositedTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex1_showIDepositedTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex2_showIBorrowedTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex2_showIBorrowedTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex3_showIRepaidTokens(overrides?: Overrides): Promise<PopulatedTransaction>;

    "ex3_showIRepaidTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex4_showIWithdrewTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex4_showIWithdrewTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex5_showContractCanDepositTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex5_showContractCanDepositTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex6_showContractCanBorrowTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex6_showContractCanBorrowTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex7_showContractCanRepayTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex7_showContractCanRepayTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex8_showContractCanWithdrawTokens(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ex8_showContractCanWithdrawTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ex9_performFlashLoan(overrides?: Overrides): Promise<PopulatedTransaction>;

    "ex9_performFlashLoan()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    exerciceProgression(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exerciceProgression(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasBeenPaired(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasBeenPaired(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    studentExercice(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "studentExercice(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitExercice(
      studentExercice_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "submitExercice(address)"(
      studentExercice_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    variableDebtUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "variableDebtUSDC()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
