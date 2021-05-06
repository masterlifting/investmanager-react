/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyAdditionalInfo as fetchCompanyAdditional, fetchCompanyTransactionsSummary } from './services/store/company-thunks';
import { useEffect } from 'react';
import { ICompany } from './services/types/company-interfaces';
import { setViewValue } from '../../common/service/view-service';
import { getAccounts } from '../account/services/store/account-selectors';

export const CompanyAdditionalInfo: React.FC<ICompany> = company => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanyAdditional(company.id));
  }, [dispatch, company.id]);

  return (
    <>
      <div className='row'>
        <div className='col-4'>Индустрия:</div>
        <div className='col-8'>{setViewValue(company.additional?.industry)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Сектор:</div>
        <div className='col-8'>{setViewValue(company.additional?.sector)}</div>
      </div>
      <div className='row'>
        <div className='col-4'>Валюта:</div>
        <div className='col-8'>{setViewValue(company.additional?.currency)}</div>
      </div>
    </>
  );
};
export const CompanyTransaction: React.FC<ICompany> = company => {
  const dispatch = useDispatch();
  const accounts = useSelector(getAccounts);

  useEffect(() => {
    dispatch(fetchCompanyTransactionsSummary(company.id, accounts));
  }, [dispatch, company.id, accounts]);

  return (
    <>
      <b>В портфеле</b>
      <div className='row'>
        <div className='col'>Лотов:</div>
        <div className='col'>{setViewValue(company.transactions?.summary.actualLot)}</div>
      </div>
      <div className='row'>
        <div className='col'>Профит:</div>
        <div className='col'>{setViewValue(company.transactions?.summary.currentProfit)}</div>
      </div>
      <b>Последняя транзакция</b>
      <div className='row'>
        <div className='col'>Дата:</div>
        <div className='col'>{setViewValue(company.transactions?.summary.date)}</div>
      </div>
      <div className='row'>
        <div className='col'>Статус:</div>
        <div className='col'>{setViewValue(company.transactions?.summary.status)}</div>
      </div>
      <div className='row'>
        <div className='col'>Количество:</div>
        <div className='col'>{setViewValue(company.transactions?.summary.quantity)}</div>
      </div>
      <div className='row'>
        <div className='col'>Цена за ед:</div>
        <div className='col'>{setViewValue(company.transactions?.summary.cost)}</div>
      </div>
    </>
  );
};
export const CompanyRating: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyRecommendationToSell: React.FC<ICompany> = company => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanyAdditional(company.id));
  }, [dispatch, company.id]);

  return (
    <>
      <div className='row'>
        <div className='col-4'>Индустрия:</div>
        <div className='col-8'>{setViewValue(company.additional?.industry)}</div>
      </div>
    </>
  );
};
export const CompanyRecommendationToBuy: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyIndexes: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyReports: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyPrices: React.FC<ICompany> = company => <span>в разработке</span>;
export const CompanyDividends: React.FC<ICompany> = company => <span>в разработке</span>;
