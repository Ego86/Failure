import Image from "@/shared/UI/image/image";
import style from "./Slider.module.scss";
import Button from "@/shared/UI/button/Button";

export const Slider = (imgs = []) => {
  const images = imgs.map(({ img }) => {
    return <Image image={img as string} />;
  });

  return (
    <div className={style.slider}>
      <Button>{"<"}</Button>
      {images}
      <Button>{">"}</Button>
    </div>
  );
};
