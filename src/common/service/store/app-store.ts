/** @format */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { companyReducer } from '../../../components/company/services/store/company-reducer';
import { accountReducer } from '../../../components/account/services/store/account-reducer';
import { authReducer } from '../../../components/authentication/service/store/auth-reducer';
import { serviceReducer } from './service-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  company: companyReducer,
  service: serviceReducer,
});
// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = appStore;
