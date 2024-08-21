// import ModalNav from "@/features/modalNavigation";
import ModalNav from "@/features/modalNavigation/ui/modalNavigation";
import Button from "@/shared/UI/button/Button";
import Logo from "@/shared/UI/logo/logo";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
import style from "./index.module.scss" 
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={style.header}>
      <Logo />
      <Button color="inherit"  onClick={() => setIsActive((prev) => !prev)}>
        <AppsIcon  />
        <ModalNav  isActive={isActive} />
      </Button>
    </header>
  );
};

export default Header;
