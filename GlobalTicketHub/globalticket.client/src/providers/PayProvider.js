import { useReducer } from 'react'
import PayContext from '../contexts/PayContext' 
import { PAY_TYPES, paymentInitialState, payReducer } from '../reducers/payReducer'
import axios from 'axios'
export const PayProvider = ({children}) =>{
    const [state, dispatch] = useReducer(payReducer,paymentInitialState)
    const setPrice = (price) =>{
        dispatch({
            type:PAY_TYPES.setPrice,
            price
        })
    }
    const setLiqPayParams = (desc, amount) =>{
        dispatch({
            type: PAY_TYPES.payment,
            desc,
            amount
        })
    }
    const Pay = async() =>{
        try {
            //let res = axios.get()
        } catch (error) {
            
        }
    }
    return <PayContext.Provider value={{...state, setPrice, setLiqPayParams}}>
        {children}
    </PayContext.Provider>
}