/** @format */

import React, { CSSProperties, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from './Company';
import { getCompanies } from './store/company-selectors';
import { fetchCompanies } from './store/company-thunks';
import { companyActions } from './store/company-reducer';

export const Companies: React.FC = () => {
  console.log('render');

  const selectableStyle: CSSProperties = {
    cursor: 'pointer',
  };

  const dispatch = useDispatch();
  const companies = useSelector(getCompanies);

  const [isSelectableMode, setSelectableMode] = useState(false);
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  useEffect(() => {
    if (companies.filter(x => x.selected).length > 0) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [companies]);

  const cancelSelectableMode = () => {
    dispatch(fetchCompanies());
    setSelectableMode(false);
  };
  return (
    <div className='row py-1 px-3' style={{ overflowY: 'auto', height: '80vh' }}>
      <div className='offset-md-3 col-md-6 col'>
        <div className='row mb-1'>
          {!isSelectableMode ? (
            <span style={selectableStyle} className='col-3 col-md-1 text-secondary' onClick={() => setSelectableMode(true)}>
              select
            </span>
          ) : (
            <span className='col-3 col-md-1'>
              <div className='row'>
                {isOk ? (
                  <span style={selectableStyle} className='col-6 text-success' onClick={() => dispatch(companyActions.setSelectable())}>
                    ok
                  </span>
                ) : (
                  <></>
                )}
                <span style={selectableStyle} className='col-6 text-danger' onClick={() => cancelSelectableMode()}>
                  cancel
                </span>
              </div>
            </span>
          )}
        </div>
        <div className='row'>
          <ul className='col-12'>
            {companies.map(x => (
              <Company key={x.id} {...{ company: x, isSelectable: isSelectableMode }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
