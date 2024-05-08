export const TYPES = {
    search: "SEARCH",
    clear: "CLEAR",
    setTrain: "SET_TRAIN",
    setTickets: "SET_TICKETS",
    setFreePlaces: "SET_FREE"
}
export const ticketReducer = (state,{type,route, date, trainRoute,tickets,ticketPrice, freePlaces}) =>{
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
                trainRoute: null,
                freePlaces: null
            }
        case TYPES.setFreePlaces: 
            return {
                ...state,
                freePlaces
            }
        default:
            return state
    }
}