import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateUserDashboard = () => {
  // SECURE EXTRACT: Pulling from the nested auth state created during refactoring
  const userToken = useSelector((state) => state.userToken);
    
  return (
    userToken ? <Outlet /> : <Navigate to="/userlogin" replace />
  );
};

export default PrivateUserDashboard;