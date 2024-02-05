import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import User from '../pages/User';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
