import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    return loggedInUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
