import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../components/crm/AdminLayout';

type AdminPage = 'leads' | 'ops' | 'workflow' | 'settings';

interface AdminLayoutWrapperProps {
  activePage: AdminPage;
  children: React.ReactNode;
}

export function AdminLayoutWrapper({ activePage, children }: AdminLayoutWrapperProps) {
  const navigate = useNavigate();
  
  const handleNavigate = (page: AdminPage) => {
    const routes: Record<AdminPage, string> = {
      leads: '/app/leads',
      ops: '/app/ops',
      workflow: '/app/workflow',
      settings: '/app/settings'
    };
    navigate(routes[page]);
  };
  
  return (
    <AdminLayout activePage={activePage} onNavigate={handleNavigate}>
      {children}
    </AdminLayout>
  );
}
