import ImageComponent from "@/shared/ui/image/image.tsx";
import image from "@shared/assets/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg";
import style from "./profileHeaderSection.module.scss";
import Button from "@/shared/ui/button/Button";
import { Settings } from "lucide-react";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
const ProfileHeaderSection = () => {
  return (
    <PlatfomSection className={style.wrapper}>
      <ImageComponent image={image} />
        <div>
          <h2>name</h2>
          <h5>
            descripton: 
            Далеко-далеко, за словесными горами 
            в стране гласных и
            согласных живут рыбные тексты.
          </h5>
        </div>
        <Button><Settings/></Button>
    </PlatfomSection>
  );
};

export default ProfileHeaderSection;
