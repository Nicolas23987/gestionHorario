import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../screen/login';

const PrivateRoute = (Element) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica si hay un token de autenticación
  Element = Element;
  console.log(Element)


  return isAuthenticated ? (
    Element
  ) : (
    <Navigate to='/' />
  );
};

export default PrivateRoute;
