/** @format */

import { ActionTypeCreator } from '../../../common/types/common-types';
import { IAccount } from '../types/account-interfaces';

export const actions = {
  setItems: (items: IAccount[]) => ({ type: 'account/setItems', items } as const),
  setSelected: (id: number) => ({ type: 'account/setSelected', id } as const),
};

export type AccountActionType = ActionTypeCreator<typeof actions>;

export const accountReducer = (state: IAccount[] = [], action: AccountActionType): IAccount[] => {
  switch (action.type) {
    case 'account/setItems':
      return [...action.items];
    case 'account/setSelected': {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state[i].selected = !state[i].selected;
        }
      }
      return [...state];
    }
    default:
      return state;
  }
};
