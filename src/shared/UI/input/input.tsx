import { IInputProps } from "@/shared/interface/input";
import { memo } from "react";
import style from"./Input.module.scss"

const Input = memo<IInputProps>((
  { 
    placeholder,
    value, 
    onChange,
    type = "text",
  }
) => {
  return <input  
  className={style.input}
  type={type}  
  placeholder={placeholder} 
  value={value} 
  onChange={onChange} />;
});

export default Input;
