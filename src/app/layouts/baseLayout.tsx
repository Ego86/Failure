import Header from "@/widgets/header";

import style from "./baseLayout.module.scss"
import Sidebar from "@/features/sidebar/ui/sidebar";
import { Outlet } from "react-router-dom";

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
