const authReducer = (state, {type, token}) => {
    
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                token: token,
            }
        case 'LOGOUT':
            return {
                ...state,
                token: token,
            }
        default:
            return state
    }
    
}
export default authReducer