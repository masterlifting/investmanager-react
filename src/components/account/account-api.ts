/** @format */

import { ApiCrud } from "../../api/api-configuration";
import { IResponseAPI } from "../../api/api-interfaces";
import { IApiAccount, IApiAccountAdditional } from "./services/types/account-interfaces";

export class AccountAPI {
  private controller: string = 'accounts';
  getAccountsAsync = async (): Promise<IResponseAPI<IApiAccount[]>> => await ApiCrud.getAsync(this.controller);
  getAccountAsync = async (id: number): Promise<IResponseAPI<IApiAccount>> => await ApiCrud.getAsync(`${this.controller}/${id}`);
  getAccountSumAsync = async (id: number): Promise<IResponseAPI<number>> => await ApiCrud.getAsync(`${this.controller}/${id}/summary/`);
  getAdditionalAsync = async (id: number): Promise<IResponseAPI<IApiAccountAdditional[]>> =>
    await ApiCrud.getAsync(`${this.controller}/${id}/additional/`);
  addNewAsync = async (model: IApiAccount): Promise<IResponseAPI<IApiAccount>> => await ApiCrud.createAsync(this.controller, model);
}
