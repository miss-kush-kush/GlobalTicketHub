import { useReducer } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../contexts/AuthContext"
import authReducer from "../reducers/authReducer"
import axios from "axios"
const initialState ={
    isAuth: false,
    token: null,
}
const LOGIN_ENDPOINT = 'http://localhost:5000/api/log-in-success';
const SIGNUP_ENDPOINT = 'http://localhost:5000/api/sign-up-success';
export const AuthProvider = ({children}) =>{
    const[state,dispatch] = useReducer(authReducer, initialState)
    const login = async ({email,password}) =>{
        try {
            axios.defaults.headers.common['Accept']='application/json'
            const response = await axios.post(LOGIN_ENDPOINT,JSON.stringify({email,password}))
            if(response.status==200){
                dispatch({
                    type:'LOGIN',
                    token: response.data.token
                })
            }
            console.log('OK')
            return {
                status: response.status,
                message: response.data.message,
            }
        } catch (error) {
            console.log(error)
            return {
                status: 401,
                message: 'Network error!'
            }
        }
    }
    const signup = async ({firstname,lastname,phone,email,password}) =>{
        try {
            axios.defaults.headers.common['Accept']='application/json'
            const response = await axios.post(SIGNUP_ENDPOINT,JSON.stringify({firstname,lastname,phone,email,password}))
            if(response.status==200){
                dispatch({
                    type:'LOGIN',
                    token: response.data.token
                })
            }
            return {
                status: response.status,
                message: response.data.message,
            };
        } catch (error) {
            console.log(error)
            return {
                status: 401,
                message: 'Network error!'
            }
        }
    }

    return<AuthContext.Provider value={{...state, login, signup}}>
        {children}
    </AuthContext.Provider>
}