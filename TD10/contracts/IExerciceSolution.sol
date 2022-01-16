pragma solidity ^0.7.6;

interface IExerciceSolution {
    function depositSomeTokens() external;

    function withdrawSomeTokens() external;

    function borrowSomeTokens() external;

    function repaySomeTokens() external;

    function doAFlashLoan() external;

    function repayFlashLoan() external;
}
