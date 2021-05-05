/** @format */

import { IApiShortModel } from '../../../../api/api-interfaces';
import { IAppShortModel, IMutableEntity } from '../../../../common/service/types/common-interfaces';

/** @format */
export interface IApiAccount extends IApiShortModel {
  sum: number;
}
export interface IApiAccountAdditional {
  currency: string;
  freeSum: number;
  investedSum: number;
  dividendSum?: number;
}

export interface IAccount extends IAppShortModel, IMutableEntity {
  selected: boolean;
  sum: number;
}
