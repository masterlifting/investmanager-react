/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from './service/store/auth-selectors';

export const AuthDisplay: React.FC = () => {
  const user = useSelector(getUser);
  return user.isAuth ? (
    <NavLink className='nav-link' to='/logout'>
      {user.name}(выйти)
    </NavLink>
  ) : (
    <>
      <NavLink className='nav-link' to='/login'>
        Войти
      </NavLink>
      <NavLink className='nav-link' to='/register'>
        Регистрация
      </NavLink>
    </>
  );
};
