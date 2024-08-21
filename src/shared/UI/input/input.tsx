import { TextField, TextFieldVariants } from "@mui/material";
import { ChangeEventHandler, memo } from "react";

interface IInputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  type: "text" | "password" | "email",
  variant: TextFieldVariants
}
const Input = memo<IInputProps>((
  { 
    placeholder,
    value, 
    onChange,
    type = "text",
    variant 
  }
) => {
  return <TextField 
  variant={variant} 
  type={type}  
  color="primary" 
  placeholder={placeholder} 
  value={value} 
  onChange={onChange} />;
});

export default Input;
