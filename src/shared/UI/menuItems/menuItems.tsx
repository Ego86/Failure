import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { CircleHelp } from "lucide-react";
import style from "./menuItems.module.scss"
import { IListComponents } from "../constants/navigation/interface";
const MenuItems = memo(({ items }: { items: IListComponents[] }) => {
  const [isOpen, setIsOpen] = useState(false)
    return (
    <m.nav className={style.nav}
      layout
      animate={{
        width: isOpen ? "15.2em" : "50px",
        boxShadow: isOpen
          ? "inset 2px 3px 6px 1px #181818"
          : "2px 3px 6px 1px #181818",
      }}
    >
     <m.button onClick={()=> setIsOpen(prev => !prev)}><CircleHelp/></m.button>
      <ul className={style.list}>
        {items.map(({ title, url, Icon }) => {
          return (
            <li key={title}>
              <Link to={url}>
                <Icon />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </m.nav>
  );
});

export default MenuItems;
