/** @format */

import { ApiCrud } from '../../../api/api-configuration';
import { IApiShortModel, IResponseAPI, IApiPagination } from '../../../api/api-interfaces';
import { IApiCompany, IApiCompanyAdditional } from './types/company-interfaces';

export class CompanyAPI {
  private controller: string = 'companies';
  getCompaniesShortAsync = async (): Promise<IResponseAPI<IApiShortModel[]>> => await ApiCrud.getAsync(this.controller);
  getCompanyAsync = async (id: number): Promise<IResponseAPI<IApiCompany>> => await ApiCrud.getAsync(`${this.controller}/${id}`);
  getAdditionalAsync = async (id: number): Promise<IResponseAPI<IApiCompanyAdditional[]>> =>
    await ApiCrud.getAsync(`${this.controller}/${id}/additional/`);
  getByPaginationAsync = async (page: number, limit: number, phrase: string | null): Promise<IResponseAPI<IApiPagination<IApiCompany>>> => {
    let queryString = `${this.controller}/react?page=${page}&limit=${limit}`;
    if (phrase !== null) {
      queryString += `&phrase=${phrase}`;
    }
    return await ApiCrud.getAsync(queryString);
  };
  addNewAsync = async (model: IApiCompany): Promise<IResponseAPI<IApiCompany>> => await ApiCrud.createAsync(this.controller, model);
  editAsync = async (id: number, model: IApiCompany): Promise<IResponseAPI<IApiCompany>> => await ApiCrud.updateAsync(this.controller, id, model);
}
