/** @format */

import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { companyReducer } from '../components/company/company-reducer';
import { accountReducer } from '../components/account/account-reducer';

export const rootReducer = combineReducers({
  accounts: accountReducer,
  companies: companyReducer,
  //company: crudFlows.company,
  // account: crudFlows.account,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = appStore;

export type ActionTypeCollector<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;
export type ThunkType<TAction extends Action<any>> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>;
export type AppStateType = ReturnType<typeof rootReducer>;