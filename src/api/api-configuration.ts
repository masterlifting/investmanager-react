/** @format */

import axios, { AxiosResponse } from 'axios';
import { IApiEntity, IEditableResponseAPI, IResponseAPI } from './api-interfaces';

export const instance = axios.create({
  baseURL: 'https://localhost:44379/',
});

const baseEditResult = (response: AxiosResponse<IEditableResponseAPI>): IEditableResponseAPI => ({
  isSuccess: response.status === 200,
  info: response.data.info,
  resultId: response.data.resultId,
});

export const ApiCrud = {
  getAsync: async <T extends IApiEntity>(route: string): Promise<IResponseAPI<T>> => {
    const response = await instance.get<T>(route);
    const result: IResponseAPI<T> = { isSuccess: false };
    if (response.status === 200) {
      result.isSuccess = true;
      result.data = response.data;
    }
    return result;
  },
  createAsync: async <T extends IApiEntity>(route: string, model: T): Promise<IEditableResponseAPI> =>
    baseEditResult(await instance.post<IEditableResponseAPI>(route, model)),
  updateAsync: async <T extends IApiEntity>(route: string, id: number, model: T): Promise<IEditableResponseAPI> =>
    baseEditResult(await instance.put<IEditableResponseAPI>(`${route}/${id}`, model)),
  deleteAsync: async (route: string, id: number): Promise<IEditableResponseAPI> =>
    baseEditResult(await instance.delete<IEditableResponseAPI>(`${route}/${id}`))
};
