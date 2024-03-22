import { useState } from 'react';
import {train} from './popularRoutesLists'
import './styles/PopularRoute.css';
import SelectButtonList from './SelectButtonList'
import PopularRouteList from './PopularRouteList';
const PopularRoute = ()=>{
    const[routes, setRoutes] = useState(train)
    return <div className='popular-route-block'>
        <ul>
            <li>
                <h1>Популярні напрямки</h1>
            </li>
            <li>
                <SelectButtonList setRoutes={setRoutes}/>
            </li>
            <li>
                <PopularRouteList routeList={routes.routeList}/>
            </li>
        </ul>
    </div>
}
export default PopularRoute