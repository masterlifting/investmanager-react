/** @format */

import { CompanyMenuItemProps } from './services/types/company-types';

export const CompanyMenuItem: React.FC<CompanyMenuItemProps> = props => {
  return (
    <div className='row text-success'>
      <div className='col'>
        <div className="row">
          <div className="col">Short info</div>
        </div>
        <div className="row">
          <div className="col">Detail</div>
        </div>
        </div>
    </div>
  );
};

// const getMenuAction = (menuId:number,companyId:number) =>{
//   switch (menuId) {
//     case 1:
      
//       break;
  
//     default:
//       break;
//   }
// }
