/** @format */

import { ServiceAPI } from '../service-api';
import { ThunkType } from '../types/common-types';
import { IRate } from '../types/service-interfaces';
import { ServiceActionType, serviceActions } from './service-reducer';

const serviceAPI = new ServiceAPI();

export const fetchRate = (): ThunkType<ServiceActionType> => async dispatch => {
  const response = await serviceAPI.getRateAsync();
  if (response.isSuccess) {
    const rate: IRate = response.data!;

    dispatch(serviceActions.setRate(rate));
  }
};
