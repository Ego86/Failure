import { Link } from "react-router-dom";
import { listComponents } from "../constants/navigation/navigation";
import styles from "./tabBarMobile.module.scss";
const TabBarMobile = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {listComponents.map(({ title, Icon, url }) => {
          return (
            <li key={title}>
              <Link to={url}>
                <Icon />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabBarMobile;
