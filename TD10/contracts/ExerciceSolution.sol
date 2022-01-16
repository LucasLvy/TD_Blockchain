// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./IExerciceSolution.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IAave.sol";

contract ExerciceSolution is IExerciceSolution {
    IERC20 public dai;
    IAave public AAVE;
    IERC20 public usdc;
    uint256 public AMOUNT;

    constructor(
        IERC20 dai_,
        IAave AAVE_,
        IERC20 usdc_
    ) public {
        dai = dai_;
        AAVE = AAVE_;
        usdc = usdc_;
    }

    function depositSomeTokens() external override {
        uint256 AMOUNT = dai.balanceOf(address(this));
        dai.approve(address(AAVE), AMOUNT);
        AAVE.deposit(address(dai), AMOUNT, address(this), 0);
        dai.approve(address(AAVE), 0);
    }

    function withdrawSomeTokens() external override {
        AAVE.withdraw(address(dai), 10000, address(this));
    }

    function borrowSomeTokens() external override {
        AAVE.borrow(address(usdc), 1000000000000, 2, 0, address(this));
    }

    function repaySomeTokens() external override {
        usdc.approve(address(AAVE), 10000000);
        AAVE.repay(address(usdc), 10000000, 2, address(this));
        usdc.approve(address(AAVE), 0);
    }

    function doAFlashLoan() external override {
        uint256 amountToBorrow = 10000000 * 1000000;
        address[] memory assets = new address[](1);
        assets[0] = address(usdc);
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amountToBorrow;
        uint256[] memory modes = new uint256[](1);
        modes[0] = 0;
        bytes memory params = "";
        AAVE.flashLoan(address(this), assets, amounts, modes, address(this), params, 0);
    }

    function repayFlashLoan() external override {
        usdc.approve(address(AAVE), usdc.balanceOf(address(this)));
    }
}
