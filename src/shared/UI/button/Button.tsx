import { IButtonProps } from "@/shared/interfaces/button";
import style from "./button.module.scss"



const Button = (
  { 
    children,
    onClick, 
    className, 
    isActive = false
  }: IButtonProps ) => {
  const button: JSX.Element = ( 
    <button
    className={`${style.button} ${className} ${isActive && style.active}`}  
    onClick={onClick}>
    {children}
    </button>
  );

  return button
};

export default Button;
