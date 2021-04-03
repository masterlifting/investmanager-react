import {
  IApiShortModel,
  IApiBaseBrokerReportModel,
  IApiEntity,
} from "./api-base-types";

export interface IApiAccount extends IApiShortModel {}
export interface IApiCompany extends IApiShortModel {
  dateSplit?: Date;
  industryId: number;
  sectorId: number;
}
export interface IApiIsin extends IApiShortModel {
  companyId: number;
}
export interface IApiTicker extends IApiShortModel {
  companyId: number;
  exchangeId: number;
  lotId: number;
}

export interface IApiAccountTransaction extends IApiBaseBrokerReportModel {
  statusId: number;
  ammount: number;
  statusName: string;
  accountName: string;
  currencyName: string;
}
export interface IApiComission extends IApiBaseBrokerReportModel {
  typeId: number;
  typeName: string;
  ammount: number;
}
export interface IApiDividend extends IApiBaseBrokerReportModel {
  isinId: number;
  ammount: number;
  tax: number;
}
export interface IApiExchangeRate extends IApiBaseBrokerReportModel {
  identifier: number;
  quantity: number;
  rate: number;
  statusId: number;
  statusName: string;
}
export interface IApiStockTransaction extends IApiBaseBrokerReportModel {
  identifier: number;
  cost: number;
  quantity: number;
  tickerId: number;
  statusId: number;
  statusName: string;
  exchangeId: number;
}

export interface IApiBuyRecommendation extends IApiEntity {
  dateUpdate: Date;
  price: number;
}
export interface IApiCoefficient extends IApiEntity {
  Year: number;
  Quarter: number;
  PE: number;
  PB: number;
  DebtLoad: number;
  Profitability: number;
  ROA: number;
  ROE: number;
  EPS: number;
}
export interface IApiComissionType extends IApiEntity {
  name: string;
}
export interface IApiPrice extends IApiEntity {
  bidDate: Date;
  dateUpdate: Date;
  value: number;
  currencyId: number;
  tickerId: number;
}
export interface IApiRating extends IApiEntity {
  priceComparisonValue?: number;
  reportComparisonValue?: number;
  cashFlowPositiveBalanceValue?: number;
  coefficientComparisonValue?: number;
  coefficientAverageValue?: number;
}
export interface IApiReport extends IApiEntity {
  id: number;
  companyId: number;
  isChecked: boolean;
  quarter: number;

  dateReport: Date;
  stockVolume: number;
  revenue: number;
  netProfit: number;
  grossProfit: number;
  cashFlow: number;
  assets: number;
  turnover: number;
  shareCapital: number;
  dividend: number;
  obligation: number;
  longTermDebt: number;
}
export interface IApiReportSource extends IApiEntity {
  id: number;
  companyId: number;
  key: string;
  value: string;
}
export interface IApiSellRecommendation extends IApiEntity {
  dateUpdate: Date;
  lotMin: number;
  lotMid: number;
  lotMax: number;
  priceMin: number;
  priceMid: number;
  priceMax: number;
}