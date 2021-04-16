/** @format */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCompanyMenu } from './store/company-selectors';
import { ICompany } from './types/company-interfaces';

export const CompanyMenu: React.FC<ICompany> = props => {
  const companyMenu = useSelector(getCompanyMenu);
  const [menu, setMenu] = useState(companyMenu);

  const setSelectableMenu = (id: number, isSelected: boolean) => setMenu(isSelected ? menu.filter(x => x.id === id) : companyMenu);

  return (
    <ul className='offset-1 col-11'>
      {menu.map(x => (
        <li key={x.id} className='row company-menu-hover'>
          <div className='col'>
            <input type='checkbox' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectableMenu(x.id, e.currentTarget.checked)} />
            <span className='mx-1'></span>
            <span style={{ color: '#F2F2F2 !important', fontStyle: 'italic' }} onClick={() => {}}>
              {x.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
