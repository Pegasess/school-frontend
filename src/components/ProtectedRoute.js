import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, allowedRoles, children }) => {
  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
