import { Dispatch, SetStateAction } from "react";

export interface IFormProps {
  nameInput?: Array<string>;
  className?: string;
  onChange?: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string>>[];
    // | Array<ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>
    // | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  value?: Array<string | number> | string | number;
  placeholder?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
