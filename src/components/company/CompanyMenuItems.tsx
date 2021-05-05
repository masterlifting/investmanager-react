/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyAdditionalInfo as fetchCompanyAdditional, fetchCompanyTransactionsSummary } from './services/store/company-thunks';
import { useEffect } from 'react';
import { ICompany } from './services/types/company-interfaces';
import { setViewValue } from '../../common/service/view-service';
import { getSelectedAccounts, getAccounts } from '../account/services/store/account-selectors';

export const CompanyAdditionalInfo: React.FC<ICompany> = company => {
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanyAdditional(company.id));
  }, [dispatch, company.id]);

  return (
    <div className='row'>
      <div className='col'>
        <div className='row'>{setViewValue(company.additional?.industryName)}</div>
        <div className='row'>{setViewValue(company.additional?.sectorName)}</div>
      </div>
    </div>
  );
};
export const CompanyTransaction: React.FC<ICompany> = company => {
  var dispatch = useDispatch();
  var accounts = useSelector(getAccounts);

  useEffect(() => {
    dispatch(fetchCompanyTransactionsSummary(company.id, accounts));
  }, [dispatch, company.id, accounts]);

  return (
    <div className='row'>
      <div className='col'>
        <div className='row'>{setViewValue(company.transactions?.summary.actualLot)}</div>
        <div className='row'>{setViewValue(company.transactions?.summary.cost)}</div>
        <div className='row'>{setViewValue(company.transactions?.summary.currentProfit)}</div>
        <div className='row'>{setViewValue(company.transactions?.summary.dateTransaction)}</div>
        <div className='row'>{setViewValue(company.transactions?.summary.quantity)}</div>
        <div className='row'>{setViewValue(company.transactions?.summary.statusName)}</div>
      </div>
    </div>
  );
};
export const CompanyRating: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
export const CompanyRecommendationToSell: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
export const CompanyRecommendationToBuy: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
export const CompanyIndexes: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
export const CompanyReports: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
export const CompanyPrices: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
export const CompanyDividends: React.FC<ICompany> = company => {
  return <div>transactions</div>;
};
