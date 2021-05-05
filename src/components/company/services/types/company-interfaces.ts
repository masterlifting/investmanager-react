/** @format */

import { IApiBaseBrokerReportModel, IApiEntity, IApiShortModel } from '../../../../api/api-interfaces';
import { IAppShortModel, IMutableEntity } from '../../../../common/service/types/common-interfaces';

//#region API
export interface IApiCompany extends IApiShortModel {
  dateSplit?: Date;
  industryId: number;
  sectorId: number;
}
export interface IApiCompanyAdditional extends IApiEntity {
  sectorName: string;
  industryName: string;
  currency: string;
}
//#region Transactions
export interface IApiComanyTransactionsSummary {
  dateTransaction: Date;
  cost: number;
  quantity: number;
  statusName: string;
  actualLot: number;
  currentProfit: number;
}
interface IApiCompanyTransaction extends IApiBaseBrokerReportModel {
  identifier: number;
  cost: number;
  quantity: number;
  tickerId: number;
  statusId: number;
  statusName: string;
  exchangeId: number;
}
//#endregion
//#endregion
//#region APP
interface IAppCompanyTransactions {
  summary: IApiComanyTransactionsSummary;
  transactions?: IApiCompanyTransaction[];
}
export interface ICompany extends IAppShortModel, IMutableEntity {
  selected: boolean;
  visibled: boolean;
  additional?: IApiCompanyAdditional;
  transactions?: IAppCompanyTransactions;
}
export interface ICompanyMenu {
  id: number;
  name: string;
  selected: boolean;
  visibled: boolean;
  MenuComponent: React.FC<ICompany>;
}
//#endregion
