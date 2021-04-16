/** @format */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { companyMenuReducer, companyReducer } from '../../components/company/store/company-reducer';
import { accountReducer } from '../../components/account/store/account-reducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  company: companyReducer,
  companyMenu: companyMenuReducer,
  //company: crudFlows.company,
  // account: crudFlows.account,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = appStore;
