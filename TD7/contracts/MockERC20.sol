// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @dev This contract is only used for testing purposes
contract MockERC20 is ERC20 {
    constructor(string memory tokenName, string memory tokenSymbol)
        public
        ERC20(tokenName, tokenSymbol)
    {
        _setupDecimals(18);
        _mint(msg.sender, 947871417000000000000000000);
    }
}
