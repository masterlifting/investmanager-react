/** @format */

import { companyAPI } from '../../../api/api-implements';
import { ThunkType } from '../../../common/types/common-types';
import { ICompany } from '../types/company-interfaces';
import { companyActions, CompanyActionType } from './company-reducer';

export const fetchCompanies = (): ThunkType<CompanyActionType> => async dispatch => {
  const response = await companyAPI.getAPI.getAllAsync();
  if (response.isSuccess) {
    const companies: ICompany[] = response.data!.map(x => ({
      id: x.id,
      name: x.name,
      selected: false,
      visibled: true
    }));
    dispatch(companyActions.setItems(companies));
  }
};
