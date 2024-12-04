import { forwardRef, memo} from "react";
import style from "./Form.module.scss";
import { TypeForm } from "@/shared/interfaces/form";

const Form = memo<TypeForm>(forwardRef<HTMLFormElement, TypeForm>(({ className, children, ...props }, ref) => {
  return (
    <form ref={ref} className={`${style.form} ${className}`} {...props}>
      {children}
    </form>
  );
}));

export default Form;
