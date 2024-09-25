import { Outlet } from "react-router-dom";
import {Header} from "@/widgets/header/index";
import style from "./baseLayout.module.scss"
import Sidebar from "@/shared/UI/sidebar/ui/sidebar";

const BaseLayout = () => {
  return(
    <div className={style.wrapper}>
    <Header/>
    <Sidebar/>
    <Outlet/>
    </div>
)
};

export default BaseLayout;
