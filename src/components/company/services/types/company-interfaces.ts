/** @format */

//#region API
export interface IApiCompany {
  id: number;
  name: string;
  description?: string;
  dateSplit?: Date;
  industryId: number;
  sectorId: number;
}
export interface IApiBaseBrokerReportModel {
  currencyId: number;
  accountId: number;
  dateOperation: Date;
}
export interface IApiCompanyAdditional {
  sector: string;
  industry: string;
  currency: string;
}
export interface IApiSellRecommendation {
  dateUpdate: Date;
  lotMin: number;
  lotMid: number;
  lotMax: number;
  priceMin: number;
  priceMid: number;
  priceMax: number;
}
//#region Transactions
export interface IApiComanyTransactionsSummary {
  date: Date;
  cost: number;
  quantity: number;
  status: string;
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
interface ICompanyTransactions {
  summary: IApiComanyTransactionsSummary;
  items?: IApiCompanyTransaction[];
}
export interface ICompany extends IApiCompany {
  selected: boolean;
  visibled: boolean;

  additional?: IApiCompanyAdditional;
  transactions?: ICompanyTransactions;
  sellRecommendation?: IApiSellRecommendation;
}
export interface ICompanyMenu {
  id: number;
  name: string;
  selected: boolean;
  visibled: boolean;
  MenuComponent: React.FC<ICompany>;
}
//#endregion
