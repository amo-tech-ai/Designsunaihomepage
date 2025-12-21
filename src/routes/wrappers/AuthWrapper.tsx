import { useNavigate, useLocation } from 'react-router-dom';
import { LoginPage } from '../../components/auth/LoginPage';

export function LoginPageWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLoginSuccess = () => {
    // Redirect to the page they were trying to access, or dashboard
    const from = (location.state as any)?.from?.pathname || '/dashboard';
    navigate(from, { replace: true });
  };
  
  return <LoginPage onLoginSuccess={handleLoginSuccess} />;
}
