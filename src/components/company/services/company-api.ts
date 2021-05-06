/** @format */

import { restApi } from '../../../api/api-configuration';
import { IApiPagination, IApiBaseResponse } from '../../../api/api-interfaces';
import { IApiComanyTransactionsSummary, IApiCompany, IApiCompanyAdditional } from './types/company-interfaces';

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
  getAdditionalAsync = async (id: number): Promise<IApiBaseResponse<IApiCompanyAdditional>> =>
    await restApi.getAsync(`${this.controller}/${id}/additional`);
  getTransactionsSummary = async (accountId: number, companyId: number): Promise<IApiBaseResponse<IApiComanyTransactionsSummary>> =>
    await restApi.getAsync(`${this.controller}/${companyId}/transactions/${accountId}/summary`);
}
