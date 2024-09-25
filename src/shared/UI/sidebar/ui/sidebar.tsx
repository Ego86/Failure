import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { listComponents } from "../../constants/navigation/navigation";
import style from "./sidebar.module.scss";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = useMemo(
    () =>
      listComponents.map(({ url, title, Icon }, index) => {
        return (
          <li key={index}>
            <Link to={url}>
              <Icon className={isOpen ? style.icon : ""} />
              {isOpen ? title : ""}
            </Link>
          </li>
        );
      }),
    [isOpen]
  );

  return (
    <m.nav
      layout
      animate={{
        width: isOpen ? "6.2em" : "50px",
        boxShadow: isOpen
          ? "inset 2px 3px 6px 1px #181818"
          : "2px 3px 6px 1px #181818",
      }}
      transition={{ type: "just", stiffness: 200 }}
      className={style.list}
    >
      <m.button
      animate={{x: isOpen? 1 : 0 }}
      transition={{type: "just"}}
        className={!isOpen ? style.active : ""}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <PanelRightOpen /> : <PanelLeftOpen/>}
      </m.button>
      <ul>{list}</ul>
    </m.nav>
  );
};

export default Sidebar;
