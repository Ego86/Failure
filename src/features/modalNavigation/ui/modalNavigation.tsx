import style from "./modalNavigation.module.scss";
import { IPropsModelNavigation } from "../model/interface";
import { memo } from "react";
import { useMemo } from "react";
import { ILinkModalNav } from "../model/interface";
import { Link } from "react-router-dom";
import { LogOut, User, Users } from "lucide-react";

const ModalNav = memo(({ isActive = false }: IPropsModelNavigation) => {
  const url: ILinkModalNav[] = useMemo(
    () => [
      { url: "/profile", name: "profile", Icon: User },
      { url: "/frinds", name: "friends", Icon: Users },
      { url: "/exit", name: "exit", Icon: LogOut },
    ],
    []
  );
  const list = url.map(({ url, name, Icon }, index) => {
    return (
      <li key={index}>
        <Link to={url}>
          <Icon />
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
