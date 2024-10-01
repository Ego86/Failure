import { LayoutGrid } from "lucide-react";
import Logo from "@/shared/UI/logo/logo";
import style from "./header.module.scss";
import useWindowSize from "@/shared/hook/useWindowSize";
import MenuItems from "@/shared/UI/menuItems/menuItems";
import { listComponents } from "@/shared/UI/constants/navigation/navigation";
import { Link } from "react-router-dom";
export const Header = () => {
  const [width] = useWindowSize();
  return (
    <header className={style.header}>
      <Link to="/">
        <Logo color="#fff" />
      </Link>
      {width <= 800 && (
        <MenuItems sizeEm={17} OpenIcon={LayoutGrid} items={listComponents} />
      )}
    </header>
  );
};
