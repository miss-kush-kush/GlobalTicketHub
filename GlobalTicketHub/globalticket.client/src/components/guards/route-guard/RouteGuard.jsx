import { useContext } from "react"
import { Navigate } from "react-router-dom"
import TicketContext from "../../../contexts/TicketContext"
const RouteGuard = ({children}) =>{
    const {route} = useContext(TicketContext)
    if(route==null){
        return <Navigate to='/'/>
    }
    return <>{children}</>
}
export default RouteGuard