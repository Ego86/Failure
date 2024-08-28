import { IButtonProps } from "@/shared/interface/button";
import style from "./button.module.scss"



const Button = (
  { 
    children,
    onClick, 
    className, 

  }: IButtonProps ) => {
  const button: JSX.Element = ( 
    <button
    className={`${style.button} ${className}`}  
    onClick={onClick}>
    {children}
    </button>
  );

  return button
};

export default Button;
