import Post from "@/entities/post/ui/post"
import Loading from "@/shared/ui/loading/loading"
const Home = () => {
return (<>
{/* <h1 style={{width: "100px", height: "100px"}}>
hello world!
</h1> */}

    <Loading></Loading>

<Post/>
</>
)
}

export default Home