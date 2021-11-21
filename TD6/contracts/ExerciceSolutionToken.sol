// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IERC20Mintable.sol";



/// @dev This contract is only used for testing purposes
contract ExerciceSolutionToken is ERC20, IERC20Mintable {
    address public contr;
    mapping (address => bool) public minters;

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint8 tokenDecimals,
        uint256 initialSupply
    ) public ERC20(tokenName, tokenSymbol) {
        _setupDecimals(tokenDecimals);
        _mint(msg.sender, initialSupply);
        minters[address(this)] = true;
    }

    function setExContr(address _contr) external returns (bool) {
        contr = _contr;
        return true;
    }

    function setMinter(address minterAddress, bool isMinter) override external {
        minters[minterAddress] = isMinter;
    }

    function isMinter(address minterAddress) external override returns (bool) {
        return minters[minterAddress];
    }

    function mint(address _to, uint256 amount) external override {
        require(minters[msg.sender], "Only our contract can mint");
        _mint(_to, amount);
    }

    function burn(address _to, uint256 amount) external returns (bool) {
        require(minters[msg.sender], "Only our contract can burn");
        _burn(_to, amount);
        return true;
    }

}