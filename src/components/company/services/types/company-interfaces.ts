/** @format */

import { IApiEntity, IApiShortModel } from '../../../../api/api-interfaces';
import { IAppShortModel, IMutableEntity } from '../../../../common/types/common-interfaces';

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

export interface ICompany extends IAppShortModel, IMutableEntity {
  selected: boolean;
  visibled: boolean;
}
export interface ICompanyMenu {
  id: number;
  name: string;
  selected: boolean;
  visibled: boolean;
}
