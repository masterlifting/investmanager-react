

export interface IAppQuery {
  getById: (id: number) => Promise<IAppQueryResult<IAppEntity>>;
  getAll: () => Promise<IAppQueryResult<IAppEntity[]>>;
  create: () => Promise<IAppQueryResult<IMutableEntity>>;
  update: (id: number, model: IMutableEntity) => Promise<IAppQueryResult<IMutableEntity>>;
  delete: (id: number) => Promise<IAppQueryResult<IMutableEntity>>;
}

export interface IAppEntity {}
export interface IMutableEntity extends IAppEntity {
  id: number;
}
export interface IAppQueryResult<Tdata extends IAppEntity> {
  isSuccess: boolean;
  info: string;
  data?: Tdata;
}

export interface IAppShortModel extends IAppEntity {
  name: string;
  description?: string;
}

export interface IAppBaseBrokerReportModel extends IAppEntity {
  currencyId: number;
  accountId: number;
  dateOperation: Date;
}
