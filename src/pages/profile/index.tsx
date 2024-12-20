import ImageComponent from "@/shared/ui/image/image";
import image from "@shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import styles from "./index.module.scss"
const Profile = () => {
  return (
    <main className={styles.main}>
      <header >
        <ImageComponent image={image}/>
      </header>
    </main>
  );
};

export default Profile;
