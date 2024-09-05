import Image from "@/shared/UI/image/image";
import { memo } from "react";
import img from "@/shared/assets/загружено (4).png"
import styles from "./post.module.scss"
const Post = memo(() => {
    const data = { title: "Home", text: "loremru10", img: [img] }
    return (
      <section className={styles.post}>
        <h2>{data?.title && data?.title}</h2>
        <p>{data?.text && data.text}</p>
        {data?.img ? 
        data.img.map((img) => <Image  image={img}/>) 
         : ""}
      </section>
    )
  
});

export default Post;
