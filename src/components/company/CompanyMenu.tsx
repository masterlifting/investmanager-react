/** @format */
import { useState } from 'react';
import { ICompany, ICompanyMenu } from './services/types/company-interfaces';
import { CompanyMenuHoc } from './CompanyMenuHoc';
import {
  CompanyAdditionalInfo as CompanyAdditional,
  CompanyTransaction,
  CompanyRating,
  CompanyRecommendationToBuy,
  CompanyRecommendationToSell,
  CompanyIndexes,
  CompanyReports,
  CompanyPrices,
  CompanyDividends,
} from './CompanyMenuItems';

export const CompanyMenu: React.FC<ICompany> = company => {
  const initialMenu: ICompanyMenu[] = [
    { id: 1, selected: false, visibled: false, name: 'Дополнительная информация', MenuComponent: CompanyMenuHoc(CompanyAdditional) },
    { id: 2, selected: false, visibled: false, name: 'Транзакции', MenuComponent: CompanyMenuHoc(CompanyTransaction) },
    { id: 3, selected: false, visibled: false, name: 'Рейтинг', MenuComponent: CompanyMenuHoc(CompanyRating) },
    { id: 4, selected: false, visibled: false, name: 'Рекомендация к покупке', MenuComponent: CompanyMenuHoc(CompanyRecommendationToBuy) },
    { id: 5, selected: false, visibled: false, name: 'Рекомендация к продаже', MenuComponent: CompanyMenuHoc(CompanyRecommendationToSell) },
    { id: 6, selected: false, visibled: false, name: 'Индексы', MenuComponent: CompanyMenuHoc(CompanyIndexes) },
    { id: 7, selected: false, visibled: false, name: 'Отчеты', MenuComponent: CompanyMenuHoc(CompanyReports) },
    { id: 8, selected: false, visibled: false, name: 'Цены', MenuComponent: CompanyMenuHoc(CompanyPrices) },
    { id: 9, selected: false, visibled: false, name: 'Дивиденды', MenuComponent: CompanyMenuHoc(CompanyDividends) },
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
            <div className='offset-md-3 col-md-9 col'>{x.visibled ? <x.MenuComponent {...company} /> : <></>}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};
