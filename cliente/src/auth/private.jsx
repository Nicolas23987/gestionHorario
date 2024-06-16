// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si hay un token de autenticación

  return isAuthenticated ? children : <Navigate to="/inicio" />;
};

// export default PrivateRoute;
