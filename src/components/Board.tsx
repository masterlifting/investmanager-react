/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountsSum } from './account/services/store/account-selectors';
import { fetchAccounts } from './account/services/store/account-thunks';
import { getUser } from './authentication/service/store/auth-selectors';

export const Board: React.FC = () => {
  const user = useSelector(getUser);

  return (
    <div className='row px-4 pt-1' style={{ height: '10%' }}>
      <BoardLeft />
      <BoardCenter {...user.isAuth} />
      <BoardRight />
    </div>
  );
};

const BoardCenter: React.FC<boolean> = isAuth => {
  const sum = useSelector(getAccountsSum);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchAccounts(1, 5));
    }
  }, [dispatch, isAuth]);

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
  return (
    <div className='col-3 col-md-2 align-self-stretch'>
      <div className='row mb-3'>
        <span className='col' style={{ textAlign: 'end' }}>
          $73,5
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
