/** @format */

import React from 'react';

export const CompanyMenuHoc = <T extends object>(Component: React.ComponentType<T>): React.FC<T> => ({ ...props }: T) => (
  <div className='row small text-muted'>
    <div className='col'>
      <Component {...props} />
    </div>
  </div>
);
