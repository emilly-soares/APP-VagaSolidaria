import React from 'react';
import Routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App: React.FC = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Routes />
    </div>
  );
};

export default App;
