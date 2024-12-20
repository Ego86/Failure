import { IButton } from "@/shared/interfaces/button";
import style from "./button.module.scss"
import { useFormStatus } from "react-dom";
import { JSX } from "react";



const Button = (
  { 
    isActive = false,
    className,
    status,
    children,
    ...props
  }: IButton) => {
    const {pending} = useFormStatus()
  const button: JSX.Element = ( 
    <button
    className={`${style.button} ${className} ${isActive && style.active}`}  
    {...props}>
    {pending? status :children}
    </button>
  );

  return button
};

export default Button;
