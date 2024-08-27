import { listComponents } from "@/features/constants/navigation/navigation";
import { PanelRightOpen } from "lucide-react";
import style from "./sidebar.module.scss";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/shared/UI/button/Button";
import { m } from "framer-motion";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = useMemo(
    () =>
      listComponents.map(({ url, name, Icon }, index) => {
        return (
          <li key={index}>
            <Link to={url}>
              <Icon />
              {isOpen && name}
            </Link>
          </li>
        );
      }),
    [isOpen]
  );

  return (
    <m.nav
      layout
      animate={{ width: isOpen ? "6em" : "48px" }}
      transition={{type: "just",  stiffness: 100}}
      className={style.list}
    >
      <Button
        className={!isOpen ? style.active : ""}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <PanelRightOpen />
      </Button>
      <ul>{list}</ul>
    </m.nav>
  );
};

export default Sidebar;
