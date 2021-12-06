// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "./IUniswapV2Router02.sol";
import "./MockERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./DummyToken.sol";

contract SwapContract {
    using SafeERC20 for MockERC20;
    using SafeERC20 for DummyToken;
    IUniswapV2Router02 public uniswapV2Router;
    MockERC20 public mockERC20;
    DummyToken public dummyToken;
    ERC20 public WETH;
    ERC20 public pair;

    constructor(
        IUniswapV2Router02 uniswapV2Router_,
        MockERC20 mockERC20_,
        DummyToken dummyToken_,
        ERC20 WETH_,
        ERC20 pair_
    ) public {
        uniswapV2Router = uniswapV2Router_;
        mockERC20 = mockERC20_;
        dummyToken = dummyToken_;
        WETH = WETH_;
        pair = pair_;
    }

    function swapYourTokenForEth() public {
        mockERC20.approve(address(uniswapV2Router), 1000000000000000000);
        address[] memory path = new address[](2);
        path[0] = address(mockERC20);
        path[1] = address(WETH);
        uniswapV2Router.swapExactTokensForETH(
            1000000000000000000,
            100,
            path,
            address(this),
            1639542421
        );
        mockERC20.approve(address(uniswapV2Router), 0);
    }

    function swapYourTokenForDummyToken() external {
        swapYourTokenForEth();
        // WETH.approve(address(uniswapV2Router), 1000000000000000000);
        address[] memory path = new address[](2);
        path[0] = address(WETH);
        path[1] = address(dummyToken);
        uniswapV2Router.swapETHForExactTokens{value: 100}(
            10000,
            path,
            address(this),
            1639542421
        );
        // WETH.approve(address(uniswapV2Router), 0);
    }

    function addLiquidity() external {
        mockERC20.approve(address(uniswapV2Router), 1000000000000000000);
        uniswapV2Router.addLiquidityETH{value: 10000000000}(
            address(mockERC20),
            1000000000,
            1,
            1,
            address(this),
            block.timestamp + 30 days
        );
        mockERC20.approve(address(uniswapV2Router), 0);
    }

    function withdrawLiquidity() external {
        pair.approve(address(uniswapV2Router), 1000000000000000000);
        uniswapV2Router.removeLiquidityETH(
            address(mockERC20),
            1000000,
            1,
            1,
            address(this),
            block.timestamp + 30 days
        );
        pair.approve(address(uniswapV2Router), 0);
    }

    receive() external payable {}
}
