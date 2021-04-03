export interface IApiQuery<T extends IApiEntity> {
  getById: (id: number) => Promise<T>;
  getAll: () => Promise<T[]>;
  create: () => Promise<IApiActionResult>;
  update: (id: number, model: T) => Promise<IApiActionResult>;
  delete: (id: number) => Promise<IApiActionResult>;
}

export interface IApiEntity {}

export interface IApiActionResult extends IApiEntity {
  isSuccess: boolean;
  info: string;
  resultId?: number;
}

export interface IApiShortModel extends IApiEntity {
  id: number;
  name: string;
  description: string;
}

export interface IApiBaseBrokerReportModel extends IApiEntity {
  currencyId: number;
  accountId: number;
  dateOperation: Date;
}
