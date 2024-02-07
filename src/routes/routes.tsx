import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import User from '../pages/User';
import Login from '../pages/Login';
import Company from '../pages/Company';
import Vacancy from '../pages/Vacancy';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/company" element={<Company />} />
            </Routes>
            <Routes>
                <Route path="/vacancy" element={<Vacancy />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
