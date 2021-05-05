/** @format */

import { ICollectionBehavior } from '../../../../common/service/types/common-interfaces';
import { ActionTypeCreator } from '../../../../common/service/types/common-types';
import { IAccount } from '../types/account-interfaces';

export const accountActions = {
  setItems: (items: IAccount[]) => ({ type: 'account/setItems', items } as const),
  setItemsTotalCount: (totalCount: number) => ({ type: 'account/setTotalItemsCount', totalCount } as const),
  changeSelectable: (id: number) => ({ type: 'account/changeSelectable', id } as const),
  clearSelectable: () => ({ type: 'account/clearSelectable' } as const),
};
export type AccountActionType = ActionTypeCreator<typeof accountActions>;
const initialState: ICollectionBehavior<IAccount> = {
  items: [],
  pagination: {
    limit: 5,
    page: 1,
    total: 0,
    pagePortionSize: 5,
  },
  filter: {
    phrase: null,
  },
};

export const accountReducer = (state = initialState, action: AccountActionType): ICollectionBehavior<IAccount> => {
  switch (action.type) {
    case 'account/setItems': {
      return { ...state, items: action.items };
    }
    case 'account/changeSelectable': {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.id) {
          state.items[i].selected = !state.items[i].selected;
        }
      }
      return { ...state, items: [...state.items] };
    }
    case 'account/clearSelectable': {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].selected) {
          state.items[i].selected = false;
        }
      }
      return { ...state, items: [...state.items] };
    }
    case 'account/setTotalItemsCount': {
      return { ...state, pagination: { ...state.pagination, total: action.totalCount } };
    }
    default:
      return state;
  }
};
