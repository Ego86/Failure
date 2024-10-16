import { ImagePlus } from "lucide-react";
import Input from "@shared/UI/input/input";
import Form from "@/widgets/form/ui/Form";
import Button from "@shared/UI/button/Button";
import PlatfomArticle from "@/shared/UI/platformArticle/UI/platfomArticle";
import styles from "./create-post.module.scss";
import { useState } from "react";
import Image from "@/shared/UI/image/image";
const CreatePost = () => {
  const [inputImg, setInputImg] = useState<string | null>([]);
  console.log(inputImg);
  const handleImageUploader = (event) => {
    const img = event.target.files[0];
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImg(prev => prev.push(reader.result));
      };
      reader.readAsDataURL(img);
    }
  };
  return (
    <main className={styles.main}>
      <PlatfomArticle className={styles.wrapper}>
        <Form>
          <Input placeholder="Title" />
          <Input placeholder="Text" />
          <Button>create post</Button>
        </Form>
        <label className={styles.inputFile}>
          {inputImg?.length > 0 ? (
            <>
              {inputImg.map((img, index) => {
                return <Image key={index} image={img} />;
              })}
              <Input
                type="file"
                value={inputImg!}
                onChange={handleImageUploader}
              />
              <ImagePlus />
              <span>drag and drop photo</span>
            </>
          ) : (
            <>
              <Input
                type="file"
                value={inputImg!}
                onChange={handleImageUploader}
              />
              <ImagePlus />
              <span>drag and drop photo</span>
            </>
          )}
        </label>
      </PlatfomArticle>
    </main>
  );
};

export default CreatePost;
