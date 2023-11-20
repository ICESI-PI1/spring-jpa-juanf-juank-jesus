import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import axios from  '../config/axios'

import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthorsPage from '../pages/AuthorsPage';
import BooksPage from '../pages/BooksPage';

const isUserAuthenticated = () => {
    const token = localStorage.getItem('token');

    if (token) {
        // Aquí un ejemplo utilizando axios
          axios.get('/verifyToken')
            .then(response => {
                const authenticationStatus = response.headers['authentication-status'];
                console.log("El token es valido")
                return true;
            })
            .catch(error => {
                console.log("El token no es valido")
                console.error('Error al verificar el token:', error);
                return false;
            });
    } else{
        console.log("Actualmente no hay token")
        return false;
    }
};


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books"
             element={<PrivateRoute element={<BooksPage />} isAuthorized={isUserAuthenticated()} />}
      />
      <Route path="/authors"
             element={<PrivateRoute element={<AuthorsPage />} isAuthorized={isUserAuthenticated()} />}
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
