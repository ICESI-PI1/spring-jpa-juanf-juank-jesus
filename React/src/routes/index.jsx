import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import axios from  '../config/axios'

import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthorsPage from '../pages/AuthorsPage';
import BooksPage from '../pages/BooksPage';

const showAlertAndRedirect = () => {
    alert("No esta autorizado, porfavor logueese primero");
    
    return <Navigate to="/" replace />;
};


const PrivateRoute = ({ element }) => {
    const [isAuthenticated, setAuthenticated] = useState(null); // null representa el estado de carga


    useEffect(() => {
      const isUserAuthenticated = async () => {
        const token = localStorage.getItem('token');
    
        if (token) {
          try {
            const response = await axios.get('/verifyToken');
            const authenticationStatus = response.headers['authentication-status'];
            console.log("Estoy autorizado");
            setAuthenticated(true);
          } catch (error) {
            console.log("El token no es válido");
            console.error('Error al verificar el token:', error);
            setAuthenticated(false);
          }
        } else {
          console.log("No hay token");
          setAuthenticated(false);
        }
      };
    
      isUserAuthenticated();
    }, []); 

    if (isAuthenticated === null) {
      return <div>Cargando...</div>;
    }
    
    return isAuthenticated ? element : showAlertAndRedirect();
  };

  
  const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<PrivateRoute element={<BooksPage />} />} />
        <Route path="/authors" element={<PrivateRoute element={<AuthorsPage />} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

export default Router;
