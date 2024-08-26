import Input from "@/shared/UI/input/input";
import { memo } from "react";
import style from "./Form.module.scss";
import { IFormProps } from "../model/interface";
import Button from "@/shared/UI/button/Button";
const Form = memo(
  ({ nameInput, onChange, className, value, onSubmit }: IFormProps) => {
    const inputs = nameInput?.map((name) => {
      return (
        <div key={name}>
          <Input
            onChange={onChange}
            value={value}
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
