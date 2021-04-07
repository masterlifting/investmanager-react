/** @format */

import { useDispatch } from 'react-redux';
import { actions } from './store/company-reducer';
import { ICompany } from './types/company-interfaces';

export const Company: React.FC<ICompany> = company => {
  const dispatch = useDispatch();
  return (
    <li
      className='row py-2 py-md-1 company-hover'
      style={{ borderLeft: 'solid 0.5px  rgba(223, 220, 217, 0.883)', borderTop: 'solid 0.5px  rgba(223, 220, 217, 0.883)', borderTopLeftRadius: '10px' }}
    >
      <div className='col-1'>
        <input type={'checkbox'} checked={company.selected} onChange={() => dispatch(actions.setSelected(company.id))} />
      </div>
      <span className='col-3 col-md-1 text-secondary small'>{company.description}</span>
      <span onClick={() => {}} className='col-7 col-md-10'>
        {company.name}
      </span>
    </li>
  );
};
