import RouteForm from "../../forms/route-form/RouteForm"
import RouteFormList from "./route-form-list/RouteFormList"
import './styles/RouteBlock.css'
import { initialState, routeReducer } from "../../../../../../../reducers/route-reducer/routeReducer"
import { useState, useReducer, useEffect } from "react"
const RouteBlock = () =>{
    const [state, dispatch] = useReducer(routeReducer, initialState)
    const [selectRoute, setSelectRoute] = useState('');
    const [selectRouteId, setSelectRouteId] = useState(-1);
    return <div className="route-block">
        <RouteForm dispatch={dispatch} 
                    selectRoute={selectRoute} 
                    setSelectRoute={setSelectRoute}
                    routes={state.routes} 
                    selectRouteId={selectRouteId} 
                    setSelectRouteId={setSelectRouteId}/>
        <div>
            <RouteFormList routes={state.routes} 
                            dispatch={dispatch} 
                            setSelectRoute={setSelectRoute} 
                            selectRoute={selectRoute}
                            setSelectRouteId={setSelectRouteId}/>
            <button className="route-block-button">Додати</button>
        </div>
    </div>
}
export default RouteBlock