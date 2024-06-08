import React, { useState } from 'react';
import UserForm from '../components/Register';
import { useNavigate } from 'react-router-dom';

const RegisterUser: React.FC = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleUserRegisterSuccess = () => {
    setIsRegistered(true);
  };

  if (isRegistered) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <UserForm onSuccess={handleUserRegisterSuccess} />
    </div>
  );
};

export default RegisterUser;
