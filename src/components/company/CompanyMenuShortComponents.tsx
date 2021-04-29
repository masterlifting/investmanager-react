/** @format */

import { CompanyMenuItemProps } from './services/types/company-types';
import { useDispatch } from 'react-redux';
import { fetchCompanyAdditionalInfo } from './services/store/company-thunks';
import { useEffect } from 'react';

export const CompanyAdditionalInfo: React.FC<CompanyMenuItemProps> = props => {
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanyAdditionalInfo(props.company.id));
  }, [dispatch, props.company.id]);

  return (
    <div className='row'>
      <div className='col'>
        <div className='row'>{props.company.additionalInfo?.industryName}</div>
        <div className='row'>{props.company.additionalInfo?.sectorName}</div>
      </div>
    </div>
  );
};
export const CompanyTransaction: React.FC<CompanyMenuItemProps> = props => {
  return <div>transactions</div>;
};
