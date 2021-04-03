import { ApiResultType } from "./api-base-types";

export const startBaseProcessAsync = async (action: any, dispatch: any) => {
  const resultHandler = baseProcessResultHandlerAsync(action, dispatch);
  const errorHandler = baseProcessErrorHandlerAsync(resultHandler, dispatch);
  const visualizationHandler = baseProcessVisualizationHandlerAsync(
    errorHandler,
    dispatch
  );
  return visualizationHandler();
};


const baseProcessResultHandlerAsync = <T>(
  action: any,
  dispatch: any
) => async () => {
  const result: ApiResultType<T> = await action();
  if (!result.isSuccess) {
    dispatch(showError(result.info));
  }
};
const baseProcessVisualizationHandlerAsync = (
  action: any,
  dispatch: any
) => async () => {
  dispatch(setLoader("start"));
  await action();
  dispatch(setLoader("stop"));
};
const baseProcessErrorHandlerAsync = (
  action: any,
  dispatch: any
) => async () => {
  try {
    await action();
  } catch {
    dispatch(showError("error"));
  }
};

const showError = (message: string) => {};
const setLoader = (actionType: "start" | "stop") => {};
