/** @format */

import React from 'react';

export const CompanyMenuHoc = <T extends object>(Component: React.ComponentType<T>): React.FC<T> => ({ ...props }: T) => (
  <div className='row text-success'>
    <div className='col'>
      <div className='row'>
        <div className='col'>
          <Component {...props} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>Detail</div>
      </div>
    </div>
  </div>
);
