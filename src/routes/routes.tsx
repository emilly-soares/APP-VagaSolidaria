import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Company from '../pages/Company';
import Vacancy from '../pages/Vacancy';
import HomePage from '../pages/HomePage';
import ResetPassword from '../pages/ResetPassword';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/company" element={<Company />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
