/** @format */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from './service/store/auth-selectors';
import { authApi } from '../../api/api-configuration';
import { fetchAccounts } from '../account/services/store/account-thunks';
import { logout, authUser } from './service/store/auth-thunks';
import { accountActions } from '../account/services/store/account-reducer';

export const AuthDisplay: React.FC = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = authApi.getToken();
    if (token !== undefined) {
      const expiry = new Date(token.expiry!);
      const dateNow = new Date();
      if (dateNow < expiry) {
        if (!user.isAuth) {
          dispatch(authUser(token));
        } else {
          dispatch(fetchAccounts([]));
        }
      }
    } else {
      dispatch(logout());
      dispatch(accountActions.setItems([]));
    }
  }, [dispatch, user.isAuth]);

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
