/** @format */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IApiLogin, IApiRegister, IAuthResult, IApiAuth, IToken } from '../components/authentication/service/types/auth-interfaces';
import { IApiBaseResponse } from './api-interfaces';

const serverUrl = 'https://paviams.com/';

const instance = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

class RestApi {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
  private getResult = <T>(response: AxiosResponse<IApiBaseResponse<T>>): IApiBaseResponse<T> => {
    const result: IApiBaseResponse<T> = { isSuccess: false, data: null, errors: null };
    if (response.status === 200) {
      if (response.data.isSuccess) {
        result.isSuccess = true;
        result.data = response.data.data;
      } else {
        result.errors = response.data.errors;
      }
    } else {
      result.errors = [response.statusText];
    }

    return result;
  };
  getAsync = async <T>(route: string): Promise<IApiBaseResponse<T>> => this.getResult(await this.axiosInstance.get<IApiBaseResponse<T>>(route));
  postAsync = async <T>(route: string, model: T): Promise<IApiBaseResponse<T>> =>
    this.getResult(await this.axiosInstance.post<IApiBaseResponse<T>>(route, model));
  putAsync = async <T>(route: string, id: number, model: T): Promise<IApiBaseResponse<T>> =>
    this.getResult(await this.axiosInstance.put<IApiBaseResponse<T>>(`${route}/${id}`, model));
  deleteAsync = async <T>(route: string, id: number): Promise<IApiBaseResponse<T>> =>
    this.getResult(await this.axiosInstance.delete<IApiBaseResponse<T>>(`${route}/${id}`));
}
class AuthApi {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
  private key = 'jwttoken';
  private authHeader = 'Authorization';

  private getBaseAuthAsync = async <T extends IApiAuth>(route: string, model: T): Promise<IAuthResult> => {
    const response = await this.axiosInstance.post<T, AxiosResponse<IAuthResult>>(route, model);
    const result: IAuthResult = { isSuccess: false, token: '' };

    if (response.status === 200) {
      if (response.data.isSuccess) {
        result.isSuccess = true;
        result.token = response.data.token;
        result.expiry = response.data.expiry;
      } else {
        result.info = response.data.info;
      }
    }

    return result;
  };
  loginAsync = async (route: string, model: IApiLogin): Promise<IAuthResult> => this.getBaseAuthAsync(route, model);
  registerAsync = async (route: string, model: IApiRegister): Promise<IAuthResult> => this.getBaseAuthAsync(route, model);
  setToken = (data: IToken) => {
    localStorage.setItem(this.key, JSON.stringify(data));
    this.axiosInstance.defaults.headers.common[this.authHeader] = data.token;
  };
  getToken = (): IToken | undefined => {
    const token = localStorage.getItem(this.key);

    if (token !== null) {
      const result: IToken = JSON.parse(token);
      return result;
    }

    return undefined;
  };
  removeToken = () => {
    localStorage.removeItem(this.key);
    delete this.axiosInstance.defaults.headers.common[this.authHeader];
  };
}

export const authApi = new AuthApi(instance);
export const restApi = new RestApi(instance);
