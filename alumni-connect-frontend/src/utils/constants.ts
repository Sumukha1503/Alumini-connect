export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001';

export const USER_ROLES = {
  SUPER_ADMIN: 'super_admin',
  COLLEGE_ADMIN: 'college_admin',
  ALUMNI: 'alumni',
  STUDENT: 'student',
} as const;

export const CONNECTION_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
} as const;

export const POST_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
  LINK: 'link',
} as const;

export const EVENT_TYPES = {
  VIRTUAL: 'virtual',
  IN_PERSON: 'in_person',
  HYBRID: 'hybrid',
} as const;

export const JOB_TYPES = {
  FULL_TIME: 'full_time',
  PART_TIME: 'part_time',
  CONTRACT: 'contract',
  INTERNSHIP: 'internship',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  FEED: '/feed',
  DIRECTORY: '/directory',
  CONNECTIONS: '/connections',
  MESSAGES: '/messages',
  EVENTS: '/events',
  JOBS: '/jobs',
  SUPER_ADMIN_DASHBOARD: '/super-admin/dashboard',
  COLLEGE_MANAGEMENT: '/super-admin/colleges',
} as const;
