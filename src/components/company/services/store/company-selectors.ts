/** @format */

import { AppStateType } from '../../../../common/service/types/common-types';

export const getCompanies = (state: AppStateType) => state.company.items;
export const getCompanyPagination = (state: AppStateType) => state.company.pagination;
export const getCompanyFilter = (state: AppStateType) => state.company.filter;
