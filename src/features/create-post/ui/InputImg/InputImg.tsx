/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ImagePlus } from "lucide-react";
import Input from "@/shared/ui/input/input";
import ImageComponent from "@/shared/UI/image/image";
import styles from "./inputImg.module.scss";
import { createPortal } from "react-dom";
import AlertWindow from "@/shared/ui/alertWindow/alertWindow";

const InputImg = ({ setIsImg }: { setIsImg: (event: boolean) => void }) => {
  const [imgs, setImgs] = useState<string[]>([]);
  const [isMoreImgs, setIsMoreImgs] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setIsImg(true);
          if (e.target?.result) {
            setImgs((prev) => [...prev, e?.target?.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };
  useEffect(() => {
      if (imgs.length > 3) {
        setIsMoreImgs(true);
        setIsImg(false)
        setImgs([]);
      }
  }, [imgs]);

  return (
    <>
      {!isMoreImgs
        ? createPortal(
            <AlertWindow>No more than 3 images allowed</AlertWindow>,
            document.body
          )
        : ""}
      <label
        className={`${styles.inputFile} ${imgs.length > 0 ? styles.img : ""}`}
      >
        {imgs.length > 0 ? (
          <>
            {imgs.map((img, index) => (
              <ImageComponent
                className={styles.image}
                key={index}
                image={img}
              />
            ))}
            {imgs.length < 3 ? (
              <>
                <Input type="file" multiple onChange={handleChange} />
                <span>drag and drop photo</span>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <Input
              accept="image/png, image/jpeg"
              type="file"
              multiple
              onChange={handleChange}
            />
            <ImagePlus />
            <span>drag and drop photo</span>
          </>
        )}
      </label>
    </>
  );
};

export default InputImg;
