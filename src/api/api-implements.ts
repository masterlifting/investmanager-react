/** @format */

import { baseGetResult, EditAPI, GetAPI, instance, IResponseAPI } from './api-config';
import { IApiAccount, IApiCompany, IApiCompanySummary } from './api-types';

const endpoints = {
  account: 'accounts/',
  company: 'companies/',
};
export const accountAPI = {
  getAPI: new GetAPI<IApiAccount>(endpoints.account),
  editAPI: new EditAPI<IApiAccount>(endpoints.account),
  getSumAsync: async (id: number): Promise<IResponseAPI<number>> => baseGetResult(await instance.get<number>(`${endpoints.account}/${id}/summary/`)),
};

export const companyAPI = {
  getAPI: new GetAPI<IApiCompany>(endpoints.company),
  editAPI: new EditAPI<IApiCompany>(endpoints.company),
  getAdditionalAsync: async (id: number): Promise<IResponseAPI<IApiCompanySummary>> =>
    baseGetResult(await instance.get<IApiCompanySummary>(`${endpoints.company}/${id}/additional/`)),
};
