/** @format */

import { API } from '../../../../api/api-implements';
import { ThunkType } from '../../../../common/types/common-types';
import { ICompany } from '../types/company-interfaces';
import { companyActions, CompanyActionType } from './company-reducer';

export const fetchCompanies = (page: number, limit: number, phrase: string | null = null): ThunkType<CompanyActionType> => async dispatch => {
  const response = await API.company.getByPaginationAsync(page, limit, phrase);
  if (response.isSuccess) {
    const companies: ICompany[] = response.data!.items!.map(x => ({
      id: x.id,
      name: x.name,
      description: x.description,
      selected: false,
      visibled: true,
    }));

    dispatch(companyActions.setItems(companies));

    if (page === 1) {
      dispatch(companyActions.setPaginationTotal(response.data!.totalCount));
    }
  }
};
