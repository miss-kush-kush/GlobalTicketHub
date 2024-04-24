import axios from 'axios'
import TicketContext from '../contexts/TicketContext'
import {TYPES, ticketReducer} from '../reducers/ticketReducer'
import { useReducer } from 'react'
const initialState ={
    route: null,
    date: null
}
export const TicketProvider = ({children}) =>{
    const[state,dispatch] = useReducer(ticketReducer, initialState)
    const getTickets = async() =>{
        try{
            let res = await axios.get('http://localhost:5007/api/tickets/train')
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
            date
        })
    }
    return <TicketContext.Provider value={{...state, getTickets, setRoute}}>
        {children}
    </TicketContext.Provider>
}