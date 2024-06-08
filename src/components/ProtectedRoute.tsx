import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, isTokenExpired } from '../services/authconfig';
import {USER_ID} from '../services/authconfig';


const ProtectedRoute = (children: string, roles: string) => {
    if (!isAuthenticated() || isTokenExpired()) {
        return <Navigate to="/login" />;
    }

    if (roles && !roles.includes(USER_ID)) {
        return <Navigate to="/" />;
    }

    return children;
};
