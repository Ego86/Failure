import { useState } from "react";
import { LayoutGrid } from "lucide-react";

import Logo from "@/shared/UI/logo/logo";
import Button from "@/shared/UI/button/Button";
import ModalNav from "@/shared/UI/modalNavigation";
import style from "./header.module.scss" 
export const Header = () => {
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


