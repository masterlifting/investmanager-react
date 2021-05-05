/** @format */

import { ActionTypeCreator } from '../../../../common/service/types/common-types';
import { IAuth, IUser } from '../types/auth-interfaces';

export const authActions = {
  setUser: (user: IUser) => ({ type: 'auth/setUser', user } as const),
  logoutUser: () => ({ type: 'auth/logoutUser' } as const),
  setAuthErrors: (errors: string[]) => ({ type: 'auth/setErrors', errors } as const),
  clearAuthErrors: () => ({ type: 'auth/clearErrors' } as const),
};
export type AuthActionType = ActionTypeCreator<typeof authActions>;
const initialState: IAuth = {
  user: {
    name: '',
    isAdmin: false,
    isAuth: false,
  },
  apiErrors: [],
};

export const authReducer = (state = initialState, action: AuthActionType): IAuth => {
  switch (action.type) {
    case 'auth/setUser': {
      return { ...state, user: action.user };
    }
    case 'auth/logoutUser': {
      return { ...state, user: { name: '', isAdmin: false, isAuth: false } };
    }
    case 'auth/setErrors': {
      return { ...state, apiErrors: action.errors };
    }
    case 'auth/clearErrors': {
      return { ...state, apiErrors: [] };
    }
    default:
      return state;
  }
};
