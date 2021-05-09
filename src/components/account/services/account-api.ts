/** @format */

import { restApi } from '../../../api/api-configuration';
import { IApiBaseResponse, IApiPagination } from '../../../api/api-interfaces';
import { IApiAccount } from './types/account-interfaces';

export class AccountAPI {
  private controller: string = 'account';
  getAccountsAsync = async (page: number, limit: number): Promise<IApiBaseResponse<IApiPagination<IApiAccount>>> =>
    await restApi.getAsync(`${this.controller}?page=${page}&limit=${limit}`);
}
