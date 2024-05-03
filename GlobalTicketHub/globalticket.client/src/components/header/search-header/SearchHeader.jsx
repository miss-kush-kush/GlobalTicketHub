import { NavLink } from "react-router-dom"
import './styles/SearchHeader.css'
import { useEffect } from "react"
const SearchHeader = () =>{
    return <div className="search-header">
        <ul>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to={`search`}>Результат пошуку</NavLink></li>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to={`seat`}>Вибір місць</NavLink></li>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to={`client`}>Дані пасажирів</NavLink></li>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to='/payment'>Оплата</NavLink></li>
        </ul>
    </div>
}
export default SearchHeader