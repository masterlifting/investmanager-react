/** @format */

import { IAuthResult, ITokenResult, IUser } from './types/auth-interfaces';
import jwt_decode from 'jwt-decode';
import { authApi } from '../../../api/api-configuration';

const getTokenUser = (token: string): IUser => {
  var user: IUser = { name: '', isAuth: false, isAdmin: false };
  const decodedToken: Object = jwt_decode(token);
  const entries = Object.entries(decodedToken);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][0] === 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name') {
      user.name = entries[i][1];
      user.isAuth = true;
    }
    if (entries[i][0] === 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role') {
      user.isAdmin = entries[i][1] === 'pestunov';
    }
  }

  return user;
};

export const setJwtToken = (authResult: IAuthResult): ITokenResult => {
  const token = `Bearer ${authResult.token}`;

  authApi.setAuthHeader(token);

  const result: ITokenResult = { isSuccess: false };
  const user = getTokenUser(token);
  if (user.isAuth) {
    result.isSuccess = true;
    result.user = user;
  }
  return result;
};
export const removeJwtToken = (): ITokenResult => {
  authApi.removeToken();
  return { isSuccess: true, user: undefined };
};
