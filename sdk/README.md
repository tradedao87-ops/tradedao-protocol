# @tradedao/sdk

Official TypeScript & JavaScript client SDK for **TradeDAO Protocol**.

Consume real-time quantitative trading telemetry, audited trade history, $TRDD deflationary burn stats, and live position feeds directly in your applications or dashboards.

---

## Installation

```bash
npm install @tradedao/sdk
# or
yarn add @tradedao/sdk
# or
pnpm add @tradedao/sdk
```

---

## Quickstart

```typescript
import { TradeDAOClient } from '@tradedao/sdk';

const client = new TradeDAOClient({
  endpoint: 'https://www.tradedao.ai'
});

async function run() {
  // 1. Fetch protocol performance stats
  const stats = await client.getPublicStats();
  console.log(`Net Bot Realized Profit: $${stats.realizedProfit} USDT`);
  console.log(`Total Tokens Burned: ${stats.totalTokensBurned.toLocaleString()} $TRDD`);
  console.log(`Win Rate: ${stats.winRate}%`);
  console.log(`24h Buyback Volume: $${stats.burn24hUsdt} USDT`);

  // 2. Subscribe to live position updates
  client.subscribePositions((positions) => {
    console.log(`Received ${positions.length} active positions`);
    for (const pos of positions) {
      console.log(`[${pos.symbol}] ${pos.side} Entry: $${pos.entryPrice} | Current: $${pos.currentPrice} | PnL: ${pos.pnlPct}%`);
    }
  });
}

run();
```

---

## License

Apache-2.0 © TradeDAO Protocol Foundation

