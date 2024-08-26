
import { ChangeEventHandler } from "react";

export interface IInputProps {
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    type?: "text" | "password" | "email",
    // variant?: 
    // label?: string/
    // helperText?: string
    // color?: "primary" | "secondary" | "success" | "error" | "info" | "warning"
  }