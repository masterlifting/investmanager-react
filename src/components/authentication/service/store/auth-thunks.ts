/** @format */

import { authApi } from '../../../../api/api-configuration';
import { ThunkType } from '../../../../common/types/common-types';
import { removeJwtToken, setJwtToken } from '../auth-service';
import { IApiLogin, IApiRegister, IAuthResult } from '../types/auth-interfaces';
import { authActions, AuthActionType } from './auth-reducer';

const setAuthData = (dispatch: any, authResult: IAuthResult) => {
  if (authResult.isSuccess) {
    const tokenResult = setJwtToken(authResult);
    if (tokenResult.isSuccess) {
      dispatch(authActions.clearAuthErrors());
      dispatch(authActions.setUser(tokenResult.user!));
    }
  } else {
    dispatch(authActions.setAuthErrors(authResult.info!.split(';').map(x => `server: ${x}`)));
  }
};

export const login = (model: IApiLogin): ThunkType<AuthActionType> => async dispatch =>
  setAuthData(dispatch, await authApi.loginAsync('security/login', model));
export const register = (model: IApiRegister): ThunkType<AuthActionType> => async dispatch =>
  setAuthData(dispatch, await authApi.registerAsync('security/register', model));
export const logout = (): ThunkType<AuthActionType> => async dispatch => {
  const tokenResult = removeJwtToken();
  if (tokenResult.isSuccess) {
    dispatch(authActions.logoutUser());
  }
};
