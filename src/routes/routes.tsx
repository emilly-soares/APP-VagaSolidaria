import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterUser from '../pages/RegisterUser';
import Login from '../pages/Login';
import ManageCompanies from '../pages/ManageCompanies';
import Vacancy from '../pages/Vacancy';
import HomePage from '../pages/HomePage';
import ResetPassword from '../pages/ResetPassword';
import UpdatePassword from '../pages/UpdatePassword';
import UpdateCandidate from './../pages/UpdateCandidate';
import CompanyOpportunities from "../pages/CompanyOpportunities"
import Companies from '../components/Companies';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/updatePassword" element={<UpdatePassword />} />
                <Route path="/manageUser" element={<UpdateCandidate />} />
                <Route path="/opportunities" element={<CompanyOpportunities />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/manageCompanies" element={<ManageCompanies />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
