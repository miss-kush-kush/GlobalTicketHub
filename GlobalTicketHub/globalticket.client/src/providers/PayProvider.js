import { useReducer } from 'react'
import PayContext from '../contexts/PayContext' 
import { PAY_TYPES, paymentInitialState, payReducer } from '../reducers/payReducer'
import axios from 'axios'
import { message } from 'antd'
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
    const pay = async() =>{
        try {
            let res = await axios.get()
            if(res.status == 200) {
                return res.data
            }
        } catch (error) {
            return {status: error.response.status}
        }
    }
    const setPayStatus = async(status, orderId) => {
        try {
            let payParams = {
                status,
                orderId
            }
            let res = await axios.get('',{params:payParams})
            if(res.status==200) {
                return res.data
            }
        } catch (error) {
            return {message:'Failure transaction!'}
        }
    }
    return <PayContext.Provider value={{...state, setPrice, setLiqPayParams, pay, setPayStatus}}>
        {children}
    </PayContext.Provider>
}