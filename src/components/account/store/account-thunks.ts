/** @format */

import { ThunkType } from "../../../common/types/common-types";
import { AccountActionType } from "./account-reducer";

const getAccounts = (): ThunkType<AccountActionType> => async (dispatch, getState) => {
  dispatch({ type: 'account/setItems', items: getState().account });
};
