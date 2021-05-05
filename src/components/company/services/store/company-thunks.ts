/** @format */

import { ThunkType } from '../../../../common/service/types/common-types';
import { IApiComanyTransactionsSummary, ICompany } from '../types/company-interfaces';
import { companyActions, CompanyActionType } from './company-reducer';
import { CompanyAPI, CompanyTransationsAPI } from '../company-api';
import { IAccount } from '../../../account/services/types/account-interfaces';

const companyAPI = new CompanyAPI();

export const fetchCompanies = (page: number, limit: number, phrase: string | null = null): ThunkType<CompanyActionType> => async dispatch => {
  const response = await companyAPI.getCompaniesAsync(page, limit, phrase);
  if (response.isSuccess) {
    const companies: ICompany[] = response.data!.items!.map(x => ({
      id: x.id,
      name: x.name,
      description: x.description,
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
const companyTransactionsAPI = new CompanyTransationsAPI();
export const fetchCompanyTransactionsSummary = (companyId: number, accounts: IAccount[]): ThunkType<CompanyActionType> => async dispatch => {
  const summaries: IApiComanyTransactionsSummary[] = [];
  const result: IApiComanyTransactionsSummary = {
    actualLot: 0,
    cost: 0,
    currentProfit: 0,
    dateTransaction: new Date(),
    quantity: 0,
    statusName: '',
  };
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].selected) {
      const response = await companyTransactionsAPI.getSummary(accounts[i].id, companyId);
      if (response.isSuccess) {
        response.data!.dateTransaction = new Date(response.data!.dateTransaction);
        summaries.push(response.data!);
      }
    }
  }
  if (summaries.length > 0) {
    const orderedSummaries = summaries.sort((x, y) => (x.dateTransaction <= y.dateTransaction ? -1 : 1));
    result.actualLot = orderedSummaries[0].actualLot;
    result.cost = orderedSummaries[0].cost;
    result.currentProfit = orderedSummaries[0].currentProfit;
    result.dateTransaction = orderedSummaries[0].dateTransaction;
    result.quantity = orderedSummaries[0].quantity;
    result.statusName = orderedSummaries[0].statusName;
  }
  dispatch(companyActions.setTransactionsSummary(companyId, result));
};
