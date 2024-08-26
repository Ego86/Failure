// import ModalNav from "@/features/modalNavigation";
import ModalNav from "@/features/modalNavigation/ui/modalNavigation";
import Button from "@/shared/UI/button/Button";
import Logo from "@/shared/UI/logo/logo";

import { useState } from "react";
import style from "./index.module.scss" 
import { LayoutGrid } from "lucide-react";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={style.header}>
      <Logo color="#fff" />
      <Button  onClick={() => setIsActive((prev) => !prev)}>
        <LayoutGrid  />
        <ModalNav  isActive={isActive} />
      </Button>
    </header>
  );
};

export default Header;
