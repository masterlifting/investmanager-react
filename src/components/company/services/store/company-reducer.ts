/** @format */

import { ActionTypeCreator } from '../../../../common/types/common-types';
import { IAppCompanyAdditional, ICompany } from '../types/company-interfaces';
import { ICollectionBehavior } from '../../../../common/types/common-interfaces';

export const companyActions = {
  setItems: (items: ICompany[]) => ({ type: 'company/setItems', items } as const),
  setItemsTotalCount: (totalCount: number) => ({ type: 'company/setTotalItemsCount', totalCount } as const),
  setCurrentItemsPage: (page: number) => ({ type: 'company/setCurrentItemsPage', page } as const),
  setFindingPhrase: (phrase: string | null) => ({ type: 'company/setFindingPhrase', phrase } as const),
  setVisibleItems: (ids: number[]) => ({ type: 'company/setVisibleItems', ids } as const),
  changeSelectable: (id: number) => ({ type: 'company/changeSelectable', id } as const),
  clearSelectable: () => ({ type: 'company/clearSelectable' } as const),
  setAdditionalInfo: (id: number, info: IAppCompanyAdditional) => ({ type: 'company/setAdditionalInfo', id, info } as const),
};
export type CompanyActionType = ActionTypeCreator<typeof companyActions>;
const initialState: ICollectionBehavior<ICompany> = {
  items: [],
  pagination: {
    limit: 11,
    page: 1,
    total: 0,
    pagePortionSize: 5,
  },
  filter: {
    phrase: null,
  },
};

export const companyReducer = (state = initialState, action: CompanyActionType): ICollectionBehavior<ICompany> => {
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
    case 'company/setTotalItemsCount': {
      return { ...state, pagination: { ...state.pagination, total: action.totalCount } };
    }
    case 'company/setCurrentItemsPage': {
      return state.pagination.page !== action.page ? { ...state, pagination: { ...state.pagination, page: action.page } } : { ...state };
    }
    case 'company/setFindingPhrase': {
      return { ...state, filter: { ...state.filter, phrase: action.phrase } };
    }
    case 'company/setAdditionalInfo': {
      state.items.forEach(x => (x.id === action.id ? (x.additionalInfo = action.info) : x));
      return { ...state, items: [...state.items] };
    }
    default:
      return state;
  }
};
