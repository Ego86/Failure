/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import Form from "@/shared/ui/form/ui/Form";
import styles from "./login.module.scss";
import MenuItems from "@/shared/ui/menuItems/menuItems";
import { menu } from "../../constant/constant";
import Input from "@/shared/ui/input/input";
import Button from "@/shared/ui/button/Button";



 const Login = () => {
  const handleSubmit = (formData: FormData) => {
   const email = formData.get("email")
   console.log(email)
  //  const password = formData.get("Password")
  //  use({email, password})
  };
  return (
    <main className={styles.main}>
      <section>
        <h1>Login</h1>
        <Form
          action={handleSubmit}
        >
          <Input name="email" placeholder="Email"/>
          <Input name="password" placeholder="Password"/>
          <Button>Auth</Button>
        </Form>
        <MenuItems items={menu} sizeEm={15} />
      </section>
    </main>
  );
};
export default Login