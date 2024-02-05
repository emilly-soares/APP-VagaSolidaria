import React, { useState } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie';

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/authenticate', {
        email,
        password
      });

      const { token } = response.data;

      Cookies.set('token', token, { expires: 1 });

      setEmail('');
      setPassword('');

      onSuccess();
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Ocorreu um erro ao tentar fazer login');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <br />
      {error && <p>{error}</p>}
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
