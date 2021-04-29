/** @format */

import { API } from '../../../../api/api-implements';
import { ThunkType } from '../../../../common/types/common-types';
import { IApiLogin, IApiRegister } from '../types/auth-interfaces';
import { authActions, AuthActionType } from './auth-reducer';
import { setJwtToken, removeJwtToken } from '../auth-service';

export const login = (model: IApiLogin): ThunkType<AuthActionType> => async dispatch => {
  const response = await API.auth.loginAsync(model);
  if (response.isSuccess) {
    const tokenResult = setJwtToken(response.data!);
    if (tokenResult.isSuccess) {
      dispatch(authActions.setUser(tokenResult.userName));
    }
  }
};
export const register = (model: IApiRegister): ThunkType<AuthActionType> => async dispatch => {
  const response = await API.auth.registerAsync(model);
  if (response.isSuccess) {
    dispatch(authActions.setUser(model.email));
  }
};
export const logout = (): ThunkType<AuthActionType> => async dispatch => {
  const tokenResult = removeJwtToken();
  if (tokenResult.isSuccess) {
    dispatch(authActions.logoutUser());
  }
};
