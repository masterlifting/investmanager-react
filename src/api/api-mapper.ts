export const convertToEntityApp = <TEntityApi, TEntityApp>(
  model: TEntityApi
): TEntityApp => {
  const result = model as TEntityApp;
  return result;
};

interface CompanyApi extends ICompany {
  id: number;
  name: string;
};
interface CompanyApp extends ICompany {
  id: number;
  name: string;
  selected: boolean;
};
interface ICompany {
  id: number;
  name: string;
}
