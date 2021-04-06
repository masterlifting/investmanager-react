/** @format */

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './company-reducer';
import { getCompanies } from './company-selectors';

export const Companies: React.FC = () => {
  
  const dispatch = useDispatch();
  const companies = useSelector(getCompanies);
  
  return (
    <ul>
      {companies.map(x => (
        <li key={x.id}>
          <input type={'checkbox'} checked={x.selected} onChange={() => dispatch(actions.setSelected(x.id))} />
          {x.name}
        </li>
      ))}
    </ul>
  );
};
