/** @format */

import { ITokenResult, IUser, IToken } from './types/auth-interfaces';
import jwt_decode from 'jwt-decode';
import { authApi } from '../../../api/api-configuration';

const parseTokenUser = (token: string): IUser => {
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

export const jwtServise = {
  getToken: (): IToken | undefined => authApi.getToken(),
  setToken: (data: IToken): ITokenResult => {
    let tokenData = data.token;
    if (tokenData.indexOf('Bearer') === -1) {
      tokenData = `Bearer ${data.token}`;
    }

    const tokenExpiry = data.expiry;

    authApi.setToken({ token: tokenData, expiry: tokenExpiry });

    const result: ITokenResult = { isSuccess: false };
    const user = parseTokenUser(tokenData);
    if (user.isAuth) {
      result.isSuccess = true;
      result.user = user;
    }
    return result;
  },
  removeToken: (): ITokenResult => {
    authApi.removeToken();
    return { isSuccess: true, user: undefined };
  },
};
