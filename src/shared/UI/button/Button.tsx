import { IButtonProps } from "@/shared/interface/button";
import { Button as ButtonUI } from "@mui/material";




const Button = (
  { 
    children,
    onClick, 
    className, 
    variant = "text",
    color
  }: IButtonProps ) => {
  const button: JSX.Element = ( 
    <ButtonUI 
    color={color}
    className={className} 
    variant={variant} 
    onClick={onClick}>
    {children}
    </ButtonUI>
  );

  return button
};

export default Button;
