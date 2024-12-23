/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";
import { MoveDiagonal } from 'lucide-react';
import img from "@/shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import img2 from "@/shared/assets/1667929102152124336.jpg";
import img3 from "@/shared/assets/загружено (4).png";
import Image from "@/shared/ui/image/image.tsx";
import Button from "@/shared/ui/button/Button";
import styles from "./post.module.scss";
const Post = () => {
  // const { id } = useParams();
  const navigate = useNavigate()
  const [data, _setData] = useState({
    username: "Failure",
    postData: {
      title: "Fail",
      text: "knsdlifhailhfaslin asinhdoians odi",
      images: [img, img2, img3],
    },
  });
  
   

  return (
    <main className={styles.main}>
      <article>
        <Button className={styles.backButton} onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </Button>
        <section className={styles.imgSection}>
          {data.postData.images.length > 1 ? (
            data.postData.images.map((img, index) => (
              <Image key={index} image={img} />
            ))
          ) : (
            <Image image={data.postData.images[0]} />
          )}
          <Button><MoveDiagonal/></Button>
        </section>
        <section className={styles.textWrapper}>
          <section className={styles.userDataSection}>
            <h2>{data.username}</h2>
            <Button>suscribe</Button>
          </section>
          <section className={styles.mainSection}>
            <h1>{data.postData.title}</h1>
            <p>{data.postData.text}</p>
          </section>
        </section>
      </article>
    </main>
  );
};

export default Post;
