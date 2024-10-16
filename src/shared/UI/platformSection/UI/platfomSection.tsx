import { ReactNode } from "react";
import styles from "./platform.module.scss";
const PlatfomSection = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <section className={`${styles.section} ${className}`}>{children}</section>
  );
};

export default PlatfomSection;
