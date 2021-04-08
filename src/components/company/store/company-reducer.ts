/** @format */

import { ActionTypeCreator } from '../../../common/types/common-types';
import { ICompany } from '../types/company-interfaces';

export const companyActions = {
  setItems: (items: ICompany[]) => ({ type: 'company/setItems', items } as const),
  setVisibleItems: (ids: number[]) => ({ type: 'company/setVisibleItems', ids } as const),
  changeSelectable: (id: number) => ({ type: 'company/changeSelectable', id } as const),
  clearSelectable: () => ({ type: 'company/clearSelectable' } as const),
};
export type CompanyActionType = ActionTypeCreator<typeof companyActions>;

export const companyReducer = (state: ICompany[] = [], action: CompanyActionType): ICompany[] => {
  switch (action.type) {
    case 'company/setItems':
      return [...action.items];
    case 'company/changeSelectable': {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state[i].selected = !state[i].selected;
        }
      }
      return [...state];
    }
    case 'company/clearSelectable': {
      for (let i = 0; i < state.length; i++) {
        state[i].visibled = true;
        if (state[i].selected) {
          state[i].selected = false;
        }
      }
      return [...state];
    }
    case 'company/setVisibleItems': {
      for (let i = 0; i < state.length; i++) {
        state[i].visibled = false;
        for (let j = 0; j < action.ids.length; j++) {
          if (state[i].id === action.ids[j]) {
            state[i].visibled = true;
          }
        }
      }
      return [...state];
    }
    default:
      return state;
  }
};
