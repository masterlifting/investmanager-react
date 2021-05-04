/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from './service/store/auth-thunks';

export const Logout: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  
  return <Redirect to='/' />;
};
