export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'super_admin' | 'college_admin' | 'alumni' | 'student';
  college?: string;
  graduationYear?: number;
  department?: string;
  profilePicture?: string;
  bio?: string;
  currentCompany?: string;
  currentPosition?: string;
  location?: string;
  skills?: string[];
  interests?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface College {
  _id: string;
  name: string;
  domain: string;
  logo?: string;
  description?: string;
  location?: string;
  website?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  _id: string;
  author: User;
  college: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'link';
  media?: string[];
  likes: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  author: User;
  content: string;
  createdAt: string;
}

export interface Connection {
  _id: string;
  requester: User;
  recipient: User;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  _id: string;
  sender: User;
  recipient: User;
  content: string;
  read: boolean;
  createdAt: string;
}

export interface Conversation {
  _id: string;
  participants: User[];
  lastMessage?: Message;
  updatedAt: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  college: string;
  organizer: User;
  type: 'virtual' | 'in_person' | 'hybrid';
  location?: string;
  meetingLink?: string;
  startDate: string;
  endDate: string;
  attendees: string[];
  maxAttendees?: number;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  _id: string;
  title: string;
  company: string;
  description: string;
  type: 'full_time' | 'part_time' | 'contract' | 'internship';
  location: string;
  salary?: string;
  requirements: string[];
  postedBy: User;
  college: string;
  applicationLink?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface TenantState {
  currentCollege: College | null;
  colleges: College[];
  loading: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SearchFilters {
  search?: string;
  department?: string;
  graduationYear?: number;
  location?: string;
  company?: string;
}
