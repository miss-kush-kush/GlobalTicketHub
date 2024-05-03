import './styles/PlaceBlock.css'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation } from 'react-router-dom'
import TicketContext from '../../../contexts/TicketContext'
import { useContext, useState } from 'react'
const PlaceBlock = ({placeName, price,count,clickData}) => {
    const location = useLocation()
    const {setTrainRoute} = useContext(TicketContext)
    const [toSeat, setToSeat] = useState(false)
    const {t} = useTranslation()
    const handle = () => {
        setTrainRoute(clickData.startTime,clickData.startPoint,clickData.endTime,clickData.endPoint)
        setToSeat(true)
    }
    const changeUrl = (адреса) =>{
        const останнійСлеш = адреса.lastIndexOf('/');
        if (останнійСлеш !== -1) {
            const чистаАдреса = адреса.substring(0, останнійСлеш);
            return чистаАдреса;
        } else {
            return адреса;
        }
    }
    if(toSeat === true) {
        return <Navigate to={changeUrl(location.pathname)+"/seat"}/>;
    }
    return <div className='place-block'>
        <ul>
            <li style={{margin:".7rem"}}> <p className='place-name'>{placeName!=''?placeName+',':placeName} <span className='place-count'>{count} місць</span></p></li>
            <li className='price-box'><p >{price}<span className='price-block'>грн</span></p></li>
            <li><button onClick={handle}>{t('buttons.continue')}</button></li>
        </ul>
    </div>
}
export default PlaceBlock