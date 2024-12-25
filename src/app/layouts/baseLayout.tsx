import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/index";
import useWindowSize from "@/shared/hook/useWindowSize";
import Sidebar from "@/shared/ui/sidebar/ui/sidebar";
import style from "./baseLayout.module.scss";
import TabBarMobile from "@/shared/ui/tabBarMobile/tabBarMobile";

const BaseLayout = () => {
  const [width] = useWindowSize();
  
  return (
    <div className={style.wrapper}>
      <Header />
      {width >= 1000 ? <Sidebar />: <TabBarMobile/>}
      <Outlet />
    </div>
  );
};

export default BaseLayout;
