import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { renderFormInputs } from "./form-utilites";

type InputComponentType = {};
type SelectComponentType = {};

type EditEntityType = {
  id: number;
  name: string;
};

export type FormElementType<TForm> = {
  title: string;
  name: Extract<keyof TForm, string>;
  component: React.ReactNode;
};

type FormType<T> = {
  title: string;
  cancelUrl: string;
  elements: FormElementType<T>[];
  onSubmit: () => boolean;
};

export const FormEditItem: React.FC<EditEntityType> = (props) => {
  const submit = () => Boolean;
  const dispatch = useDispatch();

  useEffect(() => {}, [props.id]);

  return <EditItemPopup<EditEntityType> {...props} />;
};

export function EditItemPopup<TForm>(
  props: FormType<TForm>
): React.ReactElement<TForm> {
  return (
    <form onSubmit={props.onSubmit}>
      <span>{props.title}</span>
      <div>{renderFormInputs<TForm>(props.elements)}</div>
      <NavLink to={props.cancelUrl}>
        <button>Cancel</button>
      </NavLink>
    </form>
  );
}

export const renderInput = () => {};
export const renderSelect = () => {};
export const renderCheckbox = () => {};
export const renderDate = () => {};
