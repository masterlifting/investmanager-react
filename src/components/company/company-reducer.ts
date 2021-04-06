import { ActionTypeCollector } from "../../globalStore/appStore";
import { ICompany } from "../../types/app-entity-types";

/** @format */
const initialState: ICompany[] = [
  { id: 1, name: 'company 1', selected: true },
  { id: 2, name: 'company 2', selected: true },
];

export const actions = {
  setItems: (items: ICompany[]) => ({ type: 'company/setItems', items } as const),
  setSelected: (id: number) => ({ type: 'company/setSelected', id } as const),
};
export type CompanyActionType = ActionTypeCollector<typeof actions>;
export const companyReducer = (state = initialState, action: CompanyActionType): ICompany[] => {
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
