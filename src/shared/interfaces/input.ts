import { ChangeEventHandler } from "react";

export interface IInputProps {
  [key: string]: string | number | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined ;
  placeholder?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  type?: "text" | "password" | "email" | "file";
}
