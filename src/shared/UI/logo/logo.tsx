import { memo } from "react";
import Img from "@/shared/assets/reshot-icon-facebook-EAQUC4LBMV.svg?react";
interface ILogo {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Logo = memo(({ width = 40, height = 40, color, className }: ILogo) => {
  return (
      <Img className={className} width={width} height={height} fill={color} />

  );
});

export default Logo;
