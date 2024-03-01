import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPasswordForm from '../components/ResetPassword/index';
import { ToastContainer, toast } from "react-toastify";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleUpdatePassword = () => {
    toast.success("Sucesso");
    navigate('/updatePassword');
  };

  return (
    <div>
      <ResetPasswordForm onSuccess={handleUpdatePassword} />
    </div>
  );
};

export default ResetPassword;
