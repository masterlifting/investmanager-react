/** @format */

import { restApi } from '../../../api/api-configuration';
import { IApiShortModel, IResponseAPI, IApiPagination } from '../../../api/api-interfaces';
import { IApiComanyTransactionsSummary, IApiCompany, IApiCompanyAdditional } from './types/company-interfaces';

export class CompanyAPI {
  private controller = 'companies';

  getCompaniesShortAsync = async (): Promise<IResponseAPI<IApiShortModel[]>> => await restApi.getAsync(this.controller);
  getAdditionalAsync = async (id: number): Promise<IResponseAPI<IApiCompanyAdditional>> =>
    await restApi.getAsync(`${this.controller}/${id}/additional`);

  getCompanyAsync = async (id: number): Promise<IResponseAPI<IApiCompany>> => await restApi.getAsync(`${this.controller}/${id}`);
  getCompaniesAsync = async (page: number, limit: number, phrase: string | null): Promise<IResponseAPI<IApiPagination<IApiCompany>>> => {
    let queryString = `${this.controller}/react?page=${page}&limit=${limit}`;
    if (phrase !== null) {
      queryString += `&phrase=${phrase}`;
    }
    return await restApi.getAsync(queryString);
  };
  addCompanyAsync = async (model: IApiCompany): Promise<IResponseAPI<IApiCompany>> => await restApi.postAsync(this.controller, model);
  editCompanyAsync = async (id: number, model: IApiCompany): Promise<IResponseAPI<IApiCompany>> => await restApi.putAsync(this.controller, id, model);
}
export class CompanyTransationsAPI {
  private controller = 'stocktransactions';

  getSummary = async (accountId: number, companyId: number): Promise<IResponseAPI<IApiComanyTransactionsSummary>> =>
    await restApi.getAsync(`${this.controller}/react/summary?accountId=${accountId}&companyId=${companyId}`);
}
