import style from "./image.module.scss";
const ImageComponent = ({
  className,
  blur,
  image,
  alt,
}: {
  className?: string;
  blur?: boolean;
  image: string
  alt?: string;
}) => {
  return (
    <img
      className={`${blur ? style.blur : ""} ${style.img} ${className}`}
      src={image}
      draggable={false}
      alt={alt}
    />
  );
};

export default ImageComponent;
