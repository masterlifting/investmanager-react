/** @format */

import React, { CSSProperties, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from './Company';
import { getCompanies, getCompanyPagination, getCompanyFilter } from './services/store/company-selectors';
import { fetchCompanies } from './services/store/company-thunks';
import { companyActions } from './services/store/company-reducer';
import { Paginator } from '../../common/components/Paginator';

export const Companies: React.FC = () => {
  const selectableStyle: CSSProperties = {
    cursor: 'pointer',
  };

  const dispatch = useDispatch();
  const companies = useSelector(getCompanies);
  const pagination = useSelector(getCompanyPagination);
  const filter = useSelector(getCompanyFilter);

  useEffect(() => {
    dispatch(fetchCompanies(pagination.page, pagination.limit, filter.phrase));
  }, [dispatch, pagination.page, pagination.limit, filter.phrase]);

  const [isSelectableMode, setSelectableMode] = useState(false);
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    if (companies.filter(x => x.selected).length > 0) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [companies]);

  const cancelSelectableMode = () => {
    dispatch(companyActions.clearSelectable());
    setSelectableMode(false);
  };
  const showSelectableCompanies = () => {
    const visibledIds: number[] = companies.filter(x => x.selected).map(x => x.id);
    dispatch(companyActions.setVisibleItems(visibledIds));
  };
  return (
    <>
      <div className='row py-1 px-3' style={{ overflowY: 'auto', height: '77.2vh' }}>
        <div className='offset-md-3 col-md-6 col'>
          <div className='row mb-1'>
            {!isSelectableMode ? (
              <span style={selectableStyle} className='col-3 col-md-1 text-primary' onClick={() => setSelectableMode(true)}>
                select
              </span>
            ) : (
              <span className='col-6 col-md-2'>
                <div className='row'>
                  {isOk ? (
                    <span style={selectableStyle} className='col-6 text-success' onClick={() => showSelectableCompanies()}>
                      selected
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
              {companies
                .filter(x => x.visibled)
                .sort(function (x) {
                  return x.selected === true ? -1 : 1;
                })
                .map(x => (
                  <Company key={x.id} {...{ company: x, isSelectable: isSelectableMode }} />
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Paginator pagination={pagination} filter={filter} />
    </>
  );
};
