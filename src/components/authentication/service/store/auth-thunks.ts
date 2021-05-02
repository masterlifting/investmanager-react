/** @format */

import { API } from '../../../../api/api-implements';
import { ThunkType } from '../../../../common/types/common-types';
import { removeJwtToken, setJwtToken } from '../auth-service';
import { IApiLogin, IApiRegister } from '../types/auth-interfaces';
import { authActions, AuthActionType } from './auth-reducer';

export const login = (model: IApiLogin): ThunkType<AuthActionType> => async dispatch => {
  const authResult = await API.auth.loginAsync(model);
  if (authResult.isSuccess) {
    const tokenResult = setJwtToken(authResult);
    if (tokenResult.isSuccess) {
      dispatch(authActions.clearAuthErrors());
      dispatch(authActions.setUser(tokenResult.userName));
    }
  } else {
    dispatch(authActions.setAuthErrors([`server: ${authResult.info!}`]));
  }
};
export const register = (model: IApiRegister): ThunkType<AuthActionType> => async dispatch => {
  const response = await API.auth.registerAsync(model);
  if (response.isSuccess) {
    dispatch(authActions.setUser(model.email));
    dispatch(authActions.clearAuthErrors());
  } else {
    dispatch(authActions.setAuthErrors(response.info!.split(';').map(x => `server: ${x}`)));
  }
};
export const logout = (): ThunkType<AuthActionType> => async dispatch => {
  const tokenResult = removeJwtToken();
  if (tokenResult.isSuccess) {
    dispatch(authActions.logoutUser());
  }
};
