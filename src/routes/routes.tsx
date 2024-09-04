import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import CandidatesList from '../components/ManageCandidates';
import Companies from '../components/Companies';
import HomePage from '../pages/HomePage';
import Layout from "../components/Layout";
import Login from '../pages/Login';
import ManageCompanies from '../pages/ManageCompanies';
import ManageUsers from '../pages/ManagerUsers';
import ManageVacancies from '../pages/ManageVacancies';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import RegisterUser from '../pages/RegisterUser';
import ResetPassword from '../pages/ResetPassword';
import UpdateCandidate from './../pages/UpdateCandidate';
import UpdateCompany from "./../pages/UpdateCompany";
import UpdatePassword from '../pages/UpdatePassword';
import VacanciesDetailsForm from '../pages/VacancyDetailsPage';
import VacanciesList from '../components/VacanciesList';
import VacanciesPage from '../pages/VacanciesPage';
import VacanciesPerCompanyForm from '../pages/VacanciesPerCompanyForm';


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<RegisterUser />} />

                <Route path="/resetPassword" element={<ResetPassword />} />

                <Route path="/updatePassword" element={<UpdatePassword />} />

                <Route path="/manageUser/Candidate" element={
                    <PrivateRoute allowedRoles={['candidate']}>
                        <Layout><UpdateCandidate /></Layout>
                    </PrivateRoute>
                } />

                <Route path="/manageUser/Company" element={
                    <PrivateRoute allowedRoles={['business']}>
                        <Layout><UpdateCompany /></Layout>
                    </PrivateRoute>
                } />


                <Route path="/companies" element={<Layout><Companies /></Layout>} />

                <Route path="/manageCompanies" element={
                    <PrivateRoute allowedRoles={['admin']}>
                        <Layout><ManageCompanies /></Layout>
                    </PrivateRoute>
                } />

                <Route path="/manageUsers" element={
                    <PrivateRoute allowedRoles={['admin']}>
                        <Layout><ManageUsers /></Layout>
                    </PrivateRoute>
                } />

                <Route path="/manageVacancies" element={
                    <PrivateRoute allowedRoles={['business']}>
                        <Layout><ManageVacancies /></Layout>
                    </PrivateRoute>
                } />

                <Route path="/vacancies" element={<Layout><VacanciesPage /></Layout>} />

                <Route path="/vacancies/company/:companyId" element={<Layout><VacanciesPerCompanyForm /></Layout>} />

                <Route path="/vacancy/:id" element={<Layout><VacanciesDetailsForm /></Layout>} />

                <Route path="/vacanciesList/" element={<Layout><VacanciesList /></Layout>} />

                <Route path="/candidatesList/:vacancyId" element={
                    <PrivateRoute allowedRoles={['business']}>
                        <Layout><CandidatesList /></Layout>
                    </PrivateRoute>
                } />

                <Route path="*" element={<Layout><NotFoundPage /></Layout>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
