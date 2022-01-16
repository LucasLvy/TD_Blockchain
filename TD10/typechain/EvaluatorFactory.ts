/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Evaluator } from "./Evaluator";

export class EvaluatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _TDAAVE: string,
    _aDAI: string,
    _USDC: string,
    _variableDebtUSDC: string,
    overrides?: Overrides
  ): Promise<Evaluator> {
    return super.deploy(
      _TDAAVE,
      _aDAI,
      _USDC,
      _variableDebtUSDC,
      overrides || {}
    ) as Promise<Evaluator>;
  }
  getDeployTransaction(
    _TDAAVE: string,
    _aDAI: string,
    _USDC: string,
    _variableDebtUSDC: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _TDAAVE,
      _aDAI,
      _USDC,
      _variableDebtUSDC,
      overrides || {}
    );
  }
  attach(address: string): Evaluator {
    return super.attach(address) as Evaluator;
  }
  connect(signer: Signer): EvaluatorFactory {
    return super.connect(signer) as EvaluatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Evaluator {
    return new Contract(address, _abi, signerOrProvider) as Evaluator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20TD",
        name: "_TDAAVE",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_aDAI",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_USDC",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_variableDebtUSDC",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "erc20Address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "adaiAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "UsdcAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "variableDebtUSDCAddress",
        type: "address",
      },
    ],
    name: "constructedCorrectly",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "TDAAVE",
    outputs: [
      {
        internalType: "contract ERC20TD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDC",
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
    name: "aDAI",
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
    name: "ex1_showIDepositedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex2_showIBorrowedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex3_showIRepaidTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex4_showIWithdrewTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex5_showContractCanDepositTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex6_showContractCanBorrowTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex7_showContractCanRepayTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex8_showContractCanWithdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ex9_performFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "exerciceProgression",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasBeenPaired",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "studentExercice",
    outputs: [
      {
        internalType: "contract IExerciceSolution",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IExerciceSolution",
        name: "studentExercice_",
        type: "address",
      },
    ],
    name: "submitExercice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "variableDebtUSDC",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018f1380380620018f18339810160408190526200003491620000d2565b600080546001600160a01b03199081166001600160a01b038781169190911792839055600180548316878316179081905560028054841687841617908190556003805490941686841617938490556040517f82169bf8e2a940653a3005b8fbe3a01d8ab56fd5bbbcd0bf31ac67b29cee1f9795620000c095908516949384169392831692169062000139565b60405180910390a1505050506200017d565b60008060008060808587031215620000e8578384fd5b8451620000f58162000164565b6020860151909450620001088162000164565b60408601519093506200011b8162000164565b60608601519092506200012e8162000164565b939692955090935050565b6001600160a01b03948516815292841660208401529083166040830152909116606082015260800190565b6001600160a01b03811681146200017a57600080fd5b50565b611764806200018d6000396000f3fe6080604052600436106100d25760003560e01c80630c58c95c146100db5780631a38a4fb146101115780632236d35314610126578063289cf40c146101465780632e45a7b11461015b5780632e64c5001461017057806330af745f1461019d5780633abe5e1f146101b25780635d5fff31146101c75780635f00f322146101dc578063689d82c0146101f157806389a3027114610206578063a3f621421461021b578063bae3872e14610230578063dc87d1e714610245578063e604cbc41461025a578063f4fdbb881461026f576100d9565b366100d957005b005b3480156100e757600080fd5b506100fb6100f6366004611426565b61028f565b604051610108919061148c565b60405180910390f35b34801561011d57600080fd5b506100fb6102aa565b34801561013257600080fd5b506100d9610141366004611426565b6102b9565b34801561015257600080fd5b506100d9610323565b34801561016757600080fd5b506100d9610477565b34801561017c57600080fd5b5061019061018b366004611449565b6105c7565b60405161010891906114b9565b3480156101a957600080fd5b506100d96105e7565b3480156101be57600080fd5b506100d9610844565b3480156101d357600080fd5b506100d961095a565b3480156101e857600080fd5b506100d9610c24565b3480156101fd57600080fd5b506100fb610e4a565b34801561021257600080fd5b506100fb610e59565b34801561022757600080fd5b506100d9610e68565b34801561023c57600080fd5b506100d9610fb6565b34801561025157600080fd5b506100fb6111dc565b34801561026657600080fd5b506100d96111eb565b34801561027b57600080fd5b5061019061028a366004611426565b611411565b6005602052600090815260409020546001600160a01b031681565b6001546001600160a01b031681565b6001600160a01b03811660009081526006602052604090205460ff16156102df57600080fd5b33600090815260056020908152604080832080546001600160a01b039095166001600160a01b0319909516851790559282526006905220805460ff19166001179055565b6003546040516370a0823160e01b81526000916001600160a01b0316906370a082319061035490339060040161148c565b60206040518083038186803b15801561036c57600080fd5b505afa158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a49190611474565b116103ca5760405162461bcd60e51b81526004016103c19061169b565b60405180910390fd5b3360009081526004602090815260408083206002845290915290205460ff166104755733600081815260046020818152604080842060028086529252808420805460ff19166001179055925492516302b1493160e31b81526001600160a01b03939093169363158a49889361044293919291016114a0565b600060405180830381600087803b15801561045c57600080fd5b505af1158015610470573d6000803e3d6000fd5b505050505b565b3360009081526004602090815260408083206002845290915290205460ff166104b25760405162461bcd60e51b81526004016103c190611591565b6003546040516370a0823160e01b81526001600160a01b03909116906370a08231906104e290339060040161148c565b60206040518083038186803b1580156104fa57600080fd5b505afa15801561050e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105329190611474565b1561054f5760405162461bcd60e51b81526004016103c19061150a565b3360009081526004602090815260408083206003845290915290205460ff166104755733600081815260046020818152604080842060038552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a49889261044292600291016114a0565b600460209081526000928352604080842090915290825290205460ff1681565b600354336000908152600560205260408082205490516370a0823160e01b815291926001600160a01b03908116926370a082319261062992169060040161148c565b60206040518083038186803b15801561064157600080fd5b505afa158015610655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106799190611474565b33600090815260056020526040808220548151631a231a7160e01b815291519394506001600160a01b031692631a231a719260048084019391929182900301818387803b1580156106c957600080fd5b505af11580156106dd573d6000803e3d6000fd5b5050600354336000908152600560205260408082205490516370a0823160e01b81529194506001600160a01b0392831693506370a08231926107249291169060040161148c565b60206040518083038186803b15801561073c57600080fd5b505afa158015610750573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107749190611474565b90508082106107955760405162461bcd60e51b81526004016103c19061154e565b3360009081526004602090815260408083206006845290915290205460ff166108405733600081815260046020818152604080842060068552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a49889261080d92600291016114a0565b600060405180830381600087803b15801561082757600080fd5b505af115801561083b573d6000803e3d6000fd5b505050505b5050565b6001546040516370a0823160e01b81526000916001600160a01b0316906370a082319061087590339060040161148c565b60206040518083038186803b15801561088d57600080fd5b505afa1580156108a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c59190611474565b116108e25760405162461bcd60e51b81526004016103c19061150a565b3360009081526004602090815260408083206001845290915290205460ff166104755733600081815260046020818152604080842060018086529252808420805460ff1916909217909155915491516302b1493160e31b81526001600160a01b039092169263158a49889261044292600291016114a0565b600254336000908152600560205260408082205490516370a0823160e01b815291926001600160a01b03908116926370a082319261099c92169060040161148c565b60206040518083038186803b1580156109b457600080fd5b505afa1580156109c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ec9190611474565b3360009081526005602052604080822054815163361c7d6560e21b815291519394506001600160a01b03169263d871f5949260048084019391929182900301818387803b158015610a3c57600080fd5b505af1158015610a50573d6000803e3d6000fd5b5050600254336000908152600560205260408082205490516370a0823160e01b81529194506001600160a01b0392831693506370a0823192610a979291169060040161148c565b60206040518083038186803b158015610aaf57600080fd5b505afa158015610ac3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae79190611474565b905064e8d4a51000808211610b0e5760405162461bcd60e51b81526004016103c1906114c4565b33600090815260056020526040808220548151637e3334db60e11b815291516001600160a01b039091169263fc6669b6926004808201939182900301818387803b158015610b5b57600080fd5b505af1158015610b6f573d6000803e3d6000fd5b50503360009081526004602090815260408083206009845290915290205460ff169150610c1f90505733600081815260046020818152604080842060098552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a498892610bec929081016114a0565b600060405180830381600087803b158015610c0657600080fd5b505af1158015610c1a573d6000803e3d6000fd5b505050505b505050565b600354336000908152600560205260408082205490516370a0823160e01b815291926001600160a01b03908116926370a0823192610c6692169060040161148c565b60206040518083038186803b158015610c7e57600080fd5b505afa158015610c92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb69190611474565b33600090815260056020526040808220548151634b5bd34f60e01b815291519394506001600160a01b031692634b5bd34f9260048084019391929182900301818387803b158015610d0657600080fd5b505af1158015610d1a573d6000803e3d6000fd5b5050600354336000908152600560205260408082205490516370a0823160e01b81529194506001600160a01b0392831693506370a0823192610d619291169060040161148c565b60206040518083038186803b158015610d7957600080fd5b505afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611474565b9050808211610dd25760405162461bcd60e51b81526004016103c190611655565b3360009081526004602090815260408083206007845290915290205460ff166108405733600081815260046020818152604080842060078552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a49889261080d92600291016114a0565b6003546001600160a01b031681565b6002546001600160a01b031681565b3360009081526004602090815260408083206001845290915290205460ff16610ea35760405162461bcd60e51b81526004016103c1906116df565b6001546040516370a0823160e01b81526001600160a01b03909116906370a0823190610ed390339060040161148c565b60206040518083038186803b158015610eeb57600080fd5b505afa158015610eff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f239190611474565b15610f405760405162461bcd60e51b81526004016103c19061150a565b33600090815260046020818152604080842092845291905290205460ff1661047557336000818152600460208181526040808420838552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a49889261044292600291016114a0565b600154336000908152600560205260408082205490516370a0823160e01b815291926001600160a01b03908116926370a0823192610ff892169060040161148c565b60206040518083038186803b15801561101057600080fd5b505afa158015611024573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110489190611474565b3360009081526005602052604080822054815163db50609f60e01b815291519394506001600160a01b03169263db50609f9260048084019391929182900301818387803b15801561109857600080fd5b505af11580156110ac573d6000803e3d6000fd5b5050600154336000908152600560205260408082205490516370a0823160e01b81529194506001600160a01b0392831693506370a08231926110f39291169060040161148c565b60206040518083038186803b15801561110b57600080fd5b505afa15801561111f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111439190611474565b90508082116111645760405162461bcd60e51b81526004016103c19061160c565b3360009081526004602090815260408083206008845290915290205460ff166108405733600081815260046020818152604080842060088552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a49889261080d92600291016114a0565b6000546001600160a01b031681565b600154336000908152600560205260408082205490516370a0823160e01b815291926001600160a01b03908116926370a082319261122d92169060040161148c565b60206040518083038186803b15801561124557600080fd5b505afa158015611259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127d9190611474565b33600090815260056020526040808220548151637b5cb5d760e11b815291519394506001600160a01b03169263f6b96bae9260048084019391929182900301818387803b1580156112cd57600080fd5b505af11580156112e1573d6000803e3d6000fd5b5050600154336000908152600560205260408082205490516370a0823160e01b81529194506001600160a01b0392831693506370a08231926113289291169060040161148c565b60206040518083038186803b15801561134057600080fd5b505afa158015611354573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113789190611474565b90508082106113995760405162461bcd60e51b81526004016103c1906115c8565b3360009081526004602090815260408083206005845290915290205460ff166108405733600081815260046020818152604080842060058552909152808320805460ff19166001179055915491516302b1493160e31b81526001600160a01b03929092169263158a49889261080d92600291016114a0565b60066020526000908152604090205460ff1681565b600060208284031215611437578081fd5b813561144281611716565b9392505050565b6000806040838503121561145b578081fd5b823561146681611716565b946020939093013593505050565b600060208284031215611485578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60208082526026908201527f596f757220636f6e747261637420646f6573206e6f7420686f6c6420314d20646040820152656f6c6c61727360d01b606082015260800190565b60208082526024908201527f53656e64657220686173206e6f74206465706f73697465642044414920696e206040820152634141564560e01b606082015260800190565b60208082526023908201527f596f757220636f6e747261637420646964206e6f7420626f72726f7720746f6b604082015262656e7360e81b606082015260800190565b6020808252601d908201527f596f752073686f756c64206861766520636f6d706c6574656420657832000000604082015260600190565b60208082526024908201527f596f757220636f6e747261637420646964206e6f74206465706f73697420746f6040820152636b656e7360e01b606082015260800190565b60208082526029908201527f596f757220636f6e747261637420646964206e6f742077697468647261772069604082015268747320746f6b656e7360b81b606082015260800190565b60208082526026908201527f596f757220636f6e747261637420646964206e6f742072657061792069747320604082015265746f6b656e7360d01b606082015260800190565b60208082526024908201527f53656e64657220686173206e6f7420626f72726f776564205553444320696e206040820152634141564560e01b606082015260800190565b6020808252601d908201527f596f752073686f756c64206861766520636f6d706c6574656420657831000000604082015260600190565b6001600160a01b038116811461172b57600080fd5b5056fea26469706673582212203a88ef32d78c667d14effdd13ea4ff76ba266d835b5947b9c1455b94bbffec0b64736f6c63430007060033";
