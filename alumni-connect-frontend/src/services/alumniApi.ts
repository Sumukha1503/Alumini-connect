import api from './api';
import type { User, Post, Connection, Event, Job, ApiResponse, PaginatedResponse, SearchFilters } from '../types';

export const alumniApi = {
    // User/Alumni endpoints
    getAlumniDirectory: async (filters?: SearchFilters): Promise<ApiResponse<PaginatedResponse<User>>> => {
        const response = await api.get('/alumni', { params: filters });
        return response.data;
    },

    getAlumniById: async (id: string): Promise<ApiResponse<User>> => {
        const response = await api.get(`/alumni/${id}`);
        return response.data;
    },

    // Feed/Posts endpoints
    getPosts: async (page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<Post>>> => {
        const response = await api.get('/posts', { params: { page, limit } });
        return response.data;
    },

    createPost: async (data: Partial<Post>): Promise<ApiResponse<Post>> => {
        const response = await api.post('/posts', data);
        return response.data;
    },

    likePost: async (postId: string): Promise<ApiResponse<Post>> => {
        const response = await api.post(`/posts/${postId}/like`);
        return response.data;
    },

    commentOnPost: async (postId: string, content: string): Promise<ApiResponse<Post>> => {
        const response = await api.post(`/posts/${postId}/comment`, { content });
        return response.data;
    },

    deletePost: async (postId: string): Promise<ApiResponse<null>> => {
        const response = await api.delete(`/posts/${postId}`);
        return response.data;
    },

    // Connection endpoints
    getConnections: async (): Promise<ApiResponse<Connection[]>> => {
        const response = await api.get('/connections');
        return response.data;
    },

    getConnectionRequests: async (): Promise<ApiResponse<Connection[]>> => {
        const response = await api.get('/connections/requests');
        return response.data;
    },

    sendConnectionRequest: async (recipientId: string): Promise<ApiResponse<Connection>> => {
        const response = await api.post('/connections/request', { recipientId });
        return response.data;
    },

    acceptConnectionRequest: async (requestId: string): Promise<ApiResponse<Connection>> => {
        const response = await api.put(`/connections/${requestId}/accept`);
        return response.data;
    },

    rejectConnectionRequest: async (requestId: string): Promise<ApiResponse<Connection>> => {
        const response = await api.put(`/connections/${requestId}/reject`);
        return response.data;
    },

    // Events endpoints
    getEvents: async (): Promise<ApiResponse<Event[]>> => {
        const response = await api.get('/events');
        return response.data;
    },

    getEventById: async (id: string): Promise<ApiResponse<Event>> => {
        const response = await api.get(`/events/${id}`);
        return response.data;
    },

    createEvent: async (data: Partial<Event>): Promise<ApiResponse<Event>> => {
        const response = await api.post('/events', data);
        return response.data;
    },

    registerForEvent: async (eventId: string): Promise<ApiResponse<Event>> => {
        const response = await api.post(`/events/${eventId}/register`);
        return response.data;
    },

    // Jobs endpoints
    getJobs: async (): Promise<ApiResponse<Job[]>> => {
        const response = await api.get('/jobs');
        return response.data;
    },

    getJobById: async (id: string): Promise<ApiResponse<Job>> => {
        const response = await api.get(`/jobs/${id}`);
        return response.data;
    },

    createJob: async (data: Partial<Job>): Promise<ApiResponse<Job>> => {
        const response = await api.post('/jobs', data);
        return response.data;
    },

    deleteJob: async (jobId: string): Promise<ApiResponse<null>> => {
        const response = await api.delete(`/jobs/${jobId}`);
        return response.data;
    },
};