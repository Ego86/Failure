import Logo from "@/shared/ui/logo/logo";
import style from "./header.module.scss";

import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <Logo color="#fff" />
      </Link>
      
    </header>
  );
};
