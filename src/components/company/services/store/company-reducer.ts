/** @format */

import { ActionTypeCreator } from '../../../../common/types/common-types';
import { ICompany } from '../types/company-interfaces';
import { IFilter } from '../../../../common/types/common-interfaces';

export const companyActions = {
  setPaginationTotal: (totalCount: number) => ({ type: 'company/setPaginationTotal', totalCount } as const),
  setPaginationPage: (page: number) => ({ type: 'company/setPaginationPage', page } as const),
  setFindPhrase: (phrase: string | null) => ({ type: 'company/setFindPhrase', phrase } as const),
  setItems: (items: ICompany[]) => ({ type: 'company/setItems', items } as const),
  setVisibleItems: (ids: number[]) => ({ type: 'company/setVisibleItems', ids } as const),
  changeSelectable: (id: number) => ({ type: 'company/changeSelectable', id } as const),
  clearSelectable: () => ({ type: 'company/clearSelectable' } as const),
};
export type CompanyActionType = ActionTypeCreator<typeof companyActions>;
const initialState: IFilter<ICompany> = {
  items: [],
  pagination: {
    limit: 11,
    page: 1,
    total: 0,
    pagePortionSize: 5,
  },
  phrase: null,
};

export const companyReducer = (state = initialState, action: CompanyActionType): IFilter<ICompany> => {
  switch (action.type) {
    case 'company/setItems': {
      return { ...state, items: action.items.concat(state.items.filter(x => x.selected)) };
    }
    case 'company/changeSelectable': {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.id) {
          state.items[i].selected = !state.items[i].selected;
        }
      }
      return { ...state, items: [...state.items] };
    }
    case 'company/clearSelectable': {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].visibled = true;
        if (state.items[i].selected) {
          state.items[i].selected = false;
        }
      }
      return { ...state, items: [...state.items] };
    }
    case 'company/setVisibleItems': {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].visibled = false;
        for (let j = 0; j < action.ids.length; j++) {
          if (state.items[i].id === action.ids[j]) {
            state.items[i].visibled = true;
          }
        }
      }
      return { ...state, items: [...state.items] };
    }
    case 'company/setPaginationTotal': {
      return { ...state, pagination: { ...state.pagination, total: action.totalCount } };
    }
    case 'company/setPaginationPage': {
      return { ...state, pagination: { ...state.pagination, page: action.page } };
    }
    case 'company/setFindPhrase': {
      return { ...state, phrase: action.phrase };
    }
    default:
      return state;
  }
};
