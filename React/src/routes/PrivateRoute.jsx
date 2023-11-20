import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthorized }) => {

  const showAlertAndRedirect = () => {
    alert("No esta autorizado, porfavor logueese primero");
    
    return <Navigate to="/" replace />;
  };

  return isAuthorized ? (
    element
  ) : (
    showAlertAndRedirect()
  );
};

export default PrivateRoute;
