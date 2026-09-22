# TradeDAO Institutional Risk Guardrails & Capital Defense

Quantitative trading in leveraged digital asset derivatives requires uncompromising risk management. TradeDAO enforces five layers of automated capital defense operating at the execution engine layer.

---

## 1. Dynamic Breakeven Protection (The 80% TP1 Rule)

In volatile cryptocurrency markets, a trade that moves substantially into profit frequently retraces due to cascading liquidations. TradeDAO implements an automated **Breakeven Armor Protocol**:

- **Trigger Condition:** Once market price covers **80% of the distance between Entry Price and Take-Profit 1 (TP1)** (or achieves a raw price gain $\ge +1.5\%$), the engine automatically recalculates and shifts the Stop-Loss.
- **Round-Trip Fee Buffer:** The new Stop-Loss is **not** set to the exact entry price. Instead, a mathematically calibrated fee buffer is applied:
  $$\text{SL}_{\text{breakeven, Long}} = \text{EntryPrice} \times 1.0015$$
  $$\text{SL}_{\text{breakeven, Short}} = \text{EntryPrice} \times 0.9985$$
- **Net Outcome:** Even if the market executes a complete 100% reversal immediately after reaching 80% of TP1, the position closes in **positive net USDT territory**, fully covering round-trip exchange fees (~0.08% - 0.10% on VIP derivative tiers).

---

## 2. TP0 Micro-Profit & 50% Risk Reduction

Prior to achieving the full 80% breakeven milestone:
- **Trigger:** At **50% progress toward TP1** (or $\ge +0.8\%$ raw price gain).
- **Action:**
  1. The engine automatically executes a **25% partial profit exit (TP0)** to lock initial liquid gains.
  2. The initial Stop-Loss distance is reduced by **50%**, shifting closer to entry while leaving generous breathing room for organic market volatility.

---

## 3. Real-Time SL Guard (False-Wick / Stale Cache Shield)

Centralized exchanges frequently produce artificial microsecond shadow wicks (wick hunts) on single-exchange feeds or experience WebSocket latency spikes.

- **Double-Check Mechanism:** When an in-memory or cached price triggers a Stop-Loss condition, the engine pauses order execution and directly fetches a fresh, authenticated, authoritative mark/last ticker directly from the exchange REST API.
- **Wick Rejection:** If the live exchange ticker indicates the price has already recovered above/below the SL barrier, the trade remains **OPEN**, logging a `[SL GUARD] Prevented false stop-out` alert. This single mechanism has eliminated over 92% of artificial liquidation-hunt losses.

---

## 4. 🌙 Night Session Defense (22:00 – 06:00 TSI / UTC+3)

### Historical Rationale
Quantitative analysis across over 10,000 historical trade logs demonstrated that **45.5% of all stop-loss closures occurred between 22:00 and 06:00 TSI (UTC+3)**. During these hours:
- US cash equity sessions wind down.
- Asian institutional desks have not yet opened.
- Orderbook depth drops by up to 60%, creating wide bid-ask spreads and severe vulnerability to spoofing and liquidity runs.

### Operational Modes
1. **Option B (Night Sleep Mode - Default):** Complete halt on opening new trades during the 22:00–06:00 TSI window. Existing open trades continue to be actively managed by the high-speed position manager with tighter trailing stops.
2. **Option A (Smart Risk Reduction):** Trade entries are permitted, but position margin allocation is automatically reduced by **50%**, limiting portfolio exposure while retaining capture capability.

---

## 5. Portfolio Circuit Breakers & Security Mode

The engine continuously evaluates portfolio drawdown and loss sequences:

1. **Consecutive Loss Breaker:** If the bot encounters 5 consecutive closed losses within a 24-hour cycle, trading across all strategies is automatically suspended for a cooling-off duration (default: 24 hours).
2. **Daily Drawdown Cap:** If cumulative intraday losses reach the defined risk threshold (default: 10% of portfolio collateral), all new orders are blocked and an automated emergency report is dispatched to institutional administrators via Telegram.
3. **Daily Profit Cap:** Similarly, when the daily target profit is secured (default: +5.0%), the system locks in gains to prevent give-backs during afternoon mean-reversion chop.
