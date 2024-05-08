import { Outlet, useLocation } from "react-router-dom"
import SearchHeader from "../header/search-header/SearchHeader"
import BackDiv from "./back-div/BackDiv"
import { useContext, useEffect, useState } from "react";
import TicketContext from "../../contexts/TicketContext";
import i18next from "i18next";
import moment from "moment";
import { useTranslation } from "react-i18next";

const TransportLayout = ({type, prevPath}) =>{
    const {t} = useTranslation()
    const setDate = () =>{
        const date = moment(getRoute().date);
        const formattedDate  = date.format('DD MMMM, dddd');
        return formattedDate
    }
    const location = useLocation()
    const {getRoute, route, freePlaces} = useContext(TicketContext)
    const [upText, setUpText] = useState(route.startPoint + " - " + route.endPoint);
    const [downText, setDownText] = useState(setDate());
    useEffect(()=>{
        setUpText(route.startPoint + " - " + route.endPoint)
        setDownText(setDate());
    },[route])
    useEffect(()=>{moment.locale(i18next.language)},[i18next.language])
    useEffect(()=>{
        let currentPath = location.pathname.split('/')[2]
        switch(currentPath) {
            case 'search':
                setUpText(route.startPoint + " - " + route.endPoint)
                setDownText(setDate());
                break;
            case 'seat':
                setUpText(t('transportLayout.selectFreeSeats'))
                setDownText(t('transportLayout.freeSeats',{count:freePlaces}))
                break;
            case 'client':
                setUpText(t('transportLayout.clientData'))
                setDownText(t('transportLayout.inputForms'))
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