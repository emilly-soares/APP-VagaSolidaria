import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUserId } from '../services/authconfig';
import api from '../services/api';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export const useUserRole = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      const userId = getUserId();
      if (userId) {
        try {
          const response = await api.get(`/user/${userId}`);
          setUserRole(response.data.role);
        } catch (error) {
          console.error('Erro ao buscar o papel do usuário:', error);
          setUserRole(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  return { userRole, loading };
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRoles }) => {
  const isAuth = isAuthenticated();
  const { userRole, loading } = useUserRole(); 

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>;
  } else {
    console.log('User role:', userRole);
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
