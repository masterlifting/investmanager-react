/** @format */

import { AxiosAuthHeader } from '../../../api/api-configuration';
import { IAuthResult, ITokenResult } from './types/auth-interfaces';

export const setJwtToken = (authResult: IAuthResult): ITokenResult => {
  const token = `Bearer ${authResult.token}`;
  new AxiosAuthHeader().setAuthHeader(token);
  return { isSuccess: true, userName: 'pestunov' };
};
export const removeJwtToken = (): ITokenResult => {
  new AxiosAuthHeader().removeToken();
  return { isSuccess: true, userName: '' };
};
