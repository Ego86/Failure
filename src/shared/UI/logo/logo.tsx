import { memo } from "react";
import Image from "@/shared/assets/reshot-icon-facebook-EAQUC4LBMV.svg?react";
import { Link } from "react-router-dom";
interface ILogo {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Logo = memo(({ width = 40, height = 40, color, className }: ILogo) => {
  return (
    <Link to="/">
      <Image className={className} width={width} height={height} fill={color} />
    </Link>
  );
});

export default Logo;
