export const TYPES = {
    search: "SEARCH",
    clear: "CLEAR"
}
export const ticketReducer = (state,{type,route, date}) =>{
    switch(type) {
        case TYPES.search:  
            return {
                ...state,
                route: route,
                date: date
            }
        case TYPES.clear:
            return {
                ...state,
                route: null,
                date: date
            }
        default:
            return state
    }
}