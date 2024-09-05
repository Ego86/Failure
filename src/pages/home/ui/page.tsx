import Image from "@/shared/UI/image/image"
import image from "@/shared/assets/загружено (4).png"
import Post from "@/widgets/post/ui/post"
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