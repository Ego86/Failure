import Image from "@/shared/ui/image/image.tsx";
import style from "./Slider.module.scss";
import Button from "@/shared/ui/button/Button.tsx";

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
