import { Outlet, useLocation } from "react-router-dom"
import SearchHeader from "../header/search-header/SearchHeader"
import BackDiv from "./back-div/BackDiv"
import { useContext, useEffect, useState } from "react";
import TicketContext from "../../contexts/TicketContext";
import i18next from "i18next";
import moment from "moment";
const TransportLayout = ({type, prevPath}) =>{
   
    const setDate = () =>{
        const date = moment(getRoute().date);
        const formattedDate  = date.format('DD MMMM, dddd');
        return formattedDate
    }
    const location = useLocation()
    const {getRoute} = useContext(TicketContext)
    const [upText, setUpText] = useState(getRoute().route.startPoint + " - " + getRoute().route.endPoint);
    const [downText, setDownText] = useState(setDate());
    useEffect(()=>{
        let currentPath = location.pathname.split('/')[2]
        switch(currentPath) {
            case 'search':
                setUpText(getRoute().route.startPoint + " - " + getRoute().route.endPoint)
                setDownText(setDate());
                break;
            case 'seat':
                setUpText('Оберіть місця')
                setDownText('вільних місць')
                break;
            case 'client':
                setUpText('Дані пасажирів')
                setDownText('Заповніть форми нижче')
                break;
            default:
                break;
        }
    },[location.pathname])
    return <div>
        <SearchHeader/>
        <BackDiv prevPath={prevPath} upText={upText} downText={downText} type={type}/>
        <Outlet/>
    </div>
}
export default TransportLayout