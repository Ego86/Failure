import { ReactNode } from "react";
import styles from "./platfromArticle.module.scss";
const PlatfomArticle = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <article className={`${styles.article} ${className}`}>{children}</article>
  );
};

export default PlatfomArticle;
