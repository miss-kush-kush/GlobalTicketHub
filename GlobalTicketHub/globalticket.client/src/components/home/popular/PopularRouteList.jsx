import RouteBlock from "./RouteBlock";

const PopularRouteList = ({routeList,setPoints}) =>{
    return <div className="route-list">
        {routeList.map(r=><RouteBlock 
                                        image={r.image} 
                                        startPoint={r.startPoint}
                                        endPoint={r.endPoint}
                                        route={r.route} 
                                        handle={r.handle} 
                                        setPoints={setPoints}/>)}
    </div>
}
export default PopularRouteList;