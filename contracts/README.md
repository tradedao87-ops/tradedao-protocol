# TradeDAO Smart Contracts & Program Architecture

This directory contains verified interface definitions and program specifications for TradeDAO on-chain components.

## Core On-Chain Components

| Component | Architecture | Network | Identifier / Mint |
|---|---|---|---|
| **$TRDD Token** | Solana SPL Token Standard | Solana Mainnet (Pump.fun & PumpDex) | `TRDD...pump` ([Solscan](https://solscan.io)) |
| **On-Chain Burn Vault** | Permanent SPL Token Burn | Solana Mainnet | Programmatic Burn Authority Revoked |
| **Buyback Program** | Automated DEX Buyback Core | Solana / PumpDex | Programmatic Multi-Sig Execution |
| **Dividend Distributor** | Liquid USDT / SOL Stream | Multi-Chain / Solana | Audited Protocol Treasury Vault |

## Solidity / EVM Interfaces (Multi-Chain Reference)

For cross-chain liquidity and telemetry integration, Solidity interfaces (`^0.8.20`) are maintained in `./interfaces/`:

```solidity
import "./interfaces/ITRDDToken.sol";

contract AuditorIntegration {
    ITRDDToken public immutable trdd;

    constructor(address _trdd) {
        trdd = ITRDDToken(_trdd);
    }

    function verifyTotalSupply() external view returns (uint256) {
        return trdd.totalSupply();
    }
}
```
