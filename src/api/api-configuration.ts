/** @format */

import axios, { AxiosResponse } from 'axios';
import { IApiEntity, IEditableResponseAPI, IEditAPI, IGetAPI, IResponseAPI } from './api-interfaces';

export const instance = axios.create({
  baseURL: 'https://localhost:44379/',
});

export const baseGetAsync = async <T extends IApiEntity>(route: string): Promise<IResponseAPI<T>> => {
  const response = await instance.get<T>(route);
  const result: IResponseAPI<T> = { isSuccess: false };
  if (response.status === 200) {
    result.isSuccess = true;
    result.data = response.data;
  }
  return result;
};
export class GetAPI<T extends IApiEntity> implements IGetAPI<T> {
  private controllerURL: string;
  constructor(controllerURL: string) {
    this.controllerURL = controllerURL;
  }

  getByIdAsync = async (id: number): Promise<IResponseAPI<T>> => await baseGetAsync(`${this.controllerURL}/${id}`);
  getAllAsync = async (): Promise<IResponseAPI<T[]>> => await baseGetAsync(this.controllerURL);
}
export class EditAPI<T extends IApiEntity> implements IEditAPI<T> {
  private controllerURL: string;
  constructor(controllerURL: string) {
    this.controllerURL = controllerURL;
  }
  createAsync = async (): Promise<IEditableResponseAPI> => this.baseEditResult(await instance.post<IEditableResponseAPI>(this.controllerURL));
  updateAsync = async (id: number, model: T): Promise<IEditableResponseAPI> =>
    this.baseEditResult(await instance.put<IEditableResponseAPI>(`${this.controllerURL}/${id}`, model));
  deleteAsync = async (id: number): Promise<IEditableResponseAPI> => this.baseEditResult(await instance.delete<IEditableResponseAPI>(`${this.controllerURL}/${id}`));

  private baseEditResult = (response: AxiosResponse<IEditableResponseAPI>): IEditableResponseAPI => ({
    isSuccess: response.status === 200,
    info: response.data.info,
    resultId: response.data.resultId,
  });
}
