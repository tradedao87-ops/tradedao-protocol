# The TradeDAO Systematic Value Flywheel

Unlike inflationary reward tokens that rely on continuous dilution to subsidize staking yields, TradeDAO operates a closed-loop, deflationary **Systematic Value Flywheel** backed entirely by real, audited trading profits.

---

## 1. Economic Architecture Overview

Every successful position closed by the quantitative bot generates net realized profit in liquid USDT. This capital is automatically partitioned according to the institutional **30 / 30 / 40 Rule**:

$$\text{Net Profit} = \text{Gross Realized PnL} - (\text{Exchange Taker Fees} + \text{Exchange Maker Fees})$$

```
                   ┌──────────────────────────────────┐
                   │    Net Realized Trading Profit   │
                   │             (100% USDT)          │
                   └─────────────────┬────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         │ (30%)                     │ (30%)                     │ (40%)
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│   Spot DEX       │       │   Liquid USDT    │       │  Trading Bot     │
│  Buyback & Burn  │       │  Holder Yield    │       │  Reserve Margin  │
└────────┬─────────┘       └────────┬─────────┘       └────────┬─────────┘
         │                          │                          │
         ▼                          ▼                          ▼
Permanent Burn Address    Direct Stream to Qualified     Compounds Active
 (0x0...dEaD)               $TRDD Token Holders          Position Capital
 (Deflationary Supply)       (Real Stable Yield)         (Expands Revenue)
```

---

## 2. Pillar 1: 30% Dynamic Spot DEX Buyback & Permanent Burn

### Mechanism
- 30% of each profit harvest is routed to the programmatic DEX Execution Vault.
- The vault executes spot market buy orders across verified Uniswap / PancakeSwap liquidity pools, directly purchasing circulating `$TRDD` tokens.
- Acquired tokens are immediately transferred in the same atomic transaction to the official burn address:
  `0x000000000000000000000000000000000000dEaD`
- **Economic Effect:** Constantly applies upward spot buying pressure on open orderbooks, permanently removing supply from circulation and increasing the scarcity of remaining tokens.

---

## 3. Pillar 2: 30% Liquid Holder Dividend Stream

### Mechanism
- 30% of profit harvests are routed to the **Liquid USDT Dividend Pool**.
- Rather than distributing synthetic governance tokens, TradeDAO streams pure, non-custodial, liquid **USDT** directly to verified token holders who meet the minimum threshold (default: $\ge 10,000\ \$TRDD$).
- **No Staking Lockup:** Token holders maintain complete custody of their tokens in private wallets without lockup periods or unbonding delays. Snapshot intervals audit holder balances on-chain to determine proportional dividend claims.

---

## 4. Pillar 3: 40% Trading Bot Reserve Compounding

### Mechanism
- 40% of realized profits are reinvested directly into the **Quantitative Trading Bot Reserve**.
- This capital increases the baseline trading collateral of active strategies:
  $$\text{Collateral}_{t+1} = \text{Collateral}_t + (0.40 \times \text{Net Profit}_t)$$
- **Compounding Flywheel:** As margin collateral grows, future position allocations scale proportionally without increasing risk parameters. A larger reserve produces larger absolute USD profit harvests, which subsequently drives higher buyback volumes and higher holder yields in subsequent trading cycles.
