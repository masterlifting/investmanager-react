/** @format */

import { IApiShortModel } from '../../../api/api-interfaces';
import { IAppShortModel, IMutableEntity } from '../../../common/types/common-interfaces';

/** @format */
export interface IApiAccount extends IApiShortModel {}
export interface IAccount extends IAppShortModel, IMutableEntity {
  selected: boolean;
  sum: number;
}
