pragma solidity ^0.7.6;

interface IExerciceSolution {
    function addLiquidity() external;

    function withdrawLiquidity() external;

    function swapYourTokenForDummyToken() external;

    function swapYourTokenForEth() external;
}
