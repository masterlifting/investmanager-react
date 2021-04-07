/** @format */

import { ActionTypeCreator } from '../../types/common-types';

const additionalActions = {
  additionalFunc: () => ({
    type: 'additional',
  }),
};
type ActionType = ActionTypeCreator<typeof additionalActions>;

// export const crudFlows = {
//   company: crudReducerCreator(
//     companyAPI.editAPI,
//     (state: CrudStateType<ICompany>, action: ActionType): CrudStateType<ICompany> => {
//       return state;
//     }),
//   account: crudReducerCreator(accountAPI.editAPI),
// };

// export type CrudFlowType = keyof typeof crudFlows;
