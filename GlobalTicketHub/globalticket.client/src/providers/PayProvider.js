import { useReducer } from 'react'
import PayContext from '../contexts/PayContext' 
import { PAY_TYPES, paymentInitialState, payReducer } from '../reducers/payReducer'
export const PayProvider = ({children}) =>{
    const [state, dispatch] = useReducer(payReducer,paymentInitialState)
    const setPrice = (price) =>{
        dispatch({
            type:PAY_TYPES.setPrice,
            price
        })
    }
    return <PayContext.Provider value={{...state, setPrice}}>
        {children}
    </PayContext.Provider>
}