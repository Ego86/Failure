import { IInput } from "@/shared/interfaces/input";
import React, { memo } from "react";
import style from"./Input.module.scss"

const Input = memo<IInput>((
  { 
    className,
    ...props
  }
) => {
  return <input 
  className={`${className} ${style.input}`}
  {...props} />;
});

export default Input;
