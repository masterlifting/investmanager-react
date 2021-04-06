/** @format */

import { ActionTypeCollector, ThunkType } from '../../globalStore/appStore';
import { IAccount } from '../../types/app-entity-types';

const initialState: IAccount[] = [
  { id: 1, name: 'account 1', sum: 100, selected: true },
  { id: 2, name: 'account 2', sum: 200, selected: true },
];
export const actions = {
  setItems: (items: IAccount[]) => ({ type: 'account/setItems', items } as const),
  setSelected: (id: number) => ({ type: 'account/setSelected', id } as const),
};

export type AccountActionType = ActionTypeCollector<typeof actions>;

export const accountReducer = (state = initialState, action: AccountActionType): IAccount[] => {
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
const getAccounts = (): ThunkType<AccountActionType> => async (dispatch, getState) => {
  dispatch({ type: 'account/setItems', items: getState().accounts });
};
