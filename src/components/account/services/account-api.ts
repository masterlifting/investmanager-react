/** @format */

import { restApi } from "../../../api/api-configuration";
import { IApiBaseResponse, IApiPagination } from "../../../api/api-interfaces";
import { IApiAccount } from "./types/account-interfaces";

export class AccountAPI {
  private controller: string = 'account';
  getAccountsAsync = async (page: number, limit: number, phrase: string | null): Promise<IApiBaseResponse<IApiPagination<IApiAccount>>> => {
    let queryString = `${this.controller}?page=${page}&limit=${limit}`;
    if (phrase !== null) {
      queryString += `&phrase=${phrase}`;
    }
    return await restApi.getAsync(queryString);
  };
}
