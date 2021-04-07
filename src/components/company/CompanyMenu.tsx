/** @format */

import { ICompanyMenu } from './types/company-interfaces';

const companyMenu: ICompanyMenu[] = [
  { id: 1, selected: false, name: 'Дополнительная информация' },
  { id: 2, selected: false, name: 'Транзакции' },
  { id: 3, selected: false, name: 'Рейтинг' },
  { id: 4, selected: false, name: 'Рекомендация к покупке' },
  { id: 5, selected: false, name: 'Рекомендация к продаже' },
  { id: 6, selected: false, name: 'Индексы' },
  { id: 7, selected: false, name: 'Отчеты' },
  { id: 8, selected: false, name: 'Цены' },
  { id: 9, selected: false, name: 'Дивиденды' },
  { id: 10, selected: false, name: 'Редактировать' }
];

export const CompanyMenu: React.FC = () => {
  return (
    <ul className='offset-1 col-11'>
      {companyMenu.map(x => (
        <li key={x.id} className='row text-white company-menu-hover'>
          <div className='col'>
            <input type='checkbox' />
            <span className='mx-1'></span>
            <span onClick={() => {}}>{x.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};