import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/index";
import { useEffect, useState } from "react";
import useWindowSize from "@/shared/hook/useWindowSize";
import Sidebar from "@/shared/UI/sidebar/ui/sidebar";
import style from "./baseLayout.module.scss";

const BaseLayout = () => {
  const [width] = useWindowSize();
  const [isActive, setIsActive] = useState<boolean>(true);
  useEffect(() => {
    if (width <= 500) {
       setIsActive(false);
    } else {
       setIsActive(true);
    }
    return () => {
      setIsActive(isActive)
    }
  }, [width]);
  return (
    <div className={style.wrapper}>
      <Header />
      {isActive && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default BaseLayout;
