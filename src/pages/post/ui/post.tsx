/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowBigLeft } from 'lucide-react';
import img from "@/shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import img2 from "@/shared/assets/1667929102152124336.jpg";
import img3 from "@/shared/assets/загружено (4).png";
import Image from "@/shared/UI/image/image";
import Button from "@/shared/UI/button/Button";
import styles from "./post.module.scss";
const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    username: "Failure",
    postData: {
      title: "Fail",
      text: "knsdlifhailhfaslin asinhdoians odi",
      images: [img, img2, img3],
    },
  });
  useEffect(() => {
    const fc = (event: { send: (params: string | undefined) => void }) => {
      event.send(id);
    };

    return;
  });

  return (
    <main className={styles.main}>
      <article>
        <Button><ArrowBigLeft/></Button>
        <section className={styles.imgSection}>
          {data.postData.images.length > 1 ? (
            data.postData.images.map((img, index) => (
              <Image key={index} image={img} />
            ))
          ) : (
            <Image image={data.postData.images[0]} />
          )}
        </section>

        <section className={styles.userContentSection}>
          <h2>{data.username}</h2>
          <Button>suscribe</Button>
        </section>
        <section className={styles.mainSection}>
          <h1>{data.postData.title}</h1>
          <p>{data.postData.text}</p>
        </section>
      </article>
    </main>
  );
};

export default Post;
