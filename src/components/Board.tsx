/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { getAccountsSum } from './account/services/store/account-selectors';
import { useEffect } from 'react';
import { getUsd } from '../common/service/store/service-selectors';
import { fetchRate } from '../common/service/store/service-thunks';

export const Board: React.FC = () => {
  return (
    <div className='row px-4 pt-1' style={{ height: '10%' }}>
      <BoardLeft />
      <BoardCenter />
      <BoardRight />
    </div>
  );
};

const BoardCenter: React.FC = () => {
  const sum = useSelector(getAccountsSum);
  return (
    <div className='col-6 col-md-8 align-self-center'>
      <h2 className='text-center text-info text-nowrap'>{sum} р.</h2>
    </div>
  );
};
const BoardLeft: React.FC = () => {
  return (
    <div className='col-3 col-md-2 align-self-stretch'>
      <div className='row mb-3 item-hover'>
        <div className='col-md-6 col'>
          <i className='bi bi-sliders'></i>
        </div>
        <div className='col-md-6 d-none d-md-block'>выбрать счет</div>
      </div>
      <div className='row item-hover'>
        <div className='col-md-6 col'>
          <i className='bi bi-download'></i>
        </div>
        <div className='col-md-6 d-none d-md-block'>загрузить отчет</div>
      </div>
    </div>
  );
};
const BoardRight: React.FC = () => {
  let usd = useSelector(getUsd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRate());
  }, [dispatch]);
  return (
    <div className='col-3 col-md-2 align-self-stretch'>
      <div className='row mb-3'>
        <span className='col' style={{ textAlign: 'end' }}>
          ${usd}
        </span>
      </div>
      <div className='row item-hover'>
        <div className='col-md-6 d-none d-md-block'>обновить цены</div>
        <div className='col-md-6 col' style={{ textAlign: 'end' }}>
          <i className='bi bi-cash-stack'></i>
        </div>
      </div>
    </div>
  );
};
