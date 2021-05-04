/** @format */

import { AppStateType } from '../../../../common/types/common-types';

export const getAuthData = (state: AppStateType) => state.auth;
export const getUser = (state: AppStateType) => state.auth.user;
export const getIsAuth = (state: AppStateType) => state.auth.user.isAuth;
