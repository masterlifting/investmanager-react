/** @format */

import { ICompany, ICompanyMenu } from './company-interfaces';

export type CompanyProps = {
  company: ICompany;
  isSelectable: boolean;
};
export type CompanyMenuItemProps = {
  menuItem: ICompanyMenu;
  company: ICompany;
};
