// import { ImagePlus } from "lucide-react";
import Input from "@shared/UI/input/input";
import Form from "@/widgets/form/ui/Form";
import Button from "@shared/UI/button/Button";
import PlatfomArticle from "@/shared/UI/platformArticle/UI/platfomArticle";
import styles from "./create-post.module.scss";
import InputImg from "./InputImg/InputImg";
import { LegacyRef, useEffect, useRef, useState } from "react";

export const CreatePost = () => {
  const formElementRef = useRef();
  const [sizeForm, setSizeForm] = useState<{width: number, height: number}>({width: 0, height: 0})
  useEffect(()=>{
      const resizeObserver = new ResizeObserver((entries) => {
          for(const entry of entries) {
              const {width, height} = entry.contentRect
              setSizeForm({width, height})
              console.log(entries)
        }
        if(formElementRef.current){
            resizeObserver.observe(formElementRef.current)
        }
        return () => {
            if(formElementRef.current){
                resizeObserver.unobserve(formElementRef.current)
            }
        }
       })
  }, [sizeForm, formElementRef])
  return (
    <main className={styles.main}>
      <PlatfomArticle className={`${sizeForm!.height >= 600 ? "flex-wrap": ""} ${styles.wrapper}`}>
        <Form ref={formElementRef as unknown as LegacyRef<HTMLFormElement>}>
          <Input placeholder="Title" />
          <Input placeholder="Text" />
          <Button>create post</Button>
        </Form>
        <InputImg />
      </PlatfomArticle>
    </main>
  );
};
