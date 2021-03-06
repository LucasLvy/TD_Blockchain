/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ExerciceSolution } from "./ExerciceSolution";

export class ExerciceSolutionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    dai_: string,
    AAVE_: string,
    overrides?: Overrides
  ): Promise<ExerciceSolution> {
    return super.deploy(
      dai_,
      AAVE_,
      overrides || {}
    ) as Promise<ExerciceSolution>;
  }
  getDeployTransaction(
    dai_: string,
    AAVE_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(dai_, AAVE_, overrides || {});
  }
  attach(address: string): ExerciceSolution {
    return super.attach(address) as ExerciceSolution;
  }
  connect(signer: Signer): ExerciceSolutionFactory {
    return super.connect(signer) as ExerciceSolutionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExerciceSolution {
    return new Contract(address, _abi, signerOrProvider) as ExerciceSolution;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "dai_",
        type: "address",
      },
      {
        internalType: "contract IAave",
        name: "AAVE_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AAVE",
    outputs: [
      {
        internalType: "contract IAave",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "borrowSomeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dai",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161028e38038061028e8339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b031991821617909155600180549390921692169190911790556102148061007a6000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c80631a231a711461007d57806348ccda3c146100875780634b5bd34f1461007d578063d871f5941461007d578063db50609f1461007d578063f4b9fa75146100ab578063f6b96bae146100b3578063fc6669b61461007d575b600080fd5b6100856100bb565b005b61008f6100bd565b604080516001600160a01b039092168252519081900360200190f35b61008f6100cc565b6100856100db565b565b6001546001600160a01b031681565b6000546001600160a01b031681565b600080546001546040805163095ea7b360e01b81526001600160a01b039283166004820152600a60248201529051919092169263095ea7b392604480820193602093909283900390910190829087803b15801561013757600080fd5b505af115801561014b573d6000803e3d6000fd5b505050506040513d602081101561016157600080fd5b505060018054600080546040805163e8eda9df60e01b81526001600160a01b0392831660048201526024810195909552306044860152606485018390525192169263e8eda9df926084808301939282900301818387803b1580156101c457600080fd5b505af11580156101d8573d6000803e3d6000fd5b5050505056fea264697066735822122015a491ae23b8014a3d12ecbfc51ff515ee5ea45248d36b46f80633557464ad5e64736f6c63430007060033";
