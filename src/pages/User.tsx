import React, { useState } from 'react';
import UserForm from '../components/UserForm';

const User: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleUserCreationSuccess = () => {
    setMessage('Usuário criado com sucesso!');
  };

  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      {message && <p>{message}</p>}
      <UserForm onSuccess={handleUserCreationSuccess} />
    </div>
  );
};

export default User;
