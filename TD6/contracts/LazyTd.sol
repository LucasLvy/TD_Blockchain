// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "./ExerciceSolution.sol";
import "./ExerciceSolutionToken.sol";
import "./Evaluator.sol";
import "./ERC20Claimable.sol";

contract LazyTd {
    using SafeERC20 for ERC20Claimable;
    using SafeMath for uint256;
    ExerciceSolution public exerciceSolution;
    ExerciceSolutionToken public exerciceSolutionToken;
    Evaluator public evaluator;
    ERC20Claimable public erc20Claimable;
    event Finished(bool finished);


    constructor (ExerciceSolution _exerciceSolution,
    ExerciceSolutionToken _exerciceSolutionToken,
    Evaluator _evaluator,
    ERC20Claimable _erc20Claimable) public {
        exerciceSolution = _exerciceSolution;
        exerciceSolutionToken = _exerciceSolutionToken;
        evaluator = _evaluator;
        erc20Claimable = _erc20Claimable;
    }

    function executeTd() external returns(bool) {
        erc20Claimable.claimTokens();
        exerciceSolutionToken.setMinter(address(exerciceSolution), true);
        exerciceSolutionToken.setExContr(address(exerciceSolution));
        evaluator.submitExercice(exerciceSolution);
        evaluator.ex1_claimedPoints();
        evaluator.ex2_claimedFromContract();
        evaluator.ex3_withdrawFromContract();
        erc20Claimable.approve(address(exerciceSolution), 100000);
        evaluator.ex4_approvedExerciceSolution();
        erc20Claimable.approve(address(exerciceSolution), 0);
        evaluator.ex5_revokedExerciceSolution();
        erc20Claimable.approve(address(exerciceSolution), 100000000);
        evaluator.ex6_depositTokens();
        evaluator.ex7_createERC20();
        evaluator.ex8_depositAndMint();
        evaluator.ex9_withdrawAndBurn();
        emit Finished(true);
        return true;
    }
}
