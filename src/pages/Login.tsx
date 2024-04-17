import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Login';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getUserId } from '../services/authconfig';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  useEffect(() => {
    if (isLoggedIn) {
      const userId = getUserId();
      if (userId) {
        api.get(`/userAdmin/${userId}`)
          .then(response => {
            const isAdmin = response.data.isAdmin;
            if (isAdmin === true) {
              navigate('/company');
            } else {
              console.log(isAdmin)
              navigate('/');
            }
          })
          .catch(error => {
            console.error('Erro ao verificar se o usuário é administrador:', error);
          });
      } else {
        console.error('UserId não está definido.');
      }
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
