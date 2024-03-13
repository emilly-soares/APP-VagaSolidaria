import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Login';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; // Importe sua instância de API
import { getUserId } from '../services/authconfig';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  useEffect(() => {
    const userId = getUserId();
    if (isLoggedIn) {
      api.get(`/userAdmin/${userId}`)
        .then(response => {
          const isAdmin = response.data.isAdmin;
          if (isAdmin==='true') {
            navigate('/company');
          } else if (userId) {
            navigate('/');
          } else {
            navigate('/');
            console.log(isAdmin, userId);
          }
        })
        .catch(error => {
          console.error('Erro ao verificar se o usuário é administrador:', error);
        });
    }
  }, [isLoggedIn, navigate]);

  const handleUserLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <LoginForm onSuccess={handleUserLoginSuccess} />
    </div>
  );
};

export default Login;
