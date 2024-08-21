import style from "./modalNavigation.module.scss";
import { IPropsModelNavigation } from "../model/interface";
import { memo } from "react";
import { useMemo } from "react";
import { ILinkModalNav } from "../model/interface";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const ModalNav = memo(({ isActive = false }: IPropsModelNavigation) => {
  const url: ILinkModalNav[] = useMemo(() => 
    [
      { url: "/profile", name: "profile", Icon: <AccountBoxIcon /> },
      { url: "/frinds", name: "friends", Icon: <PeopleIcon /> },
      { url: "/exit", name: "exit", Icon: <LogoutIcon /> },
    ], []);
    const list = url.map(({ url, name, Icon }, index) => {
      return (
        <li key={index}>
          <Link to={url}>
            {Icon}
            {name}
          </Link>
        </li>
      );
    });
  
  return (
    <nav className={`${style.navList} ${isActive ? style.Active : ""}`}>
      <ul>{list}</ul>
    </nav>
  );
});

export default ModalNav;
