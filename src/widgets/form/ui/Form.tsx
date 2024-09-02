import Input from "@/shared/UI/input/input";
import { memo } from "react";
import style from "./Form.module.scss";
import { IFormProps } from "../model/interface";
import Button from "@/shared/UI/button/Button";
const Form = memo(
  ({ nameInput, onChange, className, value, onSubmit }: IFormProps) => {
    const inputs = nameInput?.map((name, index: number) => {
      const handleChange = Array.isArray(onChange) ? onChange[index] : onChange;
      const inputValue = Array.isArray(value) ? value[index] : value;
      return (
        <div key={name}>
          <Input
            onChange={(event) => handleChange!(event.target.value)}
            value={inputValue}
            placeholder={name}
          />
        </div>
      );
    });
    return (
      <form className={`${style.form} ${className}`} onSubmit={onSubmit}>
        {inputs}
        <Button>Send</Button>
      </form>
    );
  }
);

export default Form;
