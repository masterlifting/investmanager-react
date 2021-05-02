/** @format */

import { authApi } from '../../../api/api-configuration';
import { IBaseResponseAPI } from '../../../api/api-interfaces';
import { IApiLogin, IAuthResult, IApiRegister } from './types/auth-interfaces';

export class AuthAPI {
  private controller: string = 'security';
  loginAsync = async (model: IApiLogin): Promise<IAuthResult> => await authApi.loginAsync(this.controller + '/login', model);
  registerAsync = async (model: IApiRegister): Promise<IBaseResponseAPI> => await authApi.registerAsync(this.controller + '/register', model);
}
