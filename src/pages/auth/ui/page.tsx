/* eslint-disable @typescript-eslint/no-unused-expressions */
import Form from "@/widgets/form/ui/Form";
import style from "./page.module.scss";
import BackgroundLogo from "@/features/backgroundElements/backgroundLogo/backGroundLogo";

const Auth = () => {
 
  return (
    <main className={style.main}>
      <BackgroundLogo className={style.logo} disable={style.disable}/>
      <Form nameInput={["email", "password"]} />
    </main>
  );
};

export default Auth;
