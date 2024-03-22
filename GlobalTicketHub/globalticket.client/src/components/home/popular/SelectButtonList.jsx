import { useState } from 'react'

import './styles/PopularRoute.css'
import SelectTransportButton from './SelectTransportButton'
import {train, bus, airplane} from './popularRoutesLists'
const SelectButtonList = ({setRoutes}) =>{
    const [active,setActive] = useState("Потяги")
    const button = [{
        routes:train,
        text:"Потяги"
    },
    {
        routes:bus,
        text:"Автобуси"
    },
    {
        routes:airplane,
        text:"Авіаквитки"
    }]
    return <div className='select-transport-button-list'>
        {button.map(bt=><SelectTransportButton
            routes={bt.routes}
            setRoutes={setRoutes}
            setActive={setActive}
            active={active}
            text={bt.text}
            />)}
    </div>
}
export default SelectButtonList