// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IDividendDistributor
 * @dev Continuous Liquid USDT Dividend Pool.
 * Receives 30% of bot realized profits in liquid USDT and streams dividend claims
 * to qualifying $TRDD token holders without staking lockups.
 */
interface IDividendDistributor {
    function depositDividends(uint256 usdtAmount) external;
    function claimDividends(address account) external returns (uint256 claimedAmount);
    function getClaimableDividends(address account) external view returns (uint256);
    function minHoldingThreshold() external view returns (uint256);
    function totalDividendsDistributed() external view returns (uint256);

    event DividendsDeposited(uint256 usdtAmount, uint256 timestamp);
    event DividendsClaimed(address indexed account, uint256 usdtAmount, uint256 timestamp);
}
