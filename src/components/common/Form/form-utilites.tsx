import { FormElementType } from "./form-edit";

export function renderFormInputs<TForm>(elements: FormElementType<TForm>[]) {
  return elements.map((x) => <Input>{x.name}</Input>);
}
