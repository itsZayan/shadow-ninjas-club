import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is logged in as admin
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const loginTime = Number(localStorage.getItem('adminLoginTime') || '0');
    const currentTime = Date.now();
    
    // Session expires after 24 hours
    const sessionValid = currentTime - loginTime < 24 * 60 * 60 * 1000;
    
    setIsAuthenticated(isAdmin && sessionValid);
    
    // If session expired, clean up localStorage
    if (isAdmin && !sessionValid) {
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('adminLoginTime');
    }

    // Set up a periodic check to ensure session remains valid
    // This helps ensure consistent behavior on Vercel deployment
    const checkInterval = setInterval(() => {
      const currentIsAdmin = localStorage.getItem('isAdmin') === 'true';
      const currentLoginTime = Number(localStorage.getItem('adminLoginTime') || '0');
      const now = Date.now();
      const currentSessionValid = now - currentLoginTime < 24 * 60 * 60 * 1000;
      
      if (!currentIsAdmin || !currentSessionValid) {
        setIsAuthenticated(false);
        
        if (currentIsAdmin && !currentSessionValid) {
          localStorage.removeItem('isAdmin');
          localStorage.removeItem('adminLoginTime');
        }
      }
    }, 60000); // Check every minute
    
    return () => clearInterval(checkInterval);
  }, []);

  // Show nothing while checking authentication
  if (isAuthenticated === null) {
    return null;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  // Render children if authenticated
  return <>{children}</>;
};

export default AdminRoute; 