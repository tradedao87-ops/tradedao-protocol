export interface TradeDAOClientConfig {
  endpoint?: string;
  wsEndpoint?: string;
  authToken?: string;
}

export interface AuditedTrade {
  id: number | string;
  symbol: string;
  side: 'LONG' | 'SHORT';
  entryPrice: number;
  exitPrice?: number;
  pnl?: number;
  pnlPct?: number;
  reason?: string;
  createdAt: string;
}

export interface LivePosition {
  id: number | string;
  symbol: string;
  side: 'LONG' | 'SHORT';
  entryPrice: number;
  currentPrice: number;
  pnlPct: number;
  breakevenActive?: boolean;
  tpCount?: number;
}

export interface ProtocolStats {
  success: boolean;
  baseCapital: number;
  virtualBalance: number;
  realizedProfit: number;
  totalClosedTrades: number;
  winningTrades: number;
  winRate: number;
  openTradesCount: number;
  profitFactor: string | number;
  sharpeRatio: number;
  maxDrawdown: number;
  totalTokensBurned: number;
  buybackBurnRatio: number;
  holderProfitSharePct: number;
  botReserveRatio: number;
  burn24hUsdt: number;
  dividend24hUsdt: number;
  botReserve24hUsdt: number;
  recentClosed?: AuditedTrade[];
}

export interface NonceChallenge {
  nonce: string;
  message: string;
}
