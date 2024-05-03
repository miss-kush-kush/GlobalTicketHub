import { NavLink } from "react-router-dom"
import './styles/ApiNavbar.css'
const ApiNavbar = () =>{
    return <div className="api-navbar">
        <NavLink to='add-route'><span>Додати маршрут</span></NavLink>
        <NavLink to='add-transport'><span>Додати транспорт</span></NavLink>
        <NavLink to='change-route'><span>Змінити маршрут</span></NavLink>
        <NavLink to='change-transport'><span>Змінити транспорт</span></NavLink>
    </div>
}
export default ApiNavbar