import React, { useState } from 'react';
import LoginForm from '../components/Login';
import {useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <LoginForm onSuccess={handleUserLoginSuccess} />
    </div>
  );
};

export default Login;
