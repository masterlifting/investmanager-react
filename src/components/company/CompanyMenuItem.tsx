/** @format */

import { CompanyMenuItemProps } from './types/company-types';

export const CompanyMenuItem: React.FC<CompanyMenuItemProps> = props => {
  return <div className='col text-success'>{props.company.name}</div>;
};
