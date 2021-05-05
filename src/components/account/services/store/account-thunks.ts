/** @format */

import { ThunkType } from '../../../../common/service/types/common-types';
import { AccountAPI } from '../account-api';
import { AccountActionType, accountActions } from './account-reducer';
import { IAccount } from '../types/account-interfaces';

const accountAPI = new AccountAPI();

export const fetchAccounts = (accounts: IAccount[] = []): ThunkType<AccountActionType> => async dispatch => {
  let _accounts: IAccount[] = [];

  const response = await accountAPI.getAccountsAsync(1, 100, null);
  if (response.isSuccess) {
    _accounts = response.data!.items!.map(x => ({
      id: x.id,
      name: x.name,
      description: x.description,
      selected: true,
      sum: x.sum,
    }));
  }

  if (accounts.length !== 0) {
    for (let i = 0; i < _accounts.length; i++) {
      for (let j = 0; j < accounts.length; j++) {
        if (_accounts[i].id === accounts[j].id) {
          _accounts[i].selected = accounts[j].selected;
        }
      }
    }
  }

  dispatch(accountActions.setItems(_accounts));
  dispatch(accountActions.setItemsTotalCount(response.data!.totalCount));
};
