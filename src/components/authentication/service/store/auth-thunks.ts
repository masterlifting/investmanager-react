/** @format */

import { authApi } from '../../../../api/api-configuration';
import { ThunkType } from '../../../../common/service/types/common-types';
import { IApiLogin, IApiRegister, IAuthResult, IToken } from '../types/auth-interfaces';
import { authActions, AuthActionType } from './auth-reducer';
import { jwtServise } from '../auth-service';

const setAuthData = (dispatch: any, authResult: IAuthResult) => {
  if (authResult.isSuccess) {
    const tokenResult = jwtServise.setToken(authResult);
    if (tokenResult.isSuccess) {
      dispatch(authActions.clearAuthErrors());
      dispatch(authActions.setUser(tokenResult.user!));
    }
  } else {
    dispatch(authActions.setAuthErrors(authResult.info!.split(';').map(x => `server: ${x}`)));
  }
};

export const authUser = (token: IToken): ThunkType<AuthActionType> => async dispatch => {
  const tokenResult = jwtServise.setToken(token);
  if (tokenResult.isSuccess) {
    dispatch(authActions.setUser(tokenResult.user!));
  }
};
export const login = (model: IApiLogin): ThunkType<AuthActionType> => async dispatch =>
  setAuthData(dispatch, await authApi.loginAsync('security/login', model));
export const register = (model: IApiRegister): ThunkType<AuthActionType> => async dispatch =>
  setAuthData(dispatch, await authApi.registerAsync('security/register', model));
export const logout = (): ThunkType<AuthActionType> => async dispatch => {
  const tokenResult = jwtServise.removeToken();
  if (tokenResult.isSuccess) {
    dispatch(authActions.logoutUser());
  }
};
