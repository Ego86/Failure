import { IInputProps } from "@/shared/interface/input";
import { TextField } from "@mui/material";
import { memo } from "react";


const Input = memo<IInputProps>((
  { 
    placeholder,
    value, 
    onChange,
    type = "text",
    variant,
    label,
    helperText,
    color
  }
) => {
  return <TextField 
  variant={variant} 
  type={type}  
  color={color} 
  placeholder={placeholder} 
  value={value} 
  label={label}
  helperText={helperText}
  onChange={onChange} />;
});

export default Input;
