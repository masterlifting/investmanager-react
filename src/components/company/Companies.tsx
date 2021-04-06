/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from './Company';
import { getCompanies } from './companyStore/company-selectors';
import { fetchCompanies } from './companyStore/company-thunks';

export const Companies: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector(getCompanies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <div className='row py-1 px-3' style={{ overflowY: 'auto', height: '80vh' }}>
      <ul className='offset-md-3 col-md-6 col'>
        <div className='row'>
          <span className='col col-md-1 company-menu-hover text-warning text-nowrap' onClick={() => companies.filter(x => (x.id = 10))}>
            выбрать
          </span>
        </div>
        {companies.map(x => (
          <Company key={x.id} {...x} />
        ))}
      </ul>
    </div>
  );
};
