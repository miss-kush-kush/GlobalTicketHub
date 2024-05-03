export const TYPES = {
    search: "SEARCH",
    clear: "CLEAR",
    setTrain: "SET_TRAIN",
    setTickets: "SET_TICKETS"
}
export const ticketReducer = (state,{type,route, date, trainRoute,tickets,ticketPrice}) =>{
    switch(type) {
        case TYPES.search:  
            return {
                ...state,
                route: route,
                date: date,
            }
        case TYPES.setTrain: 
            return {
                ...state,
                trainRoute: trainRoute
            }
        case TYPES.setTickets:
            return {
                ...state,
                ticketPrice: ticketPrice,
                tickets: tickets
            }
        case TYPES.clear:
            return {
                ...state,
                route: null,
                date: null,
                trainRoute: null
            }
        default:
            return state
    }
}