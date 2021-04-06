/** @format */

import { companyAPI } from "../../api/api-implements";
import { ThunkType } from "../../globalStore/appStore";
import { ICompany } from "../../types/app-entity-types";
import { actions, CompanyActionType } from "./company-reducer";

export const getCompanies = (): ThunkType<CompanyActionType> => async dispatch => {
  const response = await companyAPI.getAPI.getAllAsync();
  if (response.isSuccess) {
    const companies: ICompany[] = response.data!.map(x => ({
      id: x.id,
      name: x.name,
      selected: false,
    }));
    dispatch(actions.setItems(companies));
  }
};
