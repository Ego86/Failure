import Image from "@/shared/UI/image/image";
import { memo } from "react";
import img from "@/shared/assets/загружено (4).png";
import img2 from "@/shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import img3 from "@/shared/assets/1667929102152124336.jpg";

import styles from "./post.module.scss";
const Post = memo(() => {
  const data = { title: "Home", text: "loremru10", img: [img, img2, img3] };
  return (
    <article className={styles.post}>
      <section>
        <h2>{data?.title && data?.title}</h2>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных, живут
          рыбные тексты. Возвращайся повстречался вопрос бросил одна
          предупреждал, меня заглавных, всемогущая заманивший языкового пор
          коварных решила! Выйти запятых проектах щеке гор свое?
        </p>
      </section>
      <section>
        {data?.img ? data.img.map((img) => <Image image={img} />) : ""}
      </section>
    </article>
  );
});

export default Post;
