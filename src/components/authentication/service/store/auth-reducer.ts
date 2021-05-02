/** @format */

import { ActionTypeCreator } from '../../../../common/types/common-types';
import { IAuth } from '../types/auth-interfaces';

export const authActions = {
  setUser: (email: string) => ({ type: 'auth/setUser', email } as const),
  logoutUser: () => ({ type: 'auth/logoutUser' } as const),
  setAuthErrors: (errors: string[]) => ({ type: 'auth/setErrors', errors } as const),
  clearAuthErrors: () => ({ type: 'auth/clearErrors' } as const),
};
export type AuthActionType = ActionTypeCreator<typeof authActions>;
const initialState: IAuth = {
  user: {
    email: '',
    isAuth: false,
  },
  apiErrors: [],
};

export const authReducer = (state = initialState, action: AuthActionType): IAuth => {
  switch (action.type) {
    case 'auth/setUser': {
      return { ...state, user: { email: action.email, isAuth: true } };
    }
    case 'auth/logoutUser': {
      return { ...state, user: { email: '', isAuth: false } };
    }
    case 'auth/setErrors': {
      const errors = new Set(state.apiErrors);
      for (let i = 0; i < action.errors.length; i++) {
        errors.add(action.errors[i]);
      }
      return { ...state, apiErrors: [...errors] };
    }
    case 'auth/clearErrors': {
      return { ...state, apiErrors: [] };
    }
    default:
      return state;
  }
};
