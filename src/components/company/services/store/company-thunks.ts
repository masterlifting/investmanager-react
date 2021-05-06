/** @format */

import { ThunkType } from '../../../../common/service/types/common-types';
import { IApiComanyTransactionsSummary, ICompany } from '../types/company-interfaces';
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
export const fetchCompanyAdditionalInfo = (companyId: number): ThunkType<CompanyActionType> => async dispatch => {
  const response = await companyAPI.getAdditionalAsync(companyId);
  if (response.isSuccess) {
    dispatch(companyActions.setAdditional(companyId, response.data!));
  }
};

export const fetchCompanyTransactionsSummary = (companyId: number, accounts: IAccount[]): ThunkType<CompanyActionType> => async dispatch => {
  const summaries: IApiComanyTransactionsSummary[] = [];

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].selected) {
      const response = await companyAPI.getTransactionsSummary(accounts[i].id, companyId);
      if (response.isSuccess) {
        summaries.push(response.data!);
      }
    }
  }
  if (summaries.length > 0) {
    const orderedSummaries = summaries.sort((x, y) => (x.date >= y.date ? -1 : 1));
    const result: IApiComanyTransactionsSummary = {
      date: new Date(orderedSummaries[0].date),
      status: orderedSummaries[0].status,
      quantity: orderedSummaries[0].quantity,
      cost: orderedSummaries[0].cost,

      actualLot: orderedSummaries.map(x => x.actualLot).reduce((x, y) => x + y, 0),
      currentProfit: orderedSummaries.map(x => x.currentProfit).reduce((x, y) => x + y, 0),
    };

    dispatch(companyActions.setTransactionsSummary(companyId, result));
  }
};
export const fetchCompanySellRecommendation = (companyId: number): ThunkType<CompanyActionType> => async dispatch => {
  // const summaries: IApiComanyTransactionsSummary[] = [];

  // for (let i = 0; i < accounts.length; i++) {
  //   if (accounts[i].selected) {
  //     const response = await companyTransactionsAPI.getSummary(accounts[i].id, companyId);
  //     if (response.isSuccess) {
  //       summaries.push(response.apiData!);
  //     }
  //   }
  // }
  // if (summaries.length > 0) {
  //   const orderedSummaries = summaries.sort((x, y) => (x.date >= y.date ? -1 : 1));
  //   const result: IApiComanyTransactionsSummary = {
  //     date: new Date(orderedSummaries[0].date),
  //     status: orderedSummaries[0].status,
  //     quantity: orderedSummaries[0].quantity,
  //     cost: orderedSummaries[0].cost,

  //     actualLot: orderedSummaries.map(x => x.actualLot).reduce((x, y) => x + y, 0),
  //     currentProfit: orderedSummaries.map(x => x.currentProfit).reduce((x, y) => x + y, 0),
  //   };

  //   dispatch(companyActions.setTransactionsSummary(companyId, result));
  // }
};
