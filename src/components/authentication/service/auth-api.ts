/** @format */

import { apiWithoutCred } from '../../../api/api-configuration';
import { IResponseAPI } from '../../../api/api-interfaces';
import { IApiLogin, IAuthResult, IApiRegister } from './types/auth-interfaces';

export class AuthAPI {
  private controller: string = 'security';
  loginAsync = async (model: IApiLogin): Promise<IResponseAPI<IAuthResult>> => await apiWithoutCred.postAsync(this.controller, model);
  registerAsync = async (model: IApiRegister): Promise<IResponseAPI<{}>> => await apiWithoutCred.postAsync(this.controller, model);
}
