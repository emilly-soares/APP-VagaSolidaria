import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import User from '../pages/User';
import Login from '../pages/Login';
import Company from '../pages/Company';
import Vacancy from '../pages/Vacancy';
import HomePage from '../pages/HomePage';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/company" element={<Company />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/register" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
