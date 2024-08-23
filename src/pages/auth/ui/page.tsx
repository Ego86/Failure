import Form from "@/widgets/form/ui/Form"
import style from "./page.module.scss"
import Logo from "@/shared/UI/logo/logo"
import { useEffect, useState } from "react"

const Auth = () => {
const [sizeLogo, setSizeLogo] = useState({width: 300, height:300}) 
useEffect(() => {
const windowWidth:number = window.innerWidth
if(windowWidth <= 900){
    return setSizeLogo((prev) => ({width: (prev.width / 2), height: (prev.height / 2) }))
}
// console.log(sizeLogo)
return ;
},[sizeLogo])
return (
    <main className={style.main}>
        <Logo width={sizeLogo.width} height={sizeLogo.height} className={style.logo}/>
        <Form nameInput={["email", "password"]} />
    </main>
)
}

export default Auth