/** @format */

import { inputTextValidate } from '../../../common/service/validator-service';

export const getEmailValidator = (errors: Array<string>, email: string): Array<string> => {
  const emailValidator = email.length === 0 || (email.includes('@') && email.includes('.'));
  return inputTextValidate(errors, 'В ожидании корректного email', emailValidator);
};
export const getPasswordValidator = (errors: Array<string>, password: string, passwordConfirmed?: string): Array<string> => {
  let _errors = errors;
  if (passwordConfirmed !== undefined) {
    _errors = inputTextValidate(errors, 'В ожидании совпадения паролей', passwordConfirmed.length === 0 || passwordConfirmed === password);
  }
  return inputTextValidate(_errors, 'В ожидании корректного пароля', password.length === 0 || password.length >= 8);
};
