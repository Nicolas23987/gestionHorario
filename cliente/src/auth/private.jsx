import React from 'react';
import { Navigate } from 'react-router-dom';
import {Login} from '../screen/login';
import { Selec_Home } from '../screen/selec_home';
// import jwt from 'jwt-decode';-
import { jwtDecode } from 'jwt-decode'; 

const PrivateRoute = ({Element}) => {
  const isAuthenticated = !!localStorage.getItem('auth-cookie'); // Verifica si hay un token de autenticación
  // const token = localStorage.getItem('auth-cookie'); // Verifica si hay un token de autenticación
  // console.log(isAuthenticated)
  // const data = jwtDecode(token)
  // console.log(data)
  // console.log(token)
  

  return isAuthenticated ? (
    
     <Element/>

  ) : (
    <Login/>
  );
};

export default PrivateRoute;
