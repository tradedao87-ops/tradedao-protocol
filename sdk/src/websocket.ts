import { io, Socket } from 'socket.io-client';
import { LivePosition } from './types';

export class TradeDAOWebSocketClient {
  private socket: Socket | null = null;
  private endpoint: string;
  private token?: string;

  constructor(endpoint: string = 'https://tradedao.org', token?: string) {
    this.endpoint = endpoint;
    this.token = token;
  }

  /**
   * Connect to the real-time position stream.
   */
  connect(onPositionsUpdate: (positions: LivePosition[]) => void, onError?: (err: Error) => void): Socket {
    const authPayload = this.token ? { token: this.token } : {};

    this.socket = io(this.endpoint, {
      auth: authPayload,
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 2000
    });

    this.socket.on('connect', () => {
      // Successfully connected
    });

    this.socket.on('live_positions', (data: LivePosition[]) => {
      onPositionsUpdate(data);
    });

    this.socket.on('connect_error', (error: Error) => {
      if (onError) onError(error);
    });

    return this.socket;
  }

  /**
   * Close active WebSocket connection.
   */
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

