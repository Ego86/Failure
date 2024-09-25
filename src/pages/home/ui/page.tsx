import Post from "@/entities/post/ui/post"
import Image from "@/shared/UI/image/image"
import image from "@/shared/assets/загружено (4).png"

const Home = () => {
return (<>
<h1 style={{width: "300px", height: "300px"}}>
hello world!
<Post/>
<Image image={image}></Image>
</h1>
</>
)
}

export default Home