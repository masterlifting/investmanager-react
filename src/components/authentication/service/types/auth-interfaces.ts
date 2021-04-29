/** @format */
//API
export interface IApiLogin {
  email: string;
  password: string;
}
export interface IApiRegister {
  email: string;
  password: string;
  passwordConfirm: string;
}
//APP
export interface IAuthResult {
  token: string;
  expiry: Date;
}
export interface ITokenResult {
  isSuccess: boolean;
  userName: string;
}
export interface IUser {
  email: string;
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
