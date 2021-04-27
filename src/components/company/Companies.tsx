/** @format */

import React, { CSSProperties, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from './Company';
import { getCompanies } from './services/store/company-selectors';
import { fetchCompanies } from './services/store/company-thunks';
import { companyActions } from './services/store/company-reducer';
import { Paginator } from '../../common/components/Paginator';

export const Companies: React.FC = () => {
  const selectableStyle: CSSProperties = {
    cursor: 'pointer',
  };

  const dispatch = useDispatch();
  const data = useSelector(getCompanies);

  const page = data.pagination.page;
  const limit = data.pagination.limit;
  const phrase = data.phrase;

  useEffect(() => {
    dispatch(fetchCompanies(page, limit, phrase));
  }, [dispatch, phrase]);

  const [isSelectableMode, setSelectableMode] = useState(false);
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    if (data.items.filter(x => x.selected).length > 0) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [data.items]);

  const cancelSelectableMode = () => {
    dispatch(companyActions.clearSelectable());
    setSelectableMode(false);
  };
  const showSelectableCompanies = () => {
    const visibledIds: number[] = data.items.filter(x => x.selected).map(x => x.id);
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
              {data.items
                .filter(x => x.visibled)
                .sort(function (x, y) {
                  return x.selected === true ? -1 : 1;
                })
                .map(x => (
                  <Company key={x.id} {...{ company: x, isSelectable: isSelectableMode }} />
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Paginator {...data.pagination} />
    </>
  );
};
