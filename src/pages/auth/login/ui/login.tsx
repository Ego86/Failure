/* eslint-disable @typescript-eslint/no-unused-expressions */
import Form from "@/widgets/form/ui/Form";
import styles from "./login.module.scss";
import MenuItems from "@/features/menuItems/menuItems";
import { LogIn, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const menu = [
  { title: "registred", url: "./registred", Icon: LogIn },
  { title: "question", url: "./questuion", Icon: MessageCircleQuestion },
];

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  return (
    <main className={styles.main}>
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
