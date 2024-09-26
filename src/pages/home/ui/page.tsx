import Post from "@/entities/post/ui/post"
import Image from "@/shared/UI/image/image"
import image from "@/shared/assets/загружено (4).png"

const Home = () => {
return (<>
<h1 style={{width: "100px", height: "100px"}}>
hello world!
</h1>
<Post/>
<Image image={image}></Image>
</>
)
}

export default Home