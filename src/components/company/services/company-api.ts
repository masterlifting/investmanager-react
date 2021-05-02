/** @format */

import { apiWithCred, apiWithoutCred } from '../../../api/api-configuration';
import { IApiShortModel, IResponseAPI, IApiPagination } from '../../../api/api-interfaces';
import { IApiCompany, IApiCompanyAdditional } from './types/company-interfaces';

export class CompanyAPI {
  private controller: string = 'companies';
  getCompaniesShortAsync = async (): Promise<IResponseAPI<IApiShortModel[]>> => await apiWithoutCred.getAsync(this.controller);
  getCompanyAsync = async (id: number): Promise<IResponseAPI<IApiCompany>> => await apiWithoutCred.getAsync(`${this.controller}/${id}`);
  getAdditionalAsync = async (id: number): Promise<IResponseAPI<IApiCompanyAdditional>> =>
    await apiWithoutCred.getAsync(`${this.controller}/${id}/additional`);
  getByPaginationAsync = async (page: number, limit: number, phrase: string | null): Promise<IResponseAPI<IApiPagination<IApiCompany>>> => {
    let queryString = `${this.controller}/react?page=${page}&limit=${limit}`;
    if (phrase !== null) {
      queryString += `&phrase=${phrase}`;
    }
    return await apiWithoutCred.getAsync(queryString);
  };
  addNewAsync = async (model: IApiCompany): Promise<IResponseAPI<IApiCompany>> => await apiWithCred.postAsync(this.controller, model);
  editAsync = async (id: number, model: IApiCompany): Promise<IResponseAPI<IApiCompany>> => await apiWithCred.putAsync(this.controller, id, model);
}
