import { useEffect, useCallback } from 'react';
import socketService from '../services/socketService';
import { useAuth } from './useAuth';

export const useSocket = () => {
    const { token, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated && token) {
            socketService.connect(token);
        }

        return () => {
            socketService.disconnect();
        };
    }, [isAuthenticated, token]);

    const on = useCallback((event: string, callback: (...args: any[]) => void) => {
        socketService.on(event, callback);
    }, []);

    const off = useCallback((event: string, callback?: (...args: any[]) => void) => {
        socketService.off(event, callback);
    }, []);

    const emit = useCallback((event: string, data?: any) => {
        socketService.emit(event, data);
    }, []);

    return {
        on,
        off,
        emit,
        sendMessage: socketService.sendMessage.bind(socketService),
        joinConversation: socketService.joinConversation.bind(socketService),
        leaveConversation: socketService.leaveConversation.bind(socketService),
        markAsRead: socketService.markAsRead.bind(socketService),
        startTyping: socketService.startTyping.bind(socketService),
        stopTyping: socketService.stopTyping.bind(socketService),
    };
};
