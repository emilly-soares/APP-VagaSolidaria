import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterUser from '../pages/RegisterUser';
import Login from '../pages/Login';
import ManageCompanies from '../pages/ManageCompanies';
import ManageUsers from '../pages/ManagerUsers';
import HomePage from '../pages/HomePage';
import ResetPassword from '../pages/ResetPassword';
import UpdatePassword from '../pages/UpdatePassword';
import UpdateCandidate from './../pages/UpdateCandidate';
import UpdateCompany from "./../pages/UpdateCompany";
import CompanyOpportunities from "../pages/CompanyOpportunities"
import Companies from '../components/Companies';
import ManageVacancies from '../pages/ManageVacancies';
import VacanciesPage from '../pages/VacanciesPage';
import VacanciesPerCompanyForm from '../pages/VacanciesPerCompanyForm';
import VacanciesDetailsForm from '../pages/VacancyDetailsPage';
import ManageCandidates from '../components/ManageCandidates';
import Layout from "../components/Layout"
import VacanciesList from '../components/VacanciesList';
import CandidatesList from '../components/ManageCandidates';

const Router: React.FC = () => {
    return (

        <BrowserRouter>

            <Routes>
                <Route
                    path="/"
                    element={<HomePage />} />

                <Route
                    path="/login"
                    element={<Login />} />

                <Route
                    path="/register"
                    element={<RegisterUser />} />

                <Route
                    path="/resetPassword"
                    element={<ResetPassword />} />

                <Route
                    path="/updatePassword"
                    element={<UpdatePassword />} />

                <Route
                    path="/manageUser/Candidate"
                    element={<Layout><UpdateCandidate /></Layout>} />

                <Route
                    path="/manageUser/Company"
                    element={<Layout><UpdateCompany /></Layout>} />

                <Route
                    path="/opportunities"
                    element={<Layout><CompanyOpportunities /></Layout>} />

                <Route
                    path="/companies"
                    element={<Layout><Companies /></Layout>} />

                <Route
                    path="/manageCompanies"
                    element={<Layout><ManageCompanies /></Layout>} />

                <Route
                    path="/manageUsers"
                    element={<Layout><ManageUsers /></Layout>} />

                <Route
                    path="/manageVacancies"
                    element={<Layout><ManageVacancies /></Layout>} />

                <Route
                    path="/vacancies"
                    element={<Layout><VacanciesPage /></Layout>} />

                <Route
                    path="/vacancies/company/:companyId"
                    element={<Layout><VacanciesPerCompanyForm /></Layout>} />

                <Route
                    path="/vacancy/:id"
                    element={<Layout><VacanciesDetailsForm /></Layout>} />

                <Route
                    path="/vacanciesList/"
                    element={<Layout><VacanciesList /></Layout>} />

            <Route
                path="/candidatesList/:vacancyId"
                element={<Layout><CandidatesList /></Layout>} />
        </Routes>



        </BrowserRouter >
    );
};

export default Router;
