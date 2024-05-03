import axios from 'axios'
import TicketContext from '../contexts/TicketContext'
import {TYPES, ticketReducer} from '../reducers/ticketReducer'
import { useReducer } from 'react'
const initialState ={
    route: null,
    date: null,
    trainRoute: null,
    ticketPrice: null,
    tickets: null
}
const TRAIN_TICKETS = 'http://localhost:5007/api/tickets/train';
const BUS_TICKETS = 'http://localhost:5007/api/tickets/bus'
export const TicketProvider = ({children}) =>{
    const[state,dispatch] = useReducer(ticketReducer, initialState)
    const getTickets = async(type) =>{
        try{
            let url = type=='TRAIN'?TRAIN_TICKETS:type=='BUS'?BUS_TICKETS:''
            let res = await axios.get(url)

            if(res.status==200){
                return res.data
            } else {
                return false
            }
        } catch(e) {
            return false
        }
    }
    const setRoute = (startPoint, endPoint, date) =>{
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

    const getTrainRoute = () =>{
        return state.trainRoute;
    }
    return <TicketContext.Provider value={{...state, getTickets, getRoute, setRoute, setTrainRoute, getTrainRoute,  setSelectTickets, getSelectTickets, getTicketPrice}}>
        {children}
    </TicketContext.Provider>
}