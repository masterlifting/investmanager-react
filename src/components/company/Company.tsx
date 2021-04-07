/** @format */

import { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import { companyActions } from './store/company-reducer';
import { CompanyMenu } from './CompanyMenu';
import { CompanyProps } from './types/company-types';

export const Company: React.FC<CompanyProps> = props => {
  const dispatch = useDispatch();
  const [isMenu, setIsMenu] = useState(false);

  const companyBlockStyle: CSSProperties = isMenu
    ? {
        border: 'solid .5px grey',
        borderRadius: '10px',
      }
    : {};

  return (
    <li className='row py-2 py-md-1 company-hover' style={companyBlockStyle}>
      <div className='col-12'>
        <div className='row'>
          <span className='col-1'>
            {props.isSelectable ? (
              <input type={'checkbox'} checked={props.company.selected} onChange={() => dispatch(companyActions.changeSelectable(props.company.id))} />
            ) : (
              <></>
            )}
          </span>
          <span className='col-3 col-md-1 text-secondary small'>{props.company.description}</span>
          <span onClick={() => setIsMenu(!isMenu)} className='col-8 col-md-10 text-warning'>
            {props.company.name}
          </span>
        </div>
        {isMenu ? (
          <div className='row'>
            <CompanyMenu />
          </div>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};
