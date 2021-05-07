/** @format */

import { ThunkType } from '../../../../common/service/types/common-types';
import { IApiCompanyTransaction, ICompany, IApiCompanySummary } from '../types/company-interfaces';
import { companyActions, CompanyActionType } from './company-reducer';
import { CompanyAPI } from '../company-api';
import { IAccount } from '../../../account/services/types/account-interfaces';

const companyAPI = new CompanyAPI();
export const fetchCompanies = (page: number, limit: number, phrase: string | null = null): ThunkType<CompanyActionType> => async dispatch => {
  const response = await companyAPI.getCompaniesAsync(page, limit, phrase);
  if (response.isSuccess) {
    const companies: ICompany[] = response.data!.items.map(x => ({
      id: x.id,
      name: x.name,
      description: x.description,
      industryId: x.industryId,
      sectorId: x.sectorId,
      dateSplit: x.dateSplit,
      selected: false,
      visibled: true,
    }));

    dispatch(companyActions.setItems(companies));
    dispatch(companyActions.setItemsTotalCount(response.data!.totalCount));
  }
};
export const fetchCompanySummary = (companyId: number, accounts: IAccount[]): ThunkType<CompanyActionType> => async dispatch => {
  const summaries: IApiCompanySummary[] = [];

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].selected) {
      const response = await companyAPI.getSummaryAsync(companyId, accounts[i].id);
      if (response.isSuccess) {
        summaries.push(response.data!);
      }
    }
  }

  if (summaries.length > 0) {
    const result: IApiCompanySummary = {
      currency: summaries[0].currency,
      industry: summaries[0].industry,
      sector: summaries[0].sector,
      ratingPlace: summaries[0].ratingPlace,
      dividendSum: summaries.map(x => x.dividendSum).reduce((x, y) => x + y, 0),
      actualLot: summaries.map(x => x.actualLot).reduce((x, y) => x + y, 0),
      currentProfit: summaries.map(x => x.currentProfit).reduce((x, y) => x + y, 0),
    };

    dispatch(companyActions.setSummary(companyId, result));
  }
};
export const fetchCompanyTransactions = (
  companyId: number,
  accounts: IAccount[],
  page: number,
  limit: number,
): ThunkType<CompanyActionType> => async dispatch => {
  const transactions: IApiCompanyTransaction[] = [];

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].selected) {
      const response = await companyAPI.getTransactionsAsync(companyId, accounts[i].id, page, limit);
      if (response.isSuccess) {
        for (let i = 0; i < response.data!.items.length; i++) {
          response.data!.items[i].dateOperation = new Date(response.data!.items[i].dateOperation);
          transactions.push(response.data!.items[i]);
        }
      }
    }
  }
  if (transactions.length > 0) {
    dispatch(
      companyActions.setTransactions(
        companyId,
        transactions.sort((x, y) => (x.dateOperation >= y.dateOperation ? -1 : 1)),
      ),
    );
  }
};
