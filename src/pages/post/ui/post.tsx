/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";
import img from "@/shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import img2 from "@/shared/assets/1667929102152124336.jpg";
import img3 from "@/shared/assets/загружено (4).png";
import Button from "@/shared/ui/button/Button";
import styles from "./post.module.scss";
import { Slider } from "@/entities/slider";
import PostImageSection from "./postSections/postImageSection";
import PostTitleSection from "./postSections/postTitleSection";

export type TypeData = {
  username: string,
  postData: {
    title: string,
    text: string,
    images: string[],
  },
}


const Post = () => {
  // const { id } = useParams();
  const navigate = useNavigate()
  const [data, _setData] = useState<TypeData>({
    username: "Failure",
    postData: {
      title: "Fail",
      text: "knsdlifhailhfaslin asinhdoians odi",
      images: [img, img2, img3],
    },
  });
  const [openSlider, setOpenSlider] = useState<boolean>(false)


  return (
    <main className={styles.main}>
          {openSlider ? <Slider setOpenSlider={setOpenSlider} imgs={data.postData.images} /> : ""}
      <article>
        <Button className={styles.backButton} onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </Button>
        <PostImageSection setOpenSlider={setOpenSlider} data={data}/>
        <PostTitleSection data={data}/>
      </article>
    </main>
  );
};

export default Post;
