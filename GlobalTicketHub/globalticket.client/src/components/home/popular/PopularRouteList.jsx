import RouteBlock from "./RouteBlock";

const PopularRouteList = ({routeList}) =>{
    return <div className="route-list">
        {routeList.map(r=><RouteBlock image={r.image} route={r.route}/>)}
    </div>
}
export default PopularRouteList;