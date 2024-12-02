import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/index";
import useWindowSize from "@/shared/hook/useWindowSize";
import Sidebar from "@/shared/UI/sidebar/ui/sidebar";
import style from "./baseLayout.module.scss";

const BaseLayout = () => {
  const [width] = useWindowSize();
  
  return (
    <div className={style.wrapper}>
      <Header />
      {width >= 1000 && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default BaseLayout;
