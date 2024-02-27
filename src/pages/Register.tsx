import React, { useState } from 'react';
import UserForm from '../components/Register';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isRegistered, setIiRegistered] = useState(false);

  const handleUserRegisterSuccess = () => {
    setIiRegistered(true);
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

export default Register;
