import { memo } from "react";
import Image from "@/shared/UI/image/image";
import img from "@/shared/assets/загружено (4).png";
import img2 from "@/shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import img3 from "@/shared/assets/1667929102152124336.jpg";
import styles from "./post.module.scss";
import useWindowSize from "@/shared/hook/useWindowSize";

const Post = memo(() => {
  const data = {
    username: "Failure",
    title: "Home",
    text: "loremru10 ",
    img: [img, img2, img3],
  };
  const [width] = useWindowSize();

  return (
    <article className={styles.post} >
      <section className={styles.text}>
        <h2>{data?.title && data?.title}</h2>
        <p>
          {data.text.length >= 400
            ? `${data.text.slice(-data.text.length, 400)} читать полность...`
            : data.text}
        </p>
      </section>
      <section className={styles.images}>
        {data?.img && width > 1000 ? (
          data.img.map((img) => <Image image={img} />)
        ) : (
          <>
            <Image image={data.img[0]} />
            <Image blur image={data.img[1]} />
          </>
        )}
      </section>
      <h2 className={styles.username}>{data.username}</h2>
    </article>
  );
});

export default Post;
