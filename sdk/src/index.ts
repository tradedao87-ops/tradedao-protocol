import { TradeDAORestClient } from './rest';
import { TradeDAOWebSocketClient } from './websocket';
import { TradeDAOClientConfig, ProtocolStats, LivePosition, AuditedTrade, NonceChallenge } from './types';

export class TradeDAOClient {
  private rest: TradeDAORestClient;
  private ws: TradeDAOWebSocketClient;

  constructor(config: TradeDAOClientConfig = {}) {
    const endpoint = config.endpoint || 'https://www.tradedao.ai';
    const wsEndpoint = config.wsEndpoint || endpoint;

    this.rest = new TradeDAORestClient(endpoint);
    this.ws = new TradeDAOWebSocketClient(wsEndpoint, config.authToken);
  }

  /**
   * Fetch latest audited protocol performance telemetry.
   */
  async getPublicStats(): Promise<ProtocolStats> {
    return this.rest.getPublicStats();
  }

  /**
   * Request Web3 nonce authentication challenge.
   */
  async getAuthNonce(walletAddress: string): Promise<NonceChallenge> {
    return this.rest.getAuthNonce(walletAddress);
  }

  /**
   * Subscribe to real-time position updates.
   */
  subscribePositions(callback: (positions: LivePosition[]) => void, onError?: (err: Error) => void) {
    return this.ws.connect(callback, onError);
  }

  /**
   * Disconnect from real-time stream.
   */
  disconnect() {
    this.ws.disconnect();
  }
}

export * from './types';
export * from './rest';
export * from './websocket';

