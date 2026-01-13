import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TenantHeader from './TenantHeader';
import { useAuth } from '../../hooks/useAuth';

export default function AppLayout() {
  const { user } = useAuth();
  const showTenantHeader = user?.role !== 'super_admin';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {showTenantHeader && <TenantHeader />}
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
