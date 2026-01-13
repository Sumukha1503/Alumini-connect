import { NavLink } from 'react-router-dom';
import { Home, Users, MessageSquare, Calendar, Briefcase, Network, Building2, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';

export default function Sidebar() {
  const { user } = useAuth();
  const isSuperAdmin = user?.role === 'super_admin';

  const collegeLinks = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/feed', icon: LayoutDashboard, label: 'Feed' },
    { to: '/directory', icon: Users, label: 'Directory' },
    { to: '/connections', icon: Network, label: 'Connections' },
    { to: '/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/events', icon: Calendar, label: 'Events' },
    { to: '/jobs', icon: Briefcase, label: 'Jobs' },
  ];

  const adminLinks = [
    { to: '/super-admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/super-admin/colleges', icon: Building2, label: 'Colleges' },
  ];

  const links = isSuperAdmin ? adminLinks : collegeLinks;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50"
              )
            }
          >
            <link.icon className="h-5 w-5" />
            <span className="font-medium">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
