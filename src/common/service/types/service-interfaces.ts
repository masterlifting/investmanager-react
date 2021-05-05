/** @format */

interface IValuteValue {
  value: number;
}
interface IUSD extends IValuteValue {}
interface IEUR extends IValuteValue {}
interface IValute {
  usd: IUSD;
  eur: IEUR;
}
export interface IRate {
  valute: IValute;
  date: Date;
}

export interface IServiceState {
  rate: IRate;
}
