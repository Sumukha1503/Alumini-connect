import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import type { RootState, AppDispatch } from '../store';
import { login, register, logout, getCurrentUser } from '../store/authSlice';
import type { LoginCredentials, RegisterData } from '../services/authApi';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token && !user) {
      dispatch(getCurrentUser());
    }
  }, [token, user, dispatch]);

  const handleLogin = async (credentials: LoginCredentials) => {
    return dispatch(login(credentials));
  };

  const handleRegister = async (data: RegisterData) => {
    return dispatch(register(data));
  };

  const handleLogout = async () => {
    return dispatch(logout());
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
};
