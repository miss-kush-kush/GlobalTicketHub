import axios from 'axios'
import TicketContext from '../contexts/TicketContext'
import {TYPES, ticketReducer} from '../reducers/ticketReducer'
import { useEffect, useReducer } from 'react'
import moment from 'moment'
import { TrainType } from '../enums/train/trainTypeEnum'
import { ticketMapper } from '../functions/mappers'
const initialState ={
    route: null,
    date: null,
    trainRoute: null,
    ticketPrice: null,
    tickets: null,
    freePlaces: null
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
                return type=='TRAIN'?ticketMapper(res.data):res.data
            } else {
                return []
            }
        } catch(e) {
            return []
        }
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
    const setFreePlaces = (places) =>{
        dispatch({
            type: TYPES.setFreePlaces,
            freePlaces: places
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
    return <TicketContext.Provider value={{...state, getTickets, 
                                                     getRoute, 
                                                     setRoute, 
                                                     setTrainRoute,  
                                                     setSelectTickets, 
                                                     getSelectTickets, 
                                                     getTicketPrice,
                                                     setFreePlaces}}>
        {children}
    </TicketContext.Provider>
}