// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "./ERC20Claimable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./IExerciceSolution.sol";
import "./ExerciceSolutionToken.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";


contract ExerciceSolution is IExerciceSolution{
    using SafeERC20 for ERC20Claimable;
    using SafeMath for uint256;
    ERC20Claimable public erc20Claimable;
    ExerciceSolutionToken public exerciceSolutionToken;
    mapping (address => uint256) public record;
    

    event Claimed(address claimer, uint256 amount);
    event Withdrawn(address withdrawer, uint256 amount);
    event Deposited(address depositer, uint256 amount);
    event Balance(address user, uint256 amount);

    constructor(ERC20Claimable _erc20Claimable, ExerciceSolutionToken _exerciceSolutionToken) {
        erc20Claimable = _erc20Claimable;
        exerciceSolutionToken = _exerciceSolutionToken;
    }

    function claimTokensOnBehalf() override external {
        erc20Claimable.claimTokens();
        exerciceSolutionToken.mint(msg.sender, erc20Claimable.distributedAmount());
        record[msg.sender] = record[msg.sender].add(uint256(erc20Claimable.distributedAmount()));
        emit Claimed(msg.sender, record[msg.sender]);
    }

    function tokensInCustody(address callerAddress) override external returns (uint256) {
        emit Balance(callerAddress, 2 * erc20Claimable.distributedAmount());
        return record[callerAddress];
    }

	function depositTokens(uint256 amount) override external returns (uint256) {
        erc20Claimable.transferFrom(msg.sender, address(this), amount);
        record[msg.sender] = record[msg.sender].add(amount);
        exerciceSolutionToken.mint(msg.sender, amount);
        emit Deposited(msg.sender, amount);
        return amount;
    }

    function withdrawTokens(uint256 amount) override external returns (uint256)  {
        record[msg.sender] = record[msg.sender].sub(amount, "trying to withdraw more than balance");
        erc20Claimable.transfer(msg.sender, amount);
        exerciceSolutionToken.burn(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
        return amount;
    }


    function getERC20DepositAddress() override external returns (address) {
        return address(exerciceSolutionToken);
    }

}