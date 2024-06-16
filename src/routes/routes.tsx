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

const Router: React.FC = () => {
    return (
        
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/updatePassword" element={<UpdatePassword />} />
                <Route path="/manageUser/Candidate" element={<UpdateCandidate />} />
                <Route path="/manageUser/Company" element={<UpdateCompany />} />
                <Route path="/opportunities" element={<CompanyOpportunities />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/manageCompanies" element={<ManageCompanies />} />
                <Route path="/manageUsers" element={<ManageUsers />} />
                <Route path="/manageVacancies" element={<ManageVacancies />} />
                <Route path="/vacancies" element={<VacanciesPage />} />
                <Route path="/vacancies/company/:companyId" element={<VacanciesPerCompanyForm />} />
                <Route path="/vacancy/:id" element={<VacanciesDetailsForm/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default Router;
