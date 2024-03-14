const authReducer = (state, {type, token}) => {
    
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                isAuth:true,
                token: token,
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuth:false,
                token: token,
            }
        default:
            return state
    }
    
}
export default authReducer