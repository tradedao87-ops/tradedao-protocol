# TradeDAO ($TRDD) Tokenomics

<p align="center">
  <img src="../assets/trdd-token-256.png" alt="TradeDAO ($TRDD) Token Logo" width="140" height="140" />
</p>

The TradeDAO Protocol Token (`$TRDD`) serves as the core utility, value capture, and profit-sharing vehicle for the TradeDAO autonomous trading infrastructure.

> **Official Brand Assets & Wallet Integration:** Standardized high-resolution logos for Web3 wallets (Phantom, Solflare), DEXs (PumpDex, Pump.fun), and listing sites (CoinMarketCap, CoinGecko, DexScreener) are available in the [Brand Assets Directory](../assets/README.md).

---

## 1. Core Token Specifications

| Parameter | Specification |
|---|---|
| **Token Name** | TradeDAO Token |
| **Token Symbol** | `$TRDD` |
| **Blockchain** | Solana Mainnet |
| **Decimals** | 6 (Solana SPL Standard) |
| **Total Supply** | `1,000,000,000 $TRDD` (One Billion Fixed) |
| **Mint Function** | **Permanently Revoked** (100% Non-Mintable) |
| **Token Standard** | Solana SPL Token |
| **Launchpad & DEX** | Pump.fun & PumpDex |
| **Token Mint Address** | `TRDD...pump` ([View on Solscan](https://solscan.io)) |
| **Official Burn Method** | Permanent On-Chain SPL Token Burn via PumpDex / Solscan Proofs |
| **DEX Liquidity** | Pump.fun Bonding Curve / PumpDex Automated Liquidity Pools |
| **Brand Assets** | [View Standardized Logos](../assets/README.md) |

---

## 2. Token Allocation & Distribution Model

The 1 Billion initial token supply is allocated across strategic protocol operational reserves:

```
Total Supply: 1,000,000,000 $TRDD
├── 40% (400,000,000) ──> Public Pump.fun / PumpDex Liquidity & Bonding Curve
├── 25% (250,000,000) ──> Quantitative Liquidity & Market Maker Reserve
├── 15% (150,000,000) ──> Ecosystem Growth, Partnerships & Institutional Integrations
├── 10% (100,000,000) ──> Quantitative Engineering & Core Protocol Contributors (12-Mo Linear Vesting)
└── 10% (100,000,000) ──> Protocol Treasury & Security Audit Reserve
```

---

## 3. Deflationary Supply Acceleration

Because 30% of all ongoing trading bot profits are dedicated to spot market buybacks on PumpDex routed directly to on-chain burn:

$$\text{Circulating Supply}_t = \text{Initial Supply} - \sum_{i=1}^{t} \text{Tokens Burned}_i$$

- **Net Deflation:** The total token supply strictly decreases over time.
- **Audited Burn Proofs:** Every burn transaction is verifiable on the Solana blockchain explorer (Solscan), with cumulative burn volume broadcasted live to the [Public Telemetry Terminal](https://tradedao.org).
