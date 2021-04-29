/** @format */

import { IApiEntity, IApiShortModel } from '../../../../api/api-interfaces';
import { IAppShortModel, IMutableEntity } from '../../../../common/types/common-interfaces';
import { CompanyMenuItemProps } from './company-types';
//API
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
//APP
export interface IAppCompanyAdditional extends IApiCompanyAdditional {}
export interface ICompany extends IAppShortModel, IMutableEntity {
  selected: boolean;
  visibled: boolean;
  additionalInfo?: IAppCompanyAdditional;
}
export interface ICompanyMenu {
  id: number;
  name: string;
  selected: boolean;
  visibled: boolean;
  MenuComponent: React.FC<CompanyMenuItemProps>;
}
