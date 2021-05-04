/** @format */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IApiLogin, IApiRegister, IAuthResult, IApiAuth } from '../components/authentication/service/types/auth-interfaces';
import { IApiEntity, IEditableResponseAPI, IResponseAPI } from './api-interfaces';

const serverUrl = 'https://localhost:44379/';

const instance = axios.create({
  baseURL: serverUrl,
});
const instanceWithCredentials = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

class RestApi {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
  private getEditableResult = (response: AxiosResponse<IEditableResponseAPI>): IEditableResponseAPI => ({
    isSuccess: response.status === 200,
    info: response.data.info,
    resultId: response.data.resultId,
  });
  getAsync = async <T extends IApiEntity>(route: string): Promise<IResponseAPI<T>> => {
    const response = await this.axiosInstance.get<T>(route);
    const result: IResponseAPI<T> = { isSuccess: false };
    if (response.status === 200) {
      result.isSuccess = true;
      result.data = response.data;
    }
    return result;
  };
  postAsync = async <TModel extends IApiEntity>(route: string, model: TModel): Promise<IEditableResponseAPI> =>
    this.getEditableResult(await this.axiosInstance.post<IEditableResponseAPI>(route, model));
  putAsync = async <T extends IApiEntity>(route: string, id: number, model: T): Promise<IEditableResponseAPI> =>
    this.getEditableResult(await this.axiosInstance.put<IEditableResponseAPI>(`${route}/${id}`, model));
  deleteAsync = async (route: string, id: number): Promise<IEditableResponseAPI> =>
    this.getEditableResult(await this.axiosInstance.delete<IEditableResponseAPI>(`${route}/${id}`));
}
class AuthApi {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
  private key = 'jwttoken';
  private authHeader = 'Authorisation';

  private getBaseAuthAsync = async <T extends IApiAuth>(route: string, model: T): Promise<IAuthResult> => {
    const response = await this.axiosInstance.post<T, AxiosResponse<IAuthResult>>(route, model);
    const result: IAuthResult = { isSuccess: false };

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
  setAuthHeader = (token: string) => {
    localStorage.setItem(this.key, token);
    axios.defaults.headers[this.authHeader] = token;
  };
  removeToken = () => {
    localStorage.removeItem(this.key);
    delete axios.defaults.headers[this.authHeader];
  };
}

export const authApi = new AuthApi(instance);
export const apiWithoutCred = new RestApi(instance);
export const apiWithCred = new RestApi(instanceWithCredentials);