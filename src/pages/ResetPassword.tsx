import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPasswordForm from '../components/ResetPassword/index';

const ResetPassword: React.FC = () => {

  const navigate = useNavigate();
  const [isReset, setIsReset] = useState(false);

  const handleUpdatePassword = () => {
    setIsReset(true);
  };

  if(isReset){
    navigate('/updatePassword');
    return null;
  }

  return (
    <div>
      <ResetPasswordForm onSuccess={handleUpdatePassword} />
    </div>
  );
};

export default ResetPassword;
