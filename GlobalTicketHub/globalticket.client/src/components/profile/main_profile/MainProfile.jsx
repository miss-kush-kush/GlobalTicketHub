import AuthContext from "../../../contexts/AuthContext"
import ProfileBody from "../body/ProfileBody"
import ProfileFooter from "../footer/ProfileFooter"
import ProfileHeader from "../header/ProfileHeader"
import { useState,useContext,useEffect } from "react"
const MainProfile = () =>{
    const {getUser} = useContext(AuthContext)
    const [headerText, setHeaderText] = useState("")
    const getMainHeaderText = () =>{
        let user = getUser()
        console.log(user)
        let userFullName = user.firstN + ' ' + user.lastN
        return `Вітаємо, ${userFullName}! Ми раді Вас бачити!`
    }
    useEffect(() => {
        setHeaderText(getMainHeaderText())
    }, []);
    return <>
        <ProfileHeader text={headerText}/>
        <ProfileBody/>
        <ProfileFooter/>
    </>
}
export default MainProfile