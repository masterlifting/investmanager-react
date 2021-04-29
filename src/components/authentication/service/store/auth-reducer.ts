/** @format */

import { ActionTypeCreator } from '../../../../common/types/common-types';
import { IUser } from '../types/auth-interfaces';

export const authActions = {
  setUser: (email: string) => ({ type: 'auth/setUser', email } as const),
  logoutUser: () => ({ type: 'auth/logoutUser' } as const),
};
export type AuthActionType = ActionTypeCreator<typeof authActions>;
const initialState: IUser = {
  email: '',
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthActionType): IUser => {
  switch (action.type) {
    case 'auth/setUser': {
      return { ...state, email: action.email, isAuth: true };
    }
    case 'auth/logoutUser': {
      return { ...state, email: '', isAuth: false };
    }
    default:
      return state;
  }
};
