/** @format */

import { ActionTypeCreator } from '../types/common-types';
import { IServiceState, IRate } from '../types/service-interfaces';

export const serviceActions = {
  setRate: (rate: IRate) => ({ type: 'service/setRate', rate } as const),
};
export type ServiceActionType = ActionTypeCreator<typeof serviceActions>;

const initialState: IServiceState = {
  rate: { date: new Date(), valute: { eur: { value: 0 }, usd: { value: 0 } } },
};

export const serviceReducer = (state = initialState, action: ServiceActionType): IServiceState => {
  switch (action.type) {
    case 'service/setRate': {
      return { ...state, rate: action.rate };
    }
    default:
      return state;
  }
};
