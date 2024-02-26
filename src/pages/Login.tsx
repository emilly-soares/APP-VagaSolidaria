import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleUserLoginSuccess = () => {
    setMessage('Login efetuado com sucesso!');
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <LoginForm onSuccess={handleUserLoginSuccess} />
    </div>
  );
};

export default Login;
