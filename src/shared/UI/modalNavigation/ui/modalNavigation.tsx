import { memo } from "react";
import { Link } from "react-router-dom";

import { IPropsModelNavigation } from "../model/interface";
import { listComponents } from "../../constants/navigation/navigation";
import style from "./modalNavigation.module.scss";

const ModalNav = memo(({ isActive = false }: IPropsModelNavigation) => {

  const list = listComponents.map(({ url, title, Icon }, index) => {
    return (
      <li key={index}>
        <Link to={url}>
          <Icon />
          {title}
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
