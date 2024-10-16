import { memo, ReactNode } from "react";
import style from "./Form.module.scss";

const Form = memo(
  ({
    className,
    children,
    onSubmit,
  }: {
    className?: string;
    children?: ReactNode 
    onSubmit?: () => void;
  }) => {
    return (
      <form className={`${style.form} ${className}`} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }
);

export default Form;
