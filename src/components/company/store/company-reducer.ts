/** @format */

import { ActionTypeCreator } from '../../../common/types/common-types';
import { ICompany } from '../types/company-interfaces';

export const companyActions = {
  setItems: (items: ICompany[]) => ({ type: 'company/setItems', items } as const),
  changeSelectable: (id: number) => ({ type: 'company/changeSelectable', id } as const),
  setSelectable: () => ({ type: 'company/setSelectable' } as const),
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
    case 'company/setSelectable': {
      return [...state.filter(x => x.selected)];
    }
    default:
      return state;
  }
};
