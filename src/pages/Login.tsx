import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleUserLoginSuccess = () => {
    setMessage('Login efetuado com sucesso!');
  };

  return (
    <div>
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <LoginForm onSuccess={handleUserLoginSuccess} />
    </div>
  );
};

export default Login;
