import Button from "@/shared/ui/button/Button" 
import Image from "@/shared/ui/image/image" 
import { MoveDiagonal } from "lucide-react"
import styles from "../post.module.scss" 
import { TypeData } from "../post"
import { Dispatch, SetStateAction } from "react"

const PostImageSection = ({data, setOpenSlider}: {data: TypeData, setOpenSlider: Dispatch<SetStateAction<boolean>>}) => (<section className={styles.imgSection}>
  {data.postData.images.length > 1 ? (
    data.postData.images.map((img, index) => (
      <Image key={index} image={img} />
    ))
  ) : (
    <Image image={data.postData.images[0]} />
  )}
    <Button onClick={() => setOpenSlider(true)}><MoveDiagonal/></Button>
</section>)

export default PostImageSection