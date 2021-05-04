/** @format */

import React, { CSSProperties, useState } from 'react';
import { IFilter, IPagination } from '../types/common-interfaces';
import { useDispatch } from 'react-redux';
import { fetchCompanies } from '../../components/company/services/store/company-thunks';
import { companyActions } from '../../components/company/services/store/company-reducer';
type PaginatorType = {
  pagination: IPagination;
  filter?: IFilter;
};
export const Paginator: React.FC<PaginatorType> = props => {
  const dipatch = useDispatch();
  const [portionNumber, setPortionNumber] = useState(1);

  //pages configuration
  const pagesCount: number = Math.ceil(props.pagination.total / props.pagination.limit);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //page portions configureation
  const portionCount = Math.ceil(pagesCount / props.pagination.pagePortionSize);
  const leftPortionNumber = (portionNumber - 1) * props.pagination.pagePortionSize + 1;
  const rightPortionNumber = portionNumber * props.pagination.pagePortionSize;

  //styles
  const portionStyle: CSSProperties = { cursor: 'pointer', color: 'gray' };
  const selectedPageStyle: CSSProperties = { cursor: 'pointer', padding: '0 6px', fontWeight: 'bold', color: 'gold' };
  const unselectedPageStyle: CSSProperties = { cursor: 'pointer', padding: '0 6px' };
  //render
  return (
    <div className='row'>
      <div className='col-12 text-center'>
        {portionNumber > 1 && (
          <span style={portionStyle} className='mr-2' onClick={() => setPortionNumber(portionNumber - 1)}>
            назад
          </span>
        )}
        {pages
          .filter(x => x >= leftPortionNumber && x <= rightPortionNumber)
          .map(x => (
            <span
              key={x}
              style={x === props.pagination.page ? selectedPageStyle : unselectedPageStyle}
              onClick={() => {
                dipatch(fetchCompanies(x, props.pagination.limit, props.filter?.phrase));
                dipatch(companyActions.setCurrentItemsPage(x));
              }}
            >
              {x}
            </span>
          ))}
        {portionCount > portionNumber && (
          <span style={portionStyle} className='ml-2' onClick={() => setPortionNumber(portionNumber + 1)}>
            вперед
          </span>
        )}
      </div>
    </div>
  );
};
