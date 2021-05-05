/** @format */

import { IBaseResponseAPI } from '../../../../api/api-interfaces';

//API
export interface IApiAuth {
  email: string;
  password: string;
}
export interface IToken {
  token: string;
  expiry?: Date;
}
export interface IApiLogin extends IApiAuth {}
export interface IApiRegister extends IApiAuth {
  passwordConfirm: string;
}
//APP
export interface IAuthResult extends IBaseResponseAPI, IToken {
}
export interface ITokenResult {
  isSuccess: boolean;
  user?: IUser;
}
export interface IUser {
  name: string;
  isAdmin: boolean;
  isAuth: boolean;
}
export interface ILogin extends IApiLogin {
  withError: boolean;
  error: string;
}
export interface IRegister extends IApiRegister {
  withError: boolean;
  errors: string[];
}
export interface IAuth {
  user: IUser;
  apiErrors: string[];
}
