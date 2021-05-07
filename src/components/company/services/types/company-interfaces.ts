/** @format */

//#region API
interface IApiBaseBrokerReportModel {
  currencyId: number;
  accountId: number;
  dateOperation: Date;
}
export interface IApiCompany {
  id: number;
  name: string;
  description?: string;
  dateSplit?: Date;
  industryId: number;
  sectorId: number;
}
export interface IApiCompanySummary {
  sector: string;
  industry: string;
  currency: string;
  actualLot: number;
  currentProfit: number;
  dividendSum: number;
  ratingPlace: string;
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
export interface IApiCompanyTransaction extends IApiBaseBrokerReportModel {
  identifier: number;
  cost: number;
  quantity: number;
  tickerId: number;
  statusId: number;
  status: string;
  exchangeId: number;
}
//#endregion
//#region APP

export interface ICompany extends IApiCompany {
  selected: boolean;
  visibled: boolean;

  summary?: IApiCompanySummary;
  transactions?: IApiCompanyTransaction[];
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
