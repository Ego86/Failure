import {  m } from "framer-motion"
import { Loader2 } from "lucide-react"
const Loading = () => {

return (
<>
<m.div initial={{rotate: 0}} transition={{repeat: Infinity, duration: 2}} animate>
  <Loader2 style={{ display: "inline-block" }} />
</m.div>
</>
)
}

export default Loading