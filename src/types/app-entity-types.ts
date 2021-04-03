import { IAppShortModel, IMutableEntity } from "./app-base-types";

export interface ICompany extends IAppShortModel, IMutableEntity {
  selected: boolean;
}
