/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import Input from "@/shared/UI/input/input";
import ImageComponent from "@/shared/UI/image/image";
import styles from "./inputImg.module.scss";

const InputImg = () => {
  const [imgs, setImgs] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImgs((prev) => [...prev, e?.target?.result as string]);
          if(imgs.length > 3) {
            setImgs(prev => prev.slice(0, 2))
          }
        }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <label className={styles.inputFile}>
      {imgs.length > 0 ? (
        <>
          {imgs.map((img, index) => (
            <ImageComponent key={index} image={img} />
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
  );
};

export default InputImg;
