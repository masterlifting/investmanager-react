/** @format */

import { apiWithCred } from "../../api/api-configuration";
import { IResponseAPI } from "../../api/api-interfaces";
import { IApiAccount, IApiAccountAdditional } from "./services/types/account-interfaces";

export class AccountAPI {
  private controller: string = 'accounts';
  getAccountsAsync = async (): Promise<IResponseAPI<IApiAccount[]>> => await apiWithCred.getAsync(this.controller);
  getAccountAsync = async (id: number): Promise<IResponseAPI<IApiAccount>> => await apiWithCred.getAsync(`${this.controller}/${id}`);
  getAccountSumAsync = async (id: number): Promise<IResponseAPI<number>> => await apiWithCred.getAsync(`${this.controller}/${id}/summary/`);
  getAdditionalAsync = async (id: number): Promise<IResponseAPI<IApiAccountAdditional[]>> =>
    await apiWithCred.getAsync(`${this.controller}/${id}/additional/`);
  addNewAsync = async (model: IApiAccount): Promise<IResponseAPI<IApiAccount>> => await apiWithCred.postAsync(this.controller, model);
}
