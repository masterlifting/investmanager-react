/** @format */

import { ThunkType } from '../../../../common/types/common-types';
import { AccountAPI } from '../account-api';
import { AccountActionType, accountActions } from './account-reducer';
import { IAccount } from '../types/account-interfaces';

const accountAPI = new AccountAPI();

export const fetchAccounts = (page: number, limit: number): ThunkType<AccountActionType> => async dispatch => {
  const response = await accountAPI.getByPaginationAsync(page, limit, null);
  if (response.isSuccess) {
    const accounts: IAccount[] = response.data!.items!.map(x => ({
      id: x.id,
      name: x.name,
      description: x.description,
      selected: true,
      sum: x.sum,
    }));

    dispatch(accountActions.setItems(accounts));
    dispatch(accountActions.setItemsTotalCount(response.data!.totalCount));
  }
};
