import { useTranslation } from "react-i18next"
import { useContext, useState } from "react";
import SeatField from "./SeatField";
import './styles/SeatPicker.css'
import Carriage from "./Carriage";
import { seats } from "./Seat";
import { useNavigate } from "react-router-dom";
import TicketContext from "../../../contexts/TicketContext";
const SeatPicker = () =>{
    const {trainRoute, setSelectTickets} = useContext(TicketContext)
    const navigate = useNavigate();
    const [price, setPrice] = useState(199.56);
    const [seat, setSeat] = useState(0)
    const [carriageSeats,setCarriageSeats]=useState(seats)
    const [bookedSeats,setBookedSeats] = useState([])
    const [activeCarriage, setActiveCarriage] = useState(2)
    const {t} =  useTranslation();
    const handle = ()=>{
        setSelectTickets(bookedSeats,price)
        navigate("/train/client")
    }
    /*{t('seat.carriage',{number:activeCarriage})} */
    return <div className="seat-picker">
        <ul className="seat-picker-list">
            <li className="seat-li">
                <div className="route-seat-block">
                    <div className="carriage-text">
                        <h2>{t('seat.carriage',{number:activeCarriage})}</h2>
                        <p>{t('seat.normal')}</p>
                    </div>
                    <div className="route-text">
                        <p>{trainRoute.startTime} <span>{trainRoute.startPoint}</span></p>
                        <p>{trainRoute.endTime} <span>{trainRoute.endPoint}</span></p>
                    </div>
                    <div className="carriage-field">
                        <Carriage number={2} freePlaces={3} active={activeCarriage} setActive={setActiveCarriage} even={true}/>
                        <Carriage number={3} freePlaces={5} active={activeCarriage} setActive={setActiveCarriage} even={false}/>
                    </div>
                </div>
            </li>
            <li className="state-tips seat-li">
                <div className="state-block">
                    <div className="even-box">
                        <div className="seat-circle select-circle"><p>1</p></div>
                        <div className="even-box-text">
                            <h4>{t('seat.even.down')}</h4>
                            <p>{t('seat.even.noteven')}</p>
                        </div>
                    </div>
                    <div className="even-box">
                        <div  className="seat-circle select-circle"><p>2</p></div>
                        <div className="even-box-text">
                            <h4>{t('seat.even.up')}</h4>
                            <p>{t('seat.even.even')}</p>
                        </div>
                    </div>
                </div>
                <div className="state-block" style={{marginTop:"1rem"}}>
                    <div className="state-box">
                        <div className="state-circle select-circle"></div>
                        <p>{t('seat.states.select')}</p>
                    </div>
                    <div className="state-box">
                        <div className="state-circle busy-circle"></div>
                        <p>{t('seat.states.busy')}</p>
                    </div>
                    <div className="state-box">
                        <div className="state-circle free-circle"></div>
                        <p>{t('seat.states.free')}</p>
                    </div>
                </div>
            </li>
            <li>
                <SeatField seats={carriageSeats} selectSeats={bookedSeats} setSelectSeats={setBookedSeats} setSeat={setSeat}/>
            </li>
            <li className="seat-li">
                <div className="seat-price-block">
                    <div className="seat-block">
                        <p>{t('seat.carriage',{number:activeCarriage})}</p>
                        <p>{t('seat.seat', {number:seat})}</p>
                    </div>
                    <div className="seat-price-box">
                        <div className="seat-price">
                            <p style={{fontFamily:"Fixel Display Light", color:"#898989"}}>{t('seat.ticket',{number:bookedSeats.length})}</p>
                            <p style={{fontSize:"24px"}}>{parseFloat((price*bookedSeats.length).toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                        <button disabled={!bookedSeats.length>0} onClick={handle}>{t('buttons.continue')}</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
}
export default SeatPicker