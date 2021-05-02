/** @format */

import { useDispatch } from 'react-redux';
import { companyActions } from './company/services/store/company-reducer';

export const Footer: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <div className='navbar bg-dark navbar-dark py-0' style={{ height: '5vh' }}>
      <div className='container-fluid'>
        <div className='col-8 col-md-4'>
          <input
            className='input-text'
            placeholder='Введите название компании'
            autoComplete='off'
            onInput={(e: React.SyntheticEvent<HTMLInputElement>) => dispatch(companyActions.setFindPhrase(e.currentTarget.value))}
          />
        </div>
        <div className='offset-2 col-2 offset-md-7 col-md-1 text-center'>
          <i className='bi bi-filter-right' style={{ fontSize: '1.5rem' }}></i>
        </div>
      </div>
    </div>
  );
};
