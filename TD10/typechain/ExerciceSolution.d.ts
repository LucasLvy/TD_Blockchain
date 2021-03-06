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

interface ExerciceSolutionInterface extends ethers.utils.Interface {
  functions: {
    "AAVE()": FunctionFragment;
    "borrowSomeTokens()": FunctionFragment;
    "dai()": FunctionFragment;
    "depositSomeTokens()": FunctionFragment;
    "doAFlashLoan()": FunctionFragment;
    "repayFlashLoan()": FunctionFragment;
    "repaySomeTokens()": FunctionFragment;
    "withdrawSomeTokens()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowSomeTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dai", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositSomeTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "doAFlashLoan",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayFlashLoan",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repaySomeTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSomeTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowSomeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositSomeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doAFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repaySomeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSomeTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class ExerciceSolution extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ExerciceSolutionInterface;

  functions: {
    AAVE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "AAVE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    borrowSomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

    "borrowSomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

    dai(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "dai()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    depositSomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

    "depositSomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

    doAFlashLoan(overrides?: Overrides): Promise<ContractTransaction>;

    "doAFlashLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

    repayFlashLoan(overrides?: Overrides): Promise<ContractTransaction>;

    "repayFlashLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

    repaySomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

    "repaySomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

    withdrawSomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawSomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  AAVE(overrides?: CallOverrides): Promise<string>;

  "AAVE()"(overrides?: CallOverrides): Promise<string>;

  borrowSomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "borrowSomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

  dai(overrides?: CallOverrides): Promise<string>;

  "dai()"(overrides?: CallOverrides): Promise<string>;

  depositSomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "depositSomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

  doAFlashLoan(overrides?: Overrides): Promise<ContractTransaction>;

  "doAFlashLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

  repayFlashLoan(overrides?: Overrides): Promise<ContractTransaction>;

  "repayFlashLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

  repaySomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "repaySomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

  withdrawSomeTokens(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawSomeTokens()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    AAVE(overrides?: CallOverrides): Promise<string>;

    "AAVE()"(overrides?: CallOverrides): Promise<string>;

    borrowSomeTokens(overrides?: CallOverrides): Promise<void>;

    "borrowSomeTokens()"(overrides?: CallOverrides): Promise<void>;

    dai(overrides?: CallOverrides): Promise<string>;

    "dai()"(overrides?: CallOverrides): Promise<string>;

    depositSomeTokens(overrides?: CallOverrides): Promise<void>;

    "depositSomeTokens()"(overrides?: CallOverrides): Promise<void>;

    doAFlashLoan(overrides?: CallOverrides): Promise<void>;

    "doAFlashLoan()"(overrides?: CallOverrides): Promise<void>;

    repayFlashLoan(overrides?: CallOverrides): Promise<void>;

    "repayFlashLoan()"(overrides?: CallOverrides): Promise<void>;

    repaySomeTokens(overrides?: CallOverrides): Promise<void>;

    "repaySomeTokens()"(overrides?: CallOverrides): Promise<void>;

    withdrawSomeTokens(overrides?: CallOverrides): Promise<void>;

    "withdrawSomeTokens()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    AAVE(overrides?: CallOverrides): Promise<BigNumber>;

    "AAVE()"(overrides?: CallOverrides): Promise<BigNumber>;

    borrowSomeTokens(overrides?: Overrides): Promise<BigNumber>;

    "borrowSomeTokens()"(overrides?: Overrides): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<BigNumber>;

    "dai()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositSomeTokens(overrides?: Overrides): Promise<BigNumber>;

    "depositSomeTokens()"(overrides?: Overrides): Promise<BigNumber>;

    doAFlashLoan(overrides?: Overrides): Promise<BigNumber>;

    "doAFlashLoan()"(overrides?: Overrides): Promise<BigNumber>;

    repayFlashLoan(overrides?: Overrides): Promise<BigNumber>;

    "repayFlashLoan()"(overrides?: Overrides): Promise<BigNumber>;

    repaySomeTokens(overrides?: Overrides): Promise<BigNumber>;

    "repaySomeTokens()"(overrides?: Overrides): Promise<BigNumber>;

    withdrawSomeTokens(overrides?: Overrides): Promise<BigNumber>;

    "withdrawSomeTokens()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "AAVE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowSomeTokens(overrides?: Overrides): Promise<PopulatedTransaction>;

    "borrowSomeTokens()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dai()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositSomeTokens(overrides?: Overrides): Promise<PopulatedTransaction>;

    "depositSomeTokens()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    doAFlashLoan(overrides?: Overrides): Promise<PopulatedTransaction>;

    "doAFlashLoan()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    repayFlashLoan(overrides?: Overrides): Promise<PopulatedTransaction>;

    "repayFlashLoan()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    repaySomeTokens(overrides?: Overrides): Promise<PopulatedTransaction>;

    "repaySomeTokens()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    withdrawSomeTokens(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawSomeTokens()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
