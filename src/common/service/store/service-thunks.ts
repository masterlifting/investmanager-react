/** @format */

import { ServiceAPI } from '../service-api';
import { ThunkType } from '../types/common-types';
import { ServiceActionType, serviceActions } from './service-reducer';

const serviceAPI = new ServiceAPI();

export const fetchRate = (): ThunkType<ServiceActionType> => async dispatch => {
  const response = await serviceAPI.getRateAsync();
  if (response.isSuccess) {
    dispatch(serviceActions.setRate(response.data!));
  }
};
