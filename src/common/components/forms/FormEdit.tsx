/** @format */

import React from 'react';
import { ICompany } from '../../../components/company/types/company-interfaces';

export type FormElementType<TForm> = {
  title: string;
  name: Extract<keyof TForm, string>;
  component: React.ReactNode;
  params?: { [key: string]: string | number | boolean };
};

export type FormType<T> = FormElementType<T>[];
export const formCompany: FormType<ICompany> = [{ title: 'Название', name: 'name', component: React.Component }];
// type FormType<T> = {
//   title: string;
//   cancelUrl: string;
//   elements: FormElementType<T>[];
//   onSubmit: () => boolean;
// };

// export const FormEditItem: React.FC<IMutableEntity> = props => {
//   const submit = () => Boolean;
//   const dispatch = useDispatch();

//   useEffect(() => {}, [props.id]);

//   return <EditItemPopup<IMutableEntity> {...props} />;
// };

// export function EditItemPopup<TForm>(props: FormType<TForm>): React.ReactElement<TForm> {
//   return (
//     <form onSubmit={props.onSubmit}>
//       <span>{props.title}</span>
//       <div>{renderFormInputs<TForm>(props.elements)}</div>
//       <NavLink to={props.cancelUrl}>
//         <button>Cancel</button>
//       </NavLink>
//     </form>
//   );
// }

export const renderInput = () => {};
export const renderSelect = () => {};
export const renderCheckbox = () => {};
export const renderDate = () => {};

// export function renderFormInputs<TForm>(elements: FormElementType<TForm>[]) {
//   return elements.map((x) => <Input>{x.name}</Input>);
// }