/** @format */

import { restApi } from "../../../api/api-configuration";
import { IApiPagination, IResponseAPI } from "../../../api/api-interfaces";
import { IApiAccount, IApiAccountAdditional } from "./types/account-interfaces";

export class AccountAPI {
  private controller: string = 'accounts';
  getByPaginationAsync = async (page: number, limit: number, phrase: string | null): Promise<IResponseAPI<IApiPagination<IApiAccount>>> => {
    let queryString = `${this.controller}/react?page=${page}&limit=${limit}`;
    if (phrase !== null) {
      queryString += `&phrase=${phrase}`;
    }
    return await restApi.getAsync(queryString);
  };
  getAccountAsync = async (id: number): Promise<IResponseAPI<IApiAccount>> => await restApi.getAsync(`${this.controller}/${id}`);
  getAccountSumAsync = async (id: number): Promise<IResponseAPI<number>> => await restApi.getAsync(`${this.controller}/${id}/summary`);
  getAdditionalAsync = async (id: number): Promise<IResponseAPI<IApiAccountAdditional[]>> =>
    await restApi.getAsync(`${this.controller}/${id}/additional`);
  addNewAsync = async (model: IApiAccount): Promise<IResponseAPI<IApiAccount>> => await restApi.postAsync(this.controller, model);
}
