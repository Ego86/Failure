import Input from "@/shared/UI/input/input";
import { memo } from "react";
import style from "./Form.module.scss";
import { IFormProps } from "../model/interface";
import Button from "@/shared/UI/button/Button";
const Form = memo(
  ({ nameInput, onChange, className, placeholder, value, onSubmit }: IFormProps) => {
    const inputs = nameInput?.map((name) => {
      return (
        <div key={name}>
          <Input
            label={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        </div>
      );
    });
    return (
      <form className={`${style.form} ${className}`} onSubmit={onSubmit}>
        {inputs}
        <Button color="inherit" variant="outlined" >Send</Button>
      </form>
    );
  }
);

export default Form;
