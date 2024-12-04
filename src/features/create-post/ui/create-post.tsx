import Input from "@shared/ui/input/input";
import Form from "@/shared/ui/form/ui/Form";
import Button from "@shared/UI/button/Button";
import PlatfomArticle from "@/shared/ui/platformArticle/UI/platfomArticle";
import styles from "./create-post.module.scss";
import InputImg from "./InputImg/InputImg";
import { useState } from "react";
// import { useRef, } from "react";
// import useElementSize from "@/shared/hook/useElementSize";

export const CreatePost = () => {
const [isImg, setIsImg] = useState<boolean>(false)

  return (
    <main className={styles.main}>
      <PlatfomArticle
        className={`${isImg ? styles.wrap : ""} ${styles.wrapper}`}
      >
        <Form>
          <Input placeholder="Title" />
          <Input placeholder="Text" />
          <Button>create post</Button>
        </Form>
        <InputImg setIsImg={setIsImg} />
      </PlatfomArticle>
    </main>
  );
};
