/* eslint-disable @typescript-eslint/no-unused-expressions */
import Form from "@/widgets/form/ui/Form";
import style from "./page.module.scss";
import MenuItems from "@/features/menuItems/menuItems";
import { LogIn, MessageCircleQuestion } from "lucide-react";
const Auth = () => {
  const menu = [
    { title: "registred", url: "./registred", Icon: LogIn },
    { title: "question", url: "./questuion", Icon: MessageCircleQuestion },
  ];
  return (
    <main className={style.main}>
      <section>
        <h1>Login</h1>
        <Form nameInput={["email", "password"]} />
        <MenuItems items={menu} />
      </section>
    </main>
  );
};

export default Auth;
