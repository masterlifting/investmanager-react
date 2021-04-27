/** @format */
import { useState } from 'react';
import { ICompany, ICompanyMenu } from './services/types/company-interfaces';
import { CompanyMenuItem } from './CompanyMenuItem';

export const CompanyMenu: React.FC<ICompany> = props => {
  const initialMenu: ICompanyMenu[] = [
    { id: 1, selected: false, visibled: false, name: 'Дополнительная информация' },
    { id: 2, selected: false, visibled: false, name: 'Транзакции' },
    { id: 3, selected: false, visibled: false, name: 'Рейтинг' },
    { id: 4, selected: false, visibled: false, name: 'Рекомендация к покупке' },
    { id: 5, selected: false, visibled: false, name: 'Рекомендация к продаже' },
    { id: 6, selected: false, visibled: false, name: 'Индексы' },
    { id: 7, selected: false, visibled: false, name: 'Отчеты' },
    { id: 8, selected: false, visibled: false, name: 'Цены' },
    { id: 9, selected: false, visibled: false, name: 'Дивиденды' },
    { id: 10, selected: false, visibled: false, name: 'Редактировать' },
  ];
  const [menuList, setMenuList] = useState(initialMenu);
  const showMenuItem = (id: number) => {
    menuList.forEach(x => (x.id === id ? (x.visibled = !x.visibled) : x));
    setMenuList([...menuList]);
  };

  const setSelectableMenu = (id: number, isSelected: boolean) => setMenuList(isSelected ? menuList.filter(x => x.id === id) : initialMenu);

  return (
    <ul className='offset-1 col-11'>
      {menuList.map(x => (
        <li key={x.id} className='row company-menu-hover'>
          <div className='row'>
            <div className='offset-md-2 col-md-10 col'>
              <input type='checkbox' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectableMenu(x.id, e.currentTarget.checked)} />
              <span className='mx-1'></span>
              <span style={{ color: '#F2F2F2 !important', fontStyle: 'italic' }} onClick={() => showMenuItem(x.id)}>
                {x.name}
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='offset-md-3 col-md-9 col'>{x.visibled ? <CompanyMenuItem {...{ companyId: props.id, menuItemId: x.id }} /> : <></>}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};
