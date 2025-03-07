import { lazy, memo, Suspense } from "react";
import Image from "@/shared/ui/image/image.tsx";
import img from "@/shared/assets/загружено (4).png";
import img2 from "@/shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import styles from "./post.module.scss";
import useWindowSize from "@/shared/hook/useWindowSize";
import { Link } from "react-router-dom";
// import  from "@/shared/ui/platformSection/UI/platfomSection";
const PlatfomSection = lazy(
  () => import("@/shared/ui/platformSection/UI/platfomSection")
);
const Post = memo(({...props}) => {
  const data = {
    username: "Failure",
    title: "Home",
    text: "loremru10 ",
    img: [img, img2],
  };

  const [width] = useWindowSize();
  const imgAllRender = (
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
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlatfomSection {...props} className={styles.post}>
        <Link to="/post/1">
          <section className={styles.text}>
            <h2>{data?.title && data?.title}</h2>
            <p>
              {data.text.length >= 400
                ? `${data.text.slice(
                    -data.text.length,
                    400
                  )} читать полность...`
                : data.text}
            </p>
          </section>
          {imgAllRender}
        </Link>
        <h2 className={styles.username}>{data.username}</h2>
      </PlatfomSection>
    </Suspense>
  );
});

export default Post;
