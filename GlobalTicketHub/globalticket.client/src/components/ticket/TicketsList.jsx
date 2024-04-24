import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Ticket from "./Ticket"
import { useTranslation } from "react-i18next"
import Loader from "../loader/Loader"
import { toast } from "react-toastify"
import SortBlock from "./sort-block/SortBlock"
import TicketContext from "../../contexts/TicketContext"
const TicketsList = ({type}) =>{
    const {getTickets} = useContext(TicketContext)
    const {t} = useTranslation()
    const [tickets, setTickets] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [sort, setSort] = useState('all')
    useEffect(()=>{
            setIsLoad(true)
            getTickets().then(res=> {
                if(res!=false) {
                    setTickets(res)
                    
                } else {
                    setTickets([])
                }
            })
            setIsLoad(false)
    },[])
    const sortMap = {
        all: ()=>{},
        start: (a, b) => {
            console.log("Start SORT")
            console.log(a)
            const timeA = a.startTime.split(':').map(Number);
            const timeB = b.startTime.split(':').map(Number);
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
        },
        end: (a, b) => {
            console.log("Start SORT")
            console.log(a)
            const timeA = a.endTime.split(':').map(Number);
            const timeB = b.endTime.split(':').map(Number);
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
        },
        duration: (a, b) => {
            console.log("Start SORT")
            console.log(a)
            const durationA = a.duration.split(':').map(Number);
            const durationB = b.duration.split(':').map(Number);
            return durationA[0] - durationB[0] || durationA[1] - durationB[1];
        },
        price: (a, b) => {
            console.log("Start SORT")
            console.log(a)
            const priceA = a.places[0].price;
            const priceB = b.places[0].price;
            return priceA - priceB;
        }
    }
    return <div className="tickets-list">
        <div className="tickets-tips">
            <ul>
                <li><p>{t('searchResult.result',{count:tickets.length, type:type})}</p></li>
                <li>
                    <SortBlock setSort={setSort} sortMap={Object.keys(sortMap)} active={sort}/>
                </li>
            </ul>
        </div>
        {isLoad?<div className="load-block"><Loader/></div>:tickets.sort(sortMap[sort]).map(t=>{ console.log(t); return<Ticket startTime={t.startTime} 
                                                                        startDate={t.startDate}
                                                                        endDate={t.endDate}
                                                                        endTime={t.endTime} 
                                                                        duration={t.duration} 
                                                                        transportName={t.transportName} 
                                                                        route={t.route} 
                                                                        type={t.type}
                                                                        places={t.places}/>})
        }
    </div>
}
export default TicketsList
/*
*/