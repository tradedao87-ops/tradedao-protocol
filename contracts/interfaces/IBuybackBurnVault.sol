// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IBuybackBurnVault
 * @dev Autonomous Buyback & Burn Execution Vault.
 * Receives 30% of bot realized profits in USDT and executes market buybacks of $TRDD,
 * routing all acquired tokens to the permanent 0x0...dEaD burn address.
 */
interface IBuybackBurnVault {
    function depositProfitHarvest(uint256 usdtAmount) external;
    function executeMarketBuybackAndBurn(uint256 minTokensExpected) external returns (uint256 tokensBurned);
    function totalUsdtAllocated() external view returns (uint256);
    function totalTokensBurned() external view returns (uint256);

    event ProfitHarvestDeposited(uint256 usdtAmount, uint256 timestamp);
    event BuybackExecuted(uint256 usdtSpent, uint256 trddBurned, uint256 timestamp);
}
