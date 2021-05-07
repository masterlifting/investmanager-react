/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyTransactions, fetchCompanySummary } from './services/store/company-thunks';
import { useEffect } from 'react';
import { ICompany } from './services/types/company-interfaces';
import { setViewValue } from '../../common/service/view-service';
import { getAccounts } from '../account/services/store/account-selectors';

export const CompanySummary: React.FC<ICompany> = company => {
  const dispatch = useDispatch();
  const accounts = useSelector(getAccounts);
  useEffect(() => {
    dispatch(fetchCompanySummary(company.id, accounts));
  }, [dispatch, company.id, accounts]);

  return (
    <>
      <div className='row'>
        <div className='col-4'>Валюта:</div>
        <div className='col-8'>{setViewValue(company.summary?.currency)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Индустрия:</div>
        <div className='col-8'>{setViewValue(company.summary?.industry)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Сектор:</div>
        <div className='col-8'>{setViewValue(company.summary?.sector)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>В портфеле:</div>
        <div className='col-8'>{setViewValue(company.summary?.actualLot)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Профит:</div>
        <div className='col-8'>{setViewValue(company.summary?.currentProfit)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Дивидендов:</div>
        <div className='col-8'>{setViewValue(company.summary?.dividendSum)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Место в рейтинге:</div>
        <div className='col-8'>{setViewValue(company.summary?.ratingPlace)}</div>
      </div>
    </>
  );
};
export const CompanyTransactions: React.FC<ICompany> = company => {
  const dispatch = useDispatch();
  const accounts = useSelector(getAccounts);

  useEffect(() => {
    dispatch(fetchCompanyTransactions(company.id, accounts, 1, 5));
  }, [dispatch, company.id, accounts]);

  return (
    <>
      {company.transactions !== undefined ? (
        company.transactions!.map((x, i) => (
          <div key={i} className='row'>
            <div className='col-3'>{setViewValue(x.dateOperation)}</div>
            <div className='col-3'>{setViewValue(x.status)}</div>
            <div className='col-1'>{setViewValue(x.quantity)}</div>
            <div className='col-4'>{setViewValue(x.cost)}</div>
            <div className='col-1'>{setViewValue(x.accountId)}</div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
};
export const CompanyRating: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyRecommendationToSell: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyRecommendationToBuy: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyIndexes: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyReports: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyPrices: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyDividends: React.FC<ICompany> = company => <span>в разработке</span>;
