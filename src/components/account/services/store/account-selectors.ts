/** @format */

import { AppStateType } from '../../../../common/service/types/common-types';

export const getAccounts = (state: AppStateType) => state.account.items;
export const getAccountsSum = (state: AppStateType) =>
  Math.ceil(
    state.account.items
      .filter(x => x.selected)
      .map(x => x.sum)
      .reduce((x, y) => x + y, 0),
  ).toLocaleString('ru-RU');
