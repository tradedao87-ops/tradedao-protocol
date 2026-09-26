# TradeDAO Public Telemetry API Specification

TradeDAO exposes public endpoints and WebSocket feeds enabling developers, quantitative researchers, auditors, and token holders to consume real-time performance telemetry.

---

## 1. REST Telemetry Endpoints

### Base URL
```
https://www.tradedao.ai
```

---

### `GET /api/public/ai-stats`
Returns aggregated live performance statistics, audited trade counts, win rate metrics, burn statistics, and flywheel allocations.

#### Headers
- `Accept: application/json`

#### Cache Behavior
- Server-side in-memory cache: `15s TTL`
- CDN Edge cache: `Cache-Control: s-maxage=10, stale-while-revalidate=30`

#### Response Example
```json
{
  "success": true,
  "baseCapital": 10000.00,
  "virtualBalance": 13544.17,
  "realizedProfit": 3544.17,
  "totalClosedTrades": 184,
  "winningTrades": 154,
  "winRate": 83.7,
  "openTradesCount": 10,
  "profitFactor": "3.42",
  "sharpeRatio": 2.86,
  "maxDrawdown": 3.8,
  "totalTokensBurned": 58800000,
  "buybackBurnRatio": 30,
  "holderProfitSharePct": 30,
  "botReserveRatio": 40,
  "burn24hUsdt": 1063.25,
  "dividend24hUsdt": 1063.25,
  "botReserve24hUsdt": 1417.67,
  "recentClosed": [
    {
      "id": 184,
      "symbol": "QNT/USDT",
      "side": "LONG",
      "entryPrice": 84.12,
      "exitPrice": 86.20,
      "pnl": 46.82,
      "reason": "TP2 Hit",
      "createdAt": "2026-09-22T11:45:00.000Z"
    }
  ]
}
```

---

### `GET /api/auth/nonce/:address`
Generates a 5-minute single-use cryptographic challenge for Web3 wallet authentication.

#### URL Parameters
- `address` (string): Ethereum / EVM wallet address (hex).

#### Response Example
```json
{
  "nonce": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "message": "Sign this message to authenticate with TradeDAO Protocol:\n\nNonce: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}
```

---

## 2. Real-Time WebSocket Telemetry

### Connection URL
```
wss://www.tradedao.ai
```

### Events

#### Client to Server
- `authenticate`: Provide `{ token: "<JWT_TOKEN>" }` to establish an authenticated terminal session.

#### Server to Client
- `live_positions`: Emitted every 3 seconds. Broadcasts sanitized active positions:
```json
[
  {
    "id": 412,
    "symbol": "BTC/USDT",
    "side": "LONG",
    "entryPrice": 63420.50,
    "currentPrice": 64110.20,
    "pnlPct": 5.43,
    "breakevenActive": true,
    "tpCount": 1
  }
]
```

