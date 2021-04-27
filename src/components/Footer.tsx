/** @format */

import { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { companyActions } from './company/services/store/company-reducer';

export const Footer: React.FC = () => {
  const inputStyle: CSSProperties = {
    outline: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    color: 'white',
  };

  const dispatch = useDispatch();

  // let companiesThrottled: null | ((phrase: string) => void) = null;
  // const getCompaniesThrottled = (phrase: string) => {
  //   if (companiesThrottled === null) {
  //     companiesThrottled = (p: string) => {
  //       _.debounce(() => {}, 2000);
  //     };
  //   }

  //   companiesThrottled(phrase);
  // };

  return (
    <div className='navbar bg-dark navbar-dark py-0' style={{ height: '5vh' }}>
      <div className='container-fluid'>
        <div className='col-8 col-md-4'>
          <input
            className='w-100 bg-dark'
            style={inputStyle}
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
