/** @format */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IApiLogin, IApiRegister, IAuthResult } from '../components/authentication/service/types/auth-interfaces';
import { IApiEntity, IBaseResponseAPI, IEditableResponseAPI, IResponseAPI } from './api-interfaces';
const serverUrl = 'https://localhost:44379/';

export const instance = axios.create({
  baseURL: serverUrl,
});
export const instanceWithCredentials = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

const getEditableResult = (response: AxiosResponse<IEditableResponseAPI>): IEditableResponseAPI => ({
  isSuccess: response.status === 200,
  info: response.data.info,
  resultId: response.data.resultId,
});

export class AxiosAuthHeader {
  private key = 'jwttoken';
  private authHeader = 'Authorisation';

  setAuthHeader = (token: string) => {
    localStorage.setItem(this.key, token);
    axios.defaults.headers[this.authHeader] = token;
  };
  removeToken = () => {
    localStorage.removeItem(this.key);
    delete axios.defaults.headers[this.authHeader];
  };
}
class RestApi {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
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
    getEditableResult(await this.axiosInstance.post<IEditableResponseAPI>(route, model));
  putAsync = async <T extends IApiEntity>(route: string, id: number, model: T): Promise<IEditableResponseAPI> =>
    getEditableResult(await this.axiosInstance.put<IEditableResponseAPI>(`${route}/${id}`, model));
  deleteAsync = async (route: string, id: number): Promise<IEditableResponseAPI> =>
    getEditableResult(await this.axiosInstance.delete<IEditableResponseAPI>(`${route}/${id}`));
}
class AuthApi {
  loginAsync = async (route: string, model: IApiLogin): Promise<IAuthResult> => {
    const response = await instance.post<IApiLogin, AxiosResponse<IAuthResult>>(route, model);
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
  registerAsync = async (route: string, model: IApiRegister): Promise<IBaseResponseAPI> => {
    const response = await instance.post<IApiRegister, AxiosResponse<IBaseResponseAPI>>(route, model);
    const result: IBaseResponseAPI = { isSuccess: false };
    if (response.status === 200) {
      result.isSuccess = true;
    }
    return result;
  };
}
export const authApi = new AuthApi();
export const apiWithoutCred = new RestApi(instance);
export const apiWithCred = new RestApi(instanceWithCredentials);
