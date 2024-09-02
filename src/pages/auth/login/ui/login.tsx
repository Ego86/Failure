/* eslint-disable @typescript-eslint/no-unused-expressions */
import Form from "@/widgets/form/ui/Form";
import style from "./login.module.scss";
import MenuItems from "@/features/menuItems/menuItems";
import { LogIn, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import { useGetLoginApiQuery } from "@/shared/store/api/loginApi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {data} = useGetLoginApiQuery({email, password})
  const menu = [
    { title: "registred", url: "./registred", Icon: LogIn },
    { title: "question", url: "./questuion", Icon: MessageCircleQuestion },
  ];
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
console.log(data)
  };
  return (
    <main className={style.main}>
      <section>
        <h1>Login</h1>
        <Form
          value={[email, password]}
          onSubmit={handleSubmit}
          onChange={[setEmail, setPassword]}
          nameInput={["email", "password"]}
        />
        <MenuItems items={menu} />
      </section>
    </main>
  );
};
;
