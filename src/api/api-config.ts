/** @format */

import axios, { AxiosResponse } from 'axios';
import { IApiEntity } from './api-types';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export interface IBaseResponseAPI {
  isSuccess: boolean;
  info?: string;
}
export interface IResponseAPI<T extends IApiEntity> extends IBaseResponseAPI {
  data?: T;
}
export interface IEditableResponseAPI extends IBaseResponseAPI {
  resultId: number;
}

export interface IEditAPI<T extends IApiEntity> {
  createAsync: () => Promise<IEditableResponseAPI>;
  updateAsync: (id: number, model: T) => Promise<IEditableResponseAPI>;
  deleteAsync: (id: number) => Promise<IEditableResponseAPI>;
}
export interface IGetAPI<T extends IApiEntity> {
  getByIdAsync: (id: number) => Promise<IResponseAPI<T>>;
  getAllAsync: () => Promise<IResponseAPI<T[]>>;
}

export const baseGetResult = <R extends IApiEntity>(response: AxiosResponse<R>): IResponseAPI<R> => {
  const result: IResponseAPI<R> = { isSuccess: false };
  if (response.status === 200) {
    result.isSuccess = true;
    result.data = response.data;
  }
  return result;
};
export class GetAPI<T extends IApiEntity> implements IGetAPI<T> {
  controllerURL: string;
  constructor(controllerURL: string) {
    this.controllerURL = controllerURL;
  }

  getByIdAsync = async (id: number): Promise<IResponseAPI<T>> => baseGetResult(await instance.get<T>(`${this.controllerURL}/${id}`));
  getAllAsync = async (): Promise<IResponseAPI<T[]>> => baseGetResult(await instance.get<T[]>(this.controllerURL));
}
export class EditAPI<T extends IApiEntity> implements IEditAPI<T> {
  controllerURL: string;
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
