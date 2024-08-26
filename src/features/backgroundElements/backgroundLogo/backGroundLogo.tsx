import useWindowSize from "@/shared/hook/useWindowSize";
import Logo from "@/shared/UI/logo/logo";
import { memo, useEffect, useState } from "react";

const BackgroundLogo = memo(({
     className,
     disable
}: {className: string, disable: string}) => {
    const [sizeLogo, setSizeLogo] = useState({ width: 300, height: 300 });
    const [windowWidth] = useWindowSize();
    const [isDisableLogo, setIsDisableLogo] = useState(false);
    useEffect(() => {
      if (windowWidth <= 900 && sizeLogo.width >= 150) {
        setSizeLogo((prev) => ({
          width: prev.width / 2,
          height: prev.height / 2,
        }));
      } else if (windowWidth <= 730) {
        setIsDisableLogo(true);
      }
      return () => {
        setSizeLogo(sizeLogo);
      };
    }, [windowWidth]);
    return (
        <Logo
        width={sizeLogo.width}
        height={sizeLogo.height}
        className={`${className} ${isDisableLogo && disable}`}
      />
    )
})

export default BackgroundLogo