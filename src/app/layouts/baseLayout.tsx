import Header from "@/widgets/header";
import Router from "../router/root";
import style from "./baseLayout.module.scss"
import Sidebar from "@/features/sidebar/ui/sidebar";

const App = () => {
  return(
    <div className={style.wrapper}>
    <Header/>
    <Sidebar/>
    <Router/>
    </div>
)
};

export default App;
