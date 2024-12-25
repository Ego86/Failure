 
 
 
import Form from "@/shared/ui/form/ui/Form";
import styles from "./login.module.scss";
import Input from "@/shared/ui/input/input";
import Button from "@/shared/ui/button/Button";
import TabBarMobile from "@/shared/ui/tabBarMobile/tabBarMobile";



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
        <TabBarMobile/>
      </section>
    </main>
  );
};
export default Login