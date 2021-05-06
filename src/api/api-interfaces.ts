/** @format */

export interface IApiBaseResponse<T> {
  isSuccess: boolean;
  data: T | null;
  errors: string[] | null;
}
export interface IApiPagination<T> {
  items: T[];
  totalCount: number;
}
export interface IApiShortModel {
  id: number;
  name: string;
  description?: string;
}
