import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import axios from  '../config/axios'

import BookList from '../pages/BookList';
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
                return authenticationStatus === 'Valid';
            })
            .catch(error => {
                console.log("El token no es valido")
                console.error('Error al verificar el token:', error);
                return false;
            });
    }

    return false;
};


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/books"
             element={<PrivateRoute element={<BookList />} isAuthorized={isUserAuthenticated()} />}
      />
      <Route path="/*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/AuthorsPage" element={<AuthorsPage />} />
      <Route path="/BooksPage" element={<BooksPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
