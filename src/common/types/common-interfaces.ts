/** @format */

export interface IAppEntity {}
export interface IPagination {
  total: number; // всего записей в БД
  limit: number; // колличесто элементов в одной порции
  page: number; // порядковый номер порции
  pagePortionSize: number; // размер порции полученных страниц
}
export interface IFilter {
  phrase: string | null;
}
export interface ICollectionBehavior<T extends IAppEntity> {
  items: T[];
  pagination: IPagination;
  filter: IFilter;
}
export interface IMutableEntity extends IAppEntity {
  id: number;
}
export interface IAppShortModel extends IAppEntity {
  name: string;
  description?: string;
}
export interface IAppBaseBrokerReportModel extends IAppEntity {
  currencyId: number;
  accountId: number;
  dateOperation: Date;
}
