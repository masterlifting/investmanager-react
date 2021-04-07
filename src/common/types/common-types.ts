/** @format */

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../store/app-store";

export type AppStateType = ReturnType<typeof rootReducer>;
export type ActionTypeCreator<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;
export type ThunkType<TAction extends Action<any>> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>;
