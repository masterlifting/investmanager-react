/** @format */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { companyReducer } from '../../components/company/services/store/company-reducer';
import { accountReducer } from '../../components/account/services/store/account-reducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  company: companyReducer,
  //company: crudFlows.company,
  // account: crudFlows.account,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = appStore;
