/** @format */

import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from './company/store/company-selectors';
import { companyActions } from './company/store/company-reducer';

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
  const companies = useSelector(getCompanies);

  const findCompanies = (phrase: string) => {
    const findResult = companies.filter(x => x.name.toLowerCase().indexOf(phrase.toLocaleLowerCase()) >= 0);
    if (findResult) {
      const visibledIds = findResult.concat(companies.filter(x => x.selected)).map(x => x.id);
      dispatch(companyActions.setVisibleItems(visibledIds));
    }
  };

  return (
    <div className='navbar bg-dark navbar-dark py-0' style={{ height: '5vh' }}>
      <div className='container-fluid'>
        <div className='col-8 col-md-4'>
          <input
            className='w-100 bg-dark'
            style={inputStyle}
            placeholder='Введите название компании'
            autoComplete='off'
            onInput={(e: React.SyntheticEvent<HTMLInputElement>) => findCompanies(e.currentTarget.value)}
          />
        </div>
        <div className='offset-2 col-2 offset-md-7 col-md-1 text-center'>
          <i className='bi bi-filter-right' style={{ fontSize: '1.5rem' }}></i>
        </div>
      </div>
    </div>
  );
};
