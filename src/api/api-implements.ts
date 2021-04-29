/** @format */

import { AccountAPI } from '../components/account/account-api';
import { AuthAPI } from '../components/authentication/service/auth-api';
import { CompanyAPI } from '../components/company/services/company-api';
import { IBaseResponseAPI } from './api-interfaces';

const apiTryHandlerAsync = async <TResult extends IBaseResponseAPI, TParam>(
  action: (args?: TParam) => Promise<TResult>,
  dispatch: any, //Dispatch<ActionType>,
  params?: TParam,
): Promise<TResult> => {
  try {
    const response: TResult = params ? await action(params) : await action();

    if (response.isSuccess) {
      return response;
    }

    dispatch(showErrorTemp(response.info!));
  } catch {
    dispatch(showErrorTemp('request error'));
  }

  const result: IBaseResponseAPI = { isSuccess: false };
  return result as TResult;
};
export const startApiProcessAsync = async <T extends IBaseResponseAPI, TParam>(
  action: (args?: TParam) => Promise<T>,
  dispatch: any,
  params?: TParam,
): Promise<T> => {
  dispatch(setLoaderTemp('start'));
  const actionResult = await apiTryHandlerAsync(action, dispatch, params);
  dispatch(setLoaderTemp('stop'));
  return actionResult;
};

const showErrorTemp = (message: string) => {};
const setLoaderTemp = (actionType: 'start' | 'stop') => {};

export const API = {
  auth: new AuthAPI(),
  account: new AccountAPI(),
  company: new CompanyAPI(),
};
