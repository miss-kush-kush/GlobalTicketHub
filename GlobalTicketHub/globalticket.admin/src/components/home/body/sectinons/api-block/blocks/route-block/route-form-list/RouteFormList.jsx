import RouteFormListElement from './RouteFormListElement'
import './styles/RouteFormList.css'
const RouteFormList = ({routes, dispatch, setSelectRoute, selectRoute, setSelectRouteId}) =>{
    return <div className='route-form-list'>
        {routes.map((r,i)=><RouteFormListElement    name={r} 
                                                    index={i} 
                                                    dispatch={dispatch} 
                                                    setSelectRoute={setSelectRoute} 
                                                    selectRoute={selectRoute}
                                                    setSelectRouteId={setSelectRouteId}
                                                    key={i}/>)}
    </div>
}   
export default RouteFormList