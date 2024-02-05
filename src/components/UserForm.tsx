import React, { useState } from 'react';
import api from '../services/api';

interface UserFormProps {
  onSuccess: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post('/user', {
        email,
        password,
        isAdmin,
      });

      setEmail('');
      setPassword('');
      setIsAdmin(false);
      onSuccess();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
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
      {/*<label>
        Admin:
        <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
      </label>*/}

      <br />
      <button type="submit">Cadastrar Usuário</button>
    </form>
  );
};

export default UserForm;