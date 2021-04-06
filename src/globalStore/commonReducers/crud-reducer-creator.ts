/** @format */

import { IEditAPI } from '../../api/api-config';
import { IApiEntity } from '../../api/api-types';
import { IAppEntity, IMutableEntity } from '../../types/app-entity-types';
import { ActionTypeCollector } from '../appStore';

export type CrudStateType<T extends IMutableEntity> = {
  editingItem: T | null;
  items: T[];
  itemsCount: number;
  pageCount: number;
  currentPage: number;
  pageSize: number;
};

export const crudReducerCreator = (api: IEditAPI<IApiEntity>) => {
  const initialState: CrudStateType<IMutableEntity> = {
    editingItem: null,
    items: [],
    itemsCount: 0,
    pageCount: 0,
    currentPage: 1,
    pageSize: 50,
  };
  const actions = {
    getById: (item: IAppEntity) => ({ type: 'crud/getById', item } as const),
    getAll: (items: IAppEntity[]) => ({ type: 'crud/getAll', items } as const),
    create: (item: IAppEntity) => ({ type: 'crud/create', item } as const),
    update: (item: IAppEntity) => ({ type: 'crud/update', item } as const),
    delete: (id: number) => ({ type: 'crud/delete', id } as const),
  };

  type ActionType = ActionTypeCollector<typeof actions>;

  const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      case 'crud/getById':
        return { ...state, editingItem: action.item };
      case 'crud/getAll':
        return { ...state, items: action.items };
      case 'crud/create':
        return { ...state, items: [action.item, ...state.items] };
      case 'crud/update':
        return { ...state, items: state.items.map(x => (state.editingItem !== null && x.id !== state.editingItem.id ? x : { ...x, ...action.item })) };
      case 'crud/delete':
        return { ...state, items: state.items.filter(x => x.id !== action.id) };
      default:
        return state;
    }
  };
  // const thunks = {
  //   getById: (id: number): ThunkType<ActionType> => async dispath => {},
  //   getAll: (id: number): ThunkType<ActionType> => async dispath => {},
  //   create: (): ThunkType<ActionType> => async dispath => {
  //     // await startApiProcessAsync(async () => {
  //     //   const result = await api.create();
  //     //   if (result.isSuccess) {
  //     //     const entityApp = convertToEntityApp(result.data);
  //     //     dispath(actions.create(entityApp));
  //     //   }
  //     // }, dispath);
  //   },
  //   update: (id: number): ThunkType<ActionType> => async dispath => {},
  //   delete: (id: number): ThunkType<ActionType> => async dispath => {},
  // };

  return reducer;
};

export default crudReducerCreator;
