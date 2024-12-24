import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { CircleHelp, LucideProps } from "lucide-react";
import style from "./menuItems.module.scss"
import { IListComponents } from "../constants/navigation/interface.ts";
type TypeOpenIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
const MenuItems = memo(({ items, OpenIcon, sizeEm = 15 }: { items?: IListComponents[],  OpenIcon?: TypeOpenIcon, sizeEm?: number}) => {
  const [isOpen, setIsOpen] = useState(false)
    return (
    <m.nav className={style.nav}
      layout
      animate={{
        width: isOpen ? `${sizeEm}em` : "50px",
        boxShadow: isOpen
          ? "inset 2px 3px 6px 1px #181818"
          : "2px 3px 6px 1px #181818",
      }}
    >
     <m.button onClick={()=> setIsOpen(prev => !prev)}>{OpenIcon ? <OpenIcon/> : <CircleHelp/>}</m.button>
      <ul className={style.list}>
        {items?.map(({ title, url, Icon }) => {
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
