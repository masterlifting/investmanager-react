/** @format */

const getClearedErrors = (errors: Array<string>, error: string): Array<string> => errors.filter(x => x !== error);
export const inputTextValidate = (errors: Array<string>, errorName: string, validValue: boolean): Array<string> =>
  validValue ? getClearedErrors(errors, errorName) : !errors.includes(errorName) ? [...errors, errorName] : errors;
