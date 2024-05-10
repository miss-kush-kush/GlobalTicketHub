export const TYPES = {
    search: "SEARCH",
    clear: "CLEAR",
    setTrain: "SET_TRAIN",
    setTickets: "SET_TICKETS",
    setFreePlaces: "SET_FREE"
}
export const ticketReducer = (state,{type,route, date, trainRoute,tickets, freePlaces,wagonType, wagonNumber, trainLineName,transportId,selectWagon}) =>{
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
                trainRoute: trainRoute,
                wagonType: wagonType,
                trainLineName: trainLineName,
                transportId: transportId
            }
        case TYPES.setTickets:
            return {
                ...state,
                tickets: tickets,
                selectWagon: selectWagon,
                wagonNumber: wagonNumber
            }
        case TYPES.clear:
            return {
                ...state,
                route: null,
                date: null,
                trainRoute: null,
                freePlaces: null,
                wagonType: null,
                wagonNumber:null,
                trainLineName: null,
                transportId: null
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