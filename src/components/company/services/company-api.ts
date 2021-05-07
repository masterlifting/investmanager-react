/** @format */

import { restApi } from '../../../api/api-configuration';
import { IApiPagination, IApiBaseResponse } from '../../../api/api-interfaces';
import { IApiCompany, IApiCompanySummary, IApiCompanyTransaction } from './types/company-interfaces';

export class CompanyAPI {
  private controller = 'company';

  getCompanyAsync = async (id: number): Promise<IApiBaseResponse<IApiCompany>> => await restApi.getAsync(`${this.controller}/${id}`);
  getCompaniesAsync = async (page: number, limit: number, phrase: string | null): Promise<IApiBaseResponse<IApiPagination<IApiCompany>>> => {
    let queryString = `${this.controller}?page=${page}&limit=${limit}`;
    if (phrase !== null) {
      queryString += `&phrase=${phrase}`;
    }
    return await restApi.getAsync(queryString);
  };
  getSummaryAsync = async (id: number, accountId: number): Promise<IApiBaseResponse<IApiCompanySummary>> =>
    await restApi.getAsync(`${this.controller}/${id}/summary/${accountId}`);
  getTransactionsAsync = async (
    id: number,
    accountId: number,
    page: number,
    limit: number,
  ): Promise<IApiBaseResponse<IApiPagination<IApiCompanyTransaction>>> =>
    await restApi.getAsync(`${this.controller}/${id}/transactions/${accountId}?page=${page}&limit=${limit}`);
}
