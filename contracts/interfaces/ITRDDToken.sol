// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ITRDDToken
 * @dev Interface for the TradeDAO Protocol Token ($TRDD).
 * Total supply is fixed at 1,000,000,000 tokens with permanently disabled minting.
 */
interface ITRDDToken {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event TokensBurned(address indexed burner, uint256 amount, uint256 newTotalSupply);
}
