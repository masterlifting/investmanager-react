/** @format */

import { useDispatch } from 'react-redux';
import { companyActions } from './services/store/company-reducer';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='row bg-dark px-2' style={{ height: '5%' }}>
      <div className='col-8 col-md-4 small align-self-center'>
        <input
          className='input-text'
          placeholder='Введите название компании'
          autoComplete='off'
          onInput={(e: React.SyntheticEvent<HTMLInputElement>) => dispatch(companyActions.setFindingPhrase(e.currentTarget.value))}
        />
      </div>
      <div className='offset-2 col-2 offset-md-7 col-md-1 align-self-center' style={{ textAlign: 'end' }}>
        <i className='bi bi-filter-right item-hover'></i>
      </div>
    </div>
  );
};
