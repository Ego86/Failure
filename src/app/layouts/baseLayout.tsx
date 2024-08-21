import Header from "@/widgets/header";
import Router from "../router/root";
import style from "./baseLayout.module.scss"

const App = () => {
  return(
    <div className={style.wrapper}>
    <Header/>
    <Router/>
    </div>
)
};

export default App;
