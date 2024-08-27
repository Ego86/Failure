import style from "./modalNavigation.module.scss";
import { IPropsModelNavigation } from "../model/interface";
import { memo } from "react";
import { listComponents } from  "@/features/constants/navigation/navigation"
import { Link } from "react-router-dom";

const ModalNav = memo(({ isActive = false }: IPropsModelNavigation) => {

  const list = listComponents.map(({ url, name, Icon }, index) => {
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
