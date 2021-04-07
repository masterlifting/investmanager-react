/** @format */

import { ActionTypeCreator } from '../../../common/types/common-types';
import { ICompany } from '../types/company-interfaces';

export const actions = {
  setItems: (items: ICompany[]) => ({ type: 'company/setItems', items } as const),
  setSelected: (id: number) => ({ type: 'company/setSelected', id } as const),
};
export type CompanyActionType = ActionTypeCreator<typeof actions>;

export const companyReducer = (state: ICompany[] = [], action: CompanyActionType): ICompany[] => {
  switch (action.type) {
    case 'company/setItems':
      return [...action.items];
    case 'company/setSelected': {
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
