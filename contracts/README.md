# TradeDAO Smart Contracts

This directory contains verified interface definitions and ABI specifications for TradeDAO on-chain components.

## Verified Contracts

| Contract | Interface | Network | Address |
|---|---|---|---|
| **$TRDD Token** | [`ITRDDToken.sol`](./interfaces/ITRDDToken.sol) | Polygon / EVM | `0x55d398326f99859FF77548524699982783197953` |
| **Dead Burn Vault** | Burn Target | EVM Standard | `0x000000000000000000000000000000000000dEaD` |
| **Buyback Vault** | [`IBuybackBurnVault.sol`](./interfaces/IBuybackBurnVault.sol) | Polygon / EVM | Deployed via Protocol Multi-Sig |
| **Dividend Pool** | [`IDividendDistributor.sol`](./interfaces/IDividendDistributor.sol) | Polygon / EVM | Deployed via Protocol Multi-Sig |

## Compilation & Integration

Interfaces are compatible with Solidity `^0.8.20` and can be imported directly into Hardhat, Foundry, or Truffle environments:

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
