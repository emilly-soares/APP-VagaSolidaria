import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdatePasswordFormProps from '../components/UpdatePassword';

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdatePassword = () => {
    setIsUpdate(true);
  };

  if (isUpdate) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <UpdatePasswordFormProps onSuccess={handleUpdatePassword} />
    </div>
  );
};

export default UpdatePassword;
