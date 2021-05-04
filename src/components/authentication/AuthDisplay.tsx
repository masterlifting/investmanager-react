/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from './service/store/auth-selectors';

export const AuthDisplay: React.FC = () => {
  const user = useSelector(getUser);
  if (user.isAuth) {
    return (
      <NavLink className='nav-link' to='/logout'>
        {user.name}/Logout
      </NavLink>
    );
  } else {
    return (
      <>
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
        <NavLink className='nav-link' to='/register'>
          Regiter
        </NavLink>
      </>
    );
  }
};
