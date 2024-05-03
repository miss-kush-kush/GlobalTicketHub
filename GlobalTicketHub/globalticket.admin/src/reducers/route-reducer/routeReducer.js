export const initialState = {routes:[]}
export const routeReducer = (state,{type,point, index}) =>{
    switch(type) {
        case 'ADD':
            return {
                ...state,
                routes: state.routes.concat(point)
            }
        case 'DELETE':
            return {
                ...state,
                routes: state.routes.filter((p,i)=>i!=index)
            }
        case 'CHANGE': 
            return {
                ...state,
                routes: state.routes.map((route, i) => i === index ? point : route)
            }
        default:
            return state
    }
}