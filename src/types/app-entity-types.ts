/** @format */

export interface IAppEntity {}
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

export interface ICompany extends IAppShortModel, IMutableEntity {
  selected: boolean;
}
export interface IAccount extends IAppShortModel, IMutableEntity {
  selected: boolean;
  sum: number;
}
