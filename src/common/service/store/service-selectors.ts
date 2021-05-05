/** @format */

import { AppStateType } from '../types/common-types';

export const getUsd = (state: AppStateType) => state.service.rate.valute.usd.value.toFixed(2);
