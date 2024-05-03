import axios from 'axios'
import TicketContext from '../contexts/TicketContext'
import {TYPES, ticketReducer} from '../reducers/ticketReducer'
import { useEffect, useReducer } from 'react'
import moment from 'moment'
const initialState ={
    route: null,
    date: null,
    trainRoute: null,
    ticketPrice: null,
    tickets: null
}
const TrainType = {
    "1": "Night",
    "2": "NightExpress",
    "3": "Express",
    "4": "Intercity",
}
const TRAIN_TICKETS = 'http://localhost:5007/api/home/find-approiate-lines';
const BUS_TICKETS = 'http://localhost:5007/api/home/bus'
export const TicketProvider = ({children}) =>{
    const[state,dispatch] = useReducer(ticketReducer, initialState)

    

    const getTickets = async(type) =>{
        try{
            let url = type=='TRAIN'?TRAIN_TICKETS:type=='BUS'?BUS_TICKETS:''
            let getParams = {
                departureStation: state.route.startPoint,
                arrivalStation: state.route.endPoint,
                departureDate: state.date
            }
            let res = await axios.get(url,{
                params:getParams
            })
            if(res.status==200){
                return ticketMapper(res.data)
            } else {
                return false
            }
        } catch(e) {
            return false
        }
    }

    const ticketMapper = (data) =>{
        return data.map(d=>{
            let sDate = moment(d.departureDate)
            let fSDATE = sDate.format('DD.MM.YYYY')
            let eDate = moment(d.arrivalDate)
            let fEDATE = eDate.format('DD.MM.YYYY')
            let sTime = moment(d.departureTime, "HH:mm:ss")
            let fSTIME = sTime.format("HH:mm")
            let eTime = moment(d.arrivalTime, "HH:mm:ss")
            let fETIME = eTime.format("HH:mm")
            let duration = moment(d.duration, "H.m")
            let formatDuration = duration.format("HH:mm")
            return{
            id:d.id,
            route: d.trainLineDescription,
            startTime: fSTIME,
            endTime: fETIME,
            startDate: fSDATE,
            endDate: fEDATE,
            duration: formatDuration,
            transportName: d.trainLineName,
            type: TrainType[d.trainType],
            places:[
                {
                    placeName: '',
                    price: 326,
                    numberOfPlaces:238
                }
            ]}
        })
    }


    const setRoute = (startPoint, endPoint, date) =>{
        localStorage.setItem('start',startPoint)
        localStorage.setItem('end',endPoint)
        localStorage.setItem('date',date)
        dispatch({
            type: TYPES.search,
            route: {
                startPoint,
                endPoint
            },
            date,
            trainRoute: null
        })
    }
    const getRoute = () =>{
        return {
            route: state.route,
            date: state.date
        }
    }
    const setSelectTickets = (tickets, price)=> {
        dispatch({
            type: TYPES.setTickets,
            tickets,
            ticketPrice: price
        })
    }
    const getSelectTickets = ()=> {
        return state.tickets
    }
    const getTicketPrice = () => {
        return state.ticketPrice
    }
    const setTrainRoute = (startTime, startPoint, endTime, endPoint) =>{
        dispatch({
            type: TYPES.setTrain,
            trainRoute: {
                startTime,
                startPoint,
                endPoint,
                endTime
            }
        })
    }

    useEffect(()=>{
        const startPoint = localStorage.getItem('start')
        if(startPoint!=null){
            const endPoint = localStorage.getItem('end')
            const date = localStorage.getItem('date')
            setRoute(startPoint,endPoint,date)
        }
    },[window.location.href])
    return <TicketContext.Provider value={{...state, getTickets, getRoute, setRoute, setTrainRoute,  setSelectTickets, getSelectTickets, getTicketPrice}}>
        {children}
    </TicketContext.Provider>
}