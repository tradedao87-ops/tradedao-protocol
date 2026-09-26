import { ProtocolStats, NonceChallenge } from './types';

export class TradeDAORestClient {
  private baseEndpoint: string;

  constructor(endpoint: string = 'https://www.tradedao.ai') {
    this.baseEndpoint = endpoint.replace(/\/$/, '');
  }

  /**
   * Fetch public aggregated protocol performance telemetry.
   */
  async getPublicStats(): Promise<ProtocolStats> {
    const url = `${this.baseEndpoint}/api/public/ai-stats`;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TradeDAO stats: HTTP ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as ProtocolStats;
  }

  /**
   * Request a single-use 5-minute cryptographic nonce for Web3 authentication.
   */
  async getAuthNonce(walletAddress: string): Promise<NonceChallenge> {
    const url = `${this.baseEndpoint}/api/auth/nonce/${walletAddress.toLowerCase()}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`Failed to request authentication nonce: HTTP ${response.status}`);
    }

    return (await response.json()) as NonceChallenge;
  }
}

