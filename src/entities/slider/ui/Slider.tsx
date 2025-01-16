import Image from "@/shared/ui/image/image.tsx";
import styles from "./Slider.module.scss";
import Button from "@/shared/ui/button/Button.tsx";
import { ChevronLeft, ChevronRight, DoorClosed } from "lucide-react";
import { Dispatch, memo, SetStateAction, useState } from "react";

export const Slider = memo(({setOpenSlider, imgs}: {setOpenSlider: Dispatch<SetStateAction<boolean>>,imgs: string[]}) => {
  const [countImg, setCountImg] = useState(0)
  const images = imgs.map((img, index) => {
    if(countImg === index){
      return <Image className={styles.active} image={img} />
    }
  });

  const handleClickLeft = () => {
    if(countImg <= 0){
      setCountImg(imgs.length - 1)
    }else{
      setCountImg(prev=> prev -= 1)
    }
  }
  const handleClickRight = () => {
    if(countImg >= imgs.length - 1){
      setCountImg(0)
    }else{
      setCountImg(prev=> prev += 1)
    }
  }
  
    return (
      <div className={styles.slider}>
      <Button onClick={() => setOpenSlider((prev)=> !prev)} className={styles.closeBtn}><DoorClosed/></Button>
      <Button onClick={handleClickLeft}><ChevronLeft/></Button>
      {images}
      <Button onClick={handleClickRight}><ChevronRight /></Button>
    </div>
  );
});
