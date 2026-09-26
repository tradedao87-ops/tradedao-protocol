# TradeDAO ($TRDD) Tokenomics

<p align="center">
  <img src="../assets/trdd-token-256.png" alt="TradeDAO ($TRDD) Token Logo" width="140" height="140" />
</p>

The TradeDAO Protocol Token (`$TRDD`) serves as the core utility, value capture, and profit-sharing vehicle for the TradeDAO autonomous quantitative trading infrastructure.

> **Official Brand Assets & Wallet Integration:** Standardized high-resolution logos for Web3 wallets (Phantom, Solflare, Backpack), DEXs (PumpDex, Pump.fun), and listing platforms (CoinMarketCap, CoinGecko, DexScreener) are available in the [Brand Assets Directory](../assets/README.md).

---

## 1. Core Token Specifications

| Parameter | Specification | Institutional Details |
|---|---|---|
| **Token Name** | TradeDAO Token | Official Protocol Asset |
| **Token Symbol** | `$TRDD` | Ticker Symbol |
| **Blockchain** | Solana Mainnet | High-throughput, sub-second settlement |
| **Decimals** | 6 | Standard Solana SPL Token Precision |
| **Total Supply** | `1,000,000,000 $TRDD` | Exactly One Billion (100% Hard Cap) |
| **Mint Function** | **Permanently Revoked** | Zero inflation capability (Non-Mintable) |
| **Freeze Authority** | **Permanently Revoked** | Accounts cannot be frozen or blacklisted |
| **Token Standard** | Solana SPL Token | Native Solana Program Library |
| **Launchpad & DEX** | Pump.fun & PumpDex | Fair launch bonding curve & automated DEX graduation |
| **Token Mint Address** | `TRDD...pump` | [View on Solscan](https://solscan.io) |
| **Official Burn Method** | Continuous On-Chain SPL Burn | 30% Trading Profits buy back on PumpDex & burn |
| **Trading Tax** | `0% / 0%` (Zero Tax) | Frictionless institutional execution |
| **Brand Assets** | [View Standardized Logos](../assets/README.md) | Official SVG and PNG kits |

---

## 2. 100% Fair Launch Distribution Architecture (Pump.fun Standard)

To eliminate rug-pull vectors, insider dumping, and centralized vesting vulnerabilities, `$TRDD` adheres strictly to the **100% Fair Launch Bonding Curve standard on Solana**:

```
Total Fixed Supply: 1,000,000,000 $TRDD (100%)
├── 80% (800,000,000 $TRDD) ──> Pump.fun Public Fair Launch Bonding Curve
│                               • Open public mathematical pricing curve
│                               • Equal access for all market participants
│                               • Zero private rounds or insider discounts
│
├── 20% (200,000,000 $TRDD) ──> PumpDex Automated Liquidity Seed Pool
│                               • Automatically seeded upon 100% curve completion (~$69k market cap)
│                               • Liquidity Pool (LP) tokens permanently burned on-chain
│                               • Guaranteed un-ruggable permanent floor liquidity
│
└── 0% (0 $TRDD) ─────────────> Team / Advisor / Pre-Sale Allocations
                                • Zero unearned dev wallets
                                • Zero vesting contracts or unlocks
```

### Institutional Fairness Metrics:

| Category | Allocation | Percentage | Lock / Vesting Mechanism |
|---|---|---|---|
| **Public Bonding Curve** | `800,000,000 $TRDD` | **80.0%** | Unlocked on Pump.fun for fair community acquisition |
| **PumpDex DEX Migration Liquidity** | `200,000,000 $TRDD` | **20.0%** | Automatically deployed on graduation; LP 100% burned |
| **Team & Founders** | `0 $TRDD` | **0.0%** | Zero pre-allocation. Founders buy on public curve if desired |
| **Private / Seed Investors** | `0 $TRDD` | **0.0%** | Zero early VC dump pressure |
| **Marketing / Treasury Reserve** | `0 $TRDD` | **0.0%** | 100% funded through operational bot revenue |

---

## 3. Systematic Deflationary Flywheel (30% Profit Buyback & Burn)

Unlike inflationary tokens that dilute holders, `$TRDD` features an **autonomous deflationary sink** driven directly by quantitative algorithmic trading performance across Binance, Bybit, and OKX:

$$\text{Circulating Supply}_t = \text{Initial Supply} - \sum_{i=1}^{t} \text{Tokens Burned}_i$$

1. **30% Dynamic Spot DEX Buyback:** The protocol engine systematically routes 30% of net realized trading profits to market-buy `$TRDD` on PumpDex.
2. **Permanent On-Chain SPL Token Burn:** Acquired tokens are immediately transferred to the Solana SPL token burn program, irreversibly removing them from circulating supply.
3. **Audited Transparency:** Every burn transaction generates a verifiable Solana transaction hash (Solscan signature) broadcasted live to the [Public Telemetry Dashboard](https://tradedao.org).
