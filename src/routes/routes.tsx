import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import User from '../pages/User';
import Login from '../pages/Login';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
