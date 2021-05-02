/** @format */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getAuth } from './service/store/auth-selectors';
import { login } from './service/store/auth-thunks';

export const Login: React.FC = () => {
  const authData = useSelector(getAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const getClearedErrors = (errors: string[], error: string): string[] => errors.filter(x => x !== error);

  const validateEmail = (email: string, errorName: string) => {
    if (email.length === 0 || (email.includes('@') && email.includes('.'))) {
      setErrors(getClearedErrors(errors, errorName));
    } else {
      setErrors([errorName]);
    }
    setEmail(email);
  };
  const validatePassword = (password: string, errorName: string) => {
    if (password.length === 0 || password.length > 8) {
      setErrors(getClearedErrors(errors, errorName));
    } else {
      setErrors([errorName]);
    }
    setPassword(password);
  };
  const authenticate = () => {
    if (errors.length === 0) {
      dispatch(login({ email: email, password: password }));
    }
  };

  if (authData.user.isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <div className='row' style={{ marginTop: '30vh' }}>
      <div className='offset-md-5 col-md-2 offset-2 col-8'>
        {(authData.apiErrors.length > 0 || errors.length > 0) && (
          <div className='row'>
            <ul className='col-12 small text-danger'>
              {authData.apiErrors.concat(errors).map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        )}
        <div className='row'>
          <div className='col'>
            <input
              className='input-text'
              type='email'
              placeholder='email'
              autoComplete='off'
              value={email}
              onInput={(e: React.SyntheticEvent<HTMLInputElement>) => validateEmail(e.currentTarget.value, 'В ожидании корректного email...')}
            />
          </div>
        </div>
        <div className='row my-2'>
          <div className='col'>
            <input
              className='input-text'
              type='password'
              placeholder='password'
              autoComplete='off'
              value={password}
              onInput={(e: React.SyntheticEvent<HTMLInputElement>) => validatePassword(e.currentTarget.value, 'В ожидании корректного пароля...')}
            />
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col text-center'>
            <button
              className='btn btn-sm btn-light w-50'
              disabled={email.length === 0 || password.length === 0 || errors.length > 0}
              onClick={() => authenticate()}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
