import { io, Socket } from 'socket.io-client';
import { SOCKET_URL } from '../utils/constants';

class SocketService {
    private socket: Socket | null = null;

    connect(token: string): void {
        if (this.socket?.connected) return;

        this.socket = io(SOCKET_URL, {
            auth: { token },
            transports: ['websocket'],
        });

        this.socket.on('connect', () => {
            console.log('Socket connected');
        });

        this.socket.on('disconnect', () => {
            console.log('Socket disconnected');
        });

        this.socket.on('error', (error) => {
            console.error('Socket error:', error);
        });
    }

    disconnect(): void {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    on(event: string, callback: (...args: any[]) => void): void {
        this.socket?.on(event, callback);
    }

    off(event: string, callback?: (...args: any[]) => void): void {
        this.socket?.off(event, callback);
    }

    emit(event: string, data?: any): void {
        this.socket?.emit(event, data);
    }

    // Message-specific methods
    sendMessage(recipientId: string, content: string): void {
        this.emit('send_message', { recipientId, content });
    }

    joinConversation(conversationId: string): void {
        this.emit('join_conversation', conversationId);
    }

    leaveConversation(conversationId: string): void {
        this.emit('leave_conversation', conversationId);
    }

    markAsRead(messageId: string): void {
        this.emit('mark_as_read', messageId);
    }

    // Typing indicators
    startTyping(conversationId: string): void {
        this.emit('typing_start', conversationId);
    }

    stopTyping(conversationId: string): void {
        this.emit('typing_stop', conversationId);
    }

    // Online status
    updateOnlineStatus(status: 'online' | 'away' | 'offline'): void {
        this.emit('status_update', status);
    }
}

export default new SocketService();
