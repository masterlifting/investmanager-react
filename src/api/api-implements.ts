/** @format */

import { baseGetAsync, EditAPI, GetAPI, IBaseResponseAPI, IResponseAPI } from './api-config';
import { IApiAccount, IApiCompany, IApiCompanySummary } from './api-types';

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
export const startApiProcessAsync = async <T extends IBaseResponseAPI, TParam>(action: (args?: TParam) => Promise<T>, dispatch: any, params?: TParam): Promise<T> => {
  dispatch(setLoaderTemp('start'));
  const actionResult = await apiTryHandlerAsync(action, dispatch, params);
  dispatch(setLoaderTemp('stop'));
  return actionResult;
};

const showErrorTemp = (message: string) => {};
const setLoaderTemp = (actionType: 'start' | 'stop') => {};

const endpoints = {
  account: 'accounts/',
  company: 'companies/',
};

export const accountAPI = {
  getAPI: new GetAPI<IApiAccount>(endpoints.account),
  editAPI: new EditAPI<IApiAccount>(endpoints.account),
  getSumAsync: async (id: number): Promise<IResponseAPI<number>> => await baseGetAsync(`${endpoints.account}/${id}/summary/`),
};
export const companyAPI = {
  getAPI: new GetAPI<IApiCompany>(endpoints.company),
  editAPI: new EditAPI<IApiCompany>(endpoints.company),
  getAdditionalAsync: async (id: number): Promise<IResponseAPI<IApiCompanySummary>> => await baseGetAsync(`${endpoints.company}/${id}/additional/`),
};
