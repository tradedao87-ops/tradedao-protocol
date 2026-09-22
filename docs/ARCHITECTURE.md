# TradeDAO Architecture & System Topology

This document details the high-level engineering architecture, market data ingestion pipeline, latency considerations, and telemetry publishing mechanisms of the TradeDAO protocol.

---

## 1. Architectural Philosophy

TradeDAO is engineered with three primary non-negotiable quantitative design tenets:

1. **Sub-Millisecond Execution Precision:** Market data ingestion, state evaluation, and order routing must operate with minimal latency to capture fleeting orderbook imbalances.
2. **Defensive Asymmetry (Capital Preservation First):** No position is opened without predefined mathematically calculated multi-tier take-profits, dynamic trailing stop-losses, and automated breakeven thresholds.
3. **Public Verifiability without IP Compromise:** Core trading strategy weights and execution algorithms remain proprietary on air-gapped infrastructure, while 100% of telemetry, position states, performance statistics, and fee routings are published transparently to on-chain and public APIs.

---

## 2. Component Diagram

```
+-------------------------------------------------------------------------+
|                       MARKET INGESTION LAYER                            |
|  - Binance Futures WS (Real-Time Trade & MiniTicker Streams)            |
|  - Bybit Linear Perps WS (Orderbook Depth & Mark Price)                 |
|  - OKX Swap WS (Tick-by-Tick Trades & Liquidation Stream)               |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                  CORE ENGINE & POSITION MANAGER                         |
|  - Quantitative Volatility & Microstructure Filter                      |
|  - Dynamic Liquidity Shield & Night Defense (22:00 - 06:00 TSI)         |
|  - High-Speed Position Tick (Sub-2s Evaluation Loop)                    |
|  - Real-Time Stop-Loss Guard (Exchange Ticker Verification)             |
|  - Multi-Exchange REST Execution Router (CCXT Enterprise)               |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                  SYSTEMATIC VALUE FLYWHEEL ROUTER                       |
|  - Realized Profit Calculation (Net of Entry/Exit Taker & Maker Fees)   |
|  - 30% Spot DEX Buyback & Burn Execution                                |
|  - 30% Liquid USDT Holder Yield Stream Allocation                       |
|  - 40% Trading Bot Reserve Margin Compounding Engine                    |
+------------------------------------+------------------------------------+
                                     |
                  +------------------+------------------+
                  |                                     |
                  v                                     v
+-----------------------------------+ +-----------------------------------+
|      ON-CHAIN SMART CONTRACTS     | |    PUBLIC TELEMETRY & GATEWAY     |
| - $TRDD Fixed Token Contract      | | - In-Memory High-Speed Cache (15s)|
| - Autonomous Buyback Vault        | | - Edge CDN Reverse Proxy          |
| - Liquid Dividend Pool            | | - Real-Time Socket.IO Stream      |
| - Dead Address (0x0...dEaD)       | | - Web3 Institutional Dashboard    |
+-----------------------------------+ +-----------------------------------+
```

---

## 3. Position Management Lifecycle

Each quantitative trade executed by TradeDAO progresses through an audited state machine:

```
[ SCAN / SIGNAL DETECTED ]
            │
            ▼
[ RISK GATE EVALUATION ] ──► (Reject if Night Defense Active or Circuit Breaker Tripped)
            │
            ▼
[ ORDER ENTRY & MARGIN LOCK ]
            │
            ▼
[ POSITION ACTIVE ] ◄────────────────────────────────────────┐
            │                                                │
            ├──► Progress >= 50% to TP1 ──► [ TP0 Micro-Profit: Take 25% Profit & Halve Risk ]
            │
            ├──► Progress >= 80% to TP1 ──► [ Breakeven Armor: Move SL to Entry + Fee Buffer ]
            │
            ├──► TP1 Hit ────────────────► [ Partial Close: Take 33% Profit & Lock Gains ]
            │
            ├──► TP2 Hit ────────────────► [ Partial Close: Take 50% Remaining Profit ]
            │
            ├──► TP3 Hit ────────────────► [ Final Profit Close: Complete Position Exit ]
            │
            └──► SL Hit ─────────────────► [ SL Guard: Re-verify Ticker with Live Orderbook ]
                                                          │
                                         ┌────────────────┴────────────────┐
                                         ▼                                 ▼
                                  (Wick Hunt Detected)              (Legitimate Hit)
                                  [ Keep Trade Open ]             [ Execute Stop Exit ]
                                                                           │
                                                                           ▼
                                                                  [ PROFIT / LOSS ROUTED ]
                                                                           │
                                                                           ▼
                                                                  [ VALUE FLYWHEEL 30/30/40 ]
```

---

## 4. Telemetry Publishing & Caching Architecture

To support thousands of concurrent institutional dashboard sessions without burdening active trading loops:

1. **In-Memory Volatility Cache:** The primary telemetry endpoint (`/api/public/ai-stats`) utilizes a high-speed in-memory cache with a 15-second time-to-live (TTL).
2. **Edge Revalidation:** Next.js Edge proxy headers configure `Cache-Control: s-maxage=10, stale-while-revalidate=30`, ensuring sub-50ms TTFB across global CDNs.
3. **Role-Based WebSocket Masking:** Private socket streams broadcast sanitized telemetry to public watchers, stripping internal exchange keys, testing flags, and sensitive collateral amounts before frame serialization.
