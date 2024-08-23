import { ChangeEventHandler } from "react";

export interface IFormProps {
    nameInput?: Array<string>,
    className?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>; 
    value?: string,
    placeholder?: string,
    onSubmit?:  React.FormEventHandler<HTMLFormElement>
}