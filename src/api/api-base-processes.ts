/** @format */

import { IBaseResponseAPI } from './api-config';

export const startApiProcessAsync = async (action: (args?: any) => Promise<IBaseResponseAPI>, dispatch: any) => {
  dispatch(setLoader('start'));
  processResultHandlerAsync(action, dispatch);
  dispatch(setLoader('stop'));
};

const processResultHandlerAsync = async (action: (args?: any) => Promise<IBaseResponseAPI>, dispatch: any) => {
  try {
    const response: IBaseResponseAPI = await action();
    const result = response.isSuccess;
    if (!result) {
      dispatch(showError(response.info!));
    } else {
      dispatch();
    }
  } catch {
    dispatch(showError('request error'));
  }
};

const showError = (message: string) => {};
const setLoader = (actionType: 'start' | 'stop') => {};
