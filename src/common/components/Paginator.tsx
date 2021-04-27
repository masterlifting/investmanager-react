/** @format */

import React, { CSSProperties, useState } from 'react';
import { IPagination } from '../types/common-interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../components/company/services/store/company-thunks';
import { companyActions } from '../../components/company/services/store/company-reducer';
import { getPhrase } from '../services/common-selectors';

export const Paginator: React.FC<IPagination> = props => {
  const phrase = useSelector(getPhrase);
  const dipatch = useDispatch();
  const [portionNumber, setPortionNumber] = useState(1);

  //pages configuration
  const pagesCount: number = Math.ceil(props.total / props.limit);
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //page portions configureation
  const portionCount = Math.ceil(pagesCount / props.pagePortionSize);
  const leftPortionNumber = (portionNumber - 1) * props.pagePortionSize + 1;
  const rightPortionNumber = portionNumber * props.pagePortionSize;

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
            prev
          </span>
        )}
        {pages
          .filter(x => x >= leftPortionNumber && x <= rightPortionNumber)
          .map(x => (
            <span
              key={x}
              style={x === props.page ? selectedPageStyle : unselectedPageStyle}
              onClick={() => {
                dipatch(fetchCompanies(x, props.limit, phrase));
                dipatch(companyActions.setPaginationPage(x));
              }}
            >
              {x}
            </span>
          ))}
        {portionCount > portionNumber && (
          <span style={portionStyle} className='ml-2' onClick={() => setPortionNumber(portionNumber + 1)}>
            next
          </span>
        )}
      </div>
    </div>
  );
};
