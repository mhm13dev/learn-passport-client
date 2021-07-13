import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ children, ...props }) => {
  return <Route {...props}>{children}</Route>;
};

export default ProtectedRoute;
