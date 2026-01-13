import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAuth } from './hooks/useAuth';
import AppLayout from './components/layout/AppLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/college/Dashboard';
import Feed from './pages/college/Feed';
import Directory from './pages/college/Directory';
import Connections from './pages/college/Connections';
import Messages from './pages/college/Messages';
import Events from './pages/college/Events';
import Jobs from './pages/college/Jobs';
import SuperAdminDashboard from './pages/super-admin/Dashboard';
import CollegeManagement from './pages/super-admin/CollegeManagement';
import './index.css';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <AppLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="feed" element={<Feed />} />
        <Route path="directory" element={<Directory />} />
        <Route path="connections" element={<Connections />} />
        <Route path="messages" element={<Messages />} />
        <Route path="events" element={<Events />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="super-admin/dashboard" element={<SuperAdminDashboard />} />
        <Route path="super-admin/colleges" element={<CollegeManagement />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;