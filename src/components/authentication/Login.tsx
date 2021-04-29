/** @format */

import React, { useState } from 'react';
import { ILogin } from './service/types/auth-interfaces';

export const Login: React.FC = props => {
  const [login, setLogin] = useState<ILogin>({
    email: '',
    password: '',
    withError: false,
    error: '',
  });

  return (
    <div className='row' style={{ marginTop: '30vh' }}>
      <div className='offset-md-4 col-md-4 col'>
        {login.withError && (
          <div className='row'>
            <div className='col'>{login.error}</div>
          </div>
        )}
        <div className='row'>
          <div className='col'>
            <input type='email' placeholder='email' />
          </div>
        </div>
        <div className='row my-2'>
          <div className='col'>
            <input type='password' placeholder='password' />
          </div>
        </div>

        <button>login</button>
      </div>
    </div>
  );
};
