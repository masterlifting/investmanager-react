/** @format */

import React, { useState } from 'react';
import { IRegister } from './service/types/auth-interfaces';

export const Register: React.FC = props => {
  const [register, setRegister] = useState<IRegister>({
    email: '',
    password: '',
    passwordConfirm: '',
    withError: false,
    errors: [],
  });
  return (
    <div className='row' style={{ marginTop: '30vh' }}>
      <div className='offset-md-4 col-md-4 col'>
        {register.withError &&
          register.errors.map((x, i) => (
            <div key={i} className='row validation-message'>
              <div className='col'>{x}</div>
            </div>
          ))}
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
        <div className='row my-2'>
          <div className='col'>
            <input type='password' placeholder='repeat password' />
          </div>
        </div>

        <button>Register</button>
      </div>
    </div>
  );
};
