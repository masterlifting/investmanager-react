import { startApiProcessAsync } from "../../api/api-base-processes";
import { IBaseApi } from "../../api/api-base-types";
import { ActionTypeCollector, ThunkType } from "../store-base-types";
import { convertToEntityApp } from '../../api/api-mapper';

export type CrudStateType<TEntityApi, TEntityApp> = {
  updatingItem: TEntityApp | null,
  items: TEntityApi[],
  itemsCount: number,
  pageCount: number,
  currentPage: number,
  pageSize: number,
};
const crudReducerCreator = <TEntityApi, TEntityApp, TParams>( api: IBaseApi<TEntityApi> ) => {
  const initialState : CrudStateType<TEntityApp,TEntityApi> = {
    updatingItem : null,
    items: [],
    itemsCount: 0,
    pageCount: 0,
    currentPage: 1,
    pageSize: 50
  };
  const actions = {
    readById: (item: TEntityApp) => ({ type: "crud/readById", item } as const),
    readAll: (items: TEntityApp[]) => ({ type: "crud/readAll", items } as const),
    create: (item: TEntityApp) => ({ type: "crud/create", item } as const),
    update: (item: TEntityApp) => ({ type: "crud/update", item } as const),
    delete: (id: number) => ({ type: "crud/delete", id } as const),
  };

  type ActionType = ActionTypeCollector<typeof actions>;

  const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      case "crud/create":
        return { ...state };
      case "crud/readById":
        return { ...state };
      case "crud/readAll":
        return { ...state };
      case "crud/update":
        return { ...state };
      case "crud/delete":
        return { ...state };
      default:
        return state;
    }
  };

  const thunks = {
    readById: (id: number): ThunkType<ActionType> => async (dispath) => {},
    readAll: (id: number): ThunkType<ActionType> => async (dispath) => {},
    create: (): ThunkType<ActionType> => async (dispath) => {
      await startApiProcessAsync(async () => {
        const result = await api.create();
        if (result.isSuccess) {
            const entityApp = convertToEntityApp(result.data);
            dispath(actions.create(entityApp));
        }
      }, dispath);
    },
    update: (id: number): ThunkType<ActionType> => async (dispath) => {},
    delete: (id: number): ThunkType<ActionType> => async (dispath) => {},
  };

  return { reducer, thunks };
};

export default crudReducerCreator;
