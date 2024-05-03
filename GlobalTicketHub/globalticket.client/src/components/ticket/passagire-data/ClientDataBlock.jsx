import TicketData from "./ticket-data/TicketData";
import TicketDataBus from "./ticket-data/TicketDataBus";
import { useState, useEffect, useContext } from "react";
import './styles/ClientDataBlock.css'
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import moment from 'moment'
import 'moment/locale/uk'
import i18next from 'i18next'
import TicketDataSimple from "./ticket-data/TicketDataSimple";
import { useNavigate} from "react-router-dom";
import TicketContext from "../../../contexts/TicketContext";
import { v4 as uuidv4 } from 'uuid';
const ClientDataBlock = ()=>{
    const {getSelectTickets, getTicketPrice} = useContext(TicketContext)
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0);
    const [transportName, setTransportName] = useState("131П")
    const [route, setRoute] = useState("Дніпро-Головний - Львів")
    const [startTime, setStartTime] = useState("20:00");
    const [startDate, setStartDate] = useState("22.05.2024");
    const [endTime, setEndTime] = useState("06:00");
    const [endDate, setEdDate] = useState("23.05.2024");
    const [prices, setPrices] = useState(getSelectTickets().map(t=>getTicketPrice()))
    const setDates = ()=>{
        const fDate = moment(startDate, 'DD.MM.YYYY');
        const fFormattedDate = fDate.format('D MMMM');
        setStartDate(fFormattedDate)
        const lDate = moment(endDate, 'DD.MM.YYYY');
        const lFormattedDate = lDate.format('D MMMM');
        setEdDate(lFormattedDate)
    }
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[])
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[i18next.language])
    useEffect(()=>{
        let sum=0;
        prices.forEach(num=>sum+=num)
        setTotalPrice(sum)
    },[prices])
    const handle = ()=> {
        navigate('/payment')
    }
    const ticketSend = useFormik({
        initialValues: {
            phone:"",
            phoneHeader: +38,
            email:"",
        }
    })
    let priceIndex = 0;
    let index = 0;
    const tickets = getSelectTickets().map(ticket=>{
            let el =  <TicketData id={index} price={getTicketPrice()} setPrices={setPrices} prices={prices} key={uuidv4}/>
            ++index;
            return el;
    })
    return <div className="client-data-block">
        <ul>
            <li>
                <div>
                    {tickets}
                </div> 
                <div className="ticket-send-data-block">
                    <h4>Відправити копію квитка</h4>
                    <div style={{display:"flex", gap:"1.5rem"}}>
                        <div className="ticket-send-data-input-box">
                            <label htmlFor="">НА EMAIL</label>
                            <br />
                            <input type="email" name="email" 
                                                placeholder="username@gmail.com"
                                                value={ticketSend.values.email} 
                                                onChange={ticketSend.handleChange} 
                                                onBlur={ticketSend.handleBlur} />
                            <p>Квитки будуть надіслані на Вашу пошту автоматично</p>
                        </div>
                        <div className="ticket-send-data-input-box">
                            <label htmlFor="">ТЕЛЕФОН</label>
                            <br />
                            
                            <InputMask mask="+38 (999) 999 99 99"  
                                        defaultValue="+38"
                                        name="phone" type="tel"
                                        value={ticketSend.values.phone}  
                                        onChange={ticketSend.handleChange} 
                                        placeholder="+38 (000) 000 00 00"/>
                            <p>Ви отримаєте SMS з номером замовлення на Ваш телефон</p>
                        </div>
                    </div>
                        
                </div>
            </li>
            <li>
                <div className="result-tricket-block">
                    <p>Ваше замовлення</p>
                    <div className="div-divider"></div>
                    <p style={{fontWeight:"bolder"}}>{transportName} <span style={{color:"#6F6F6F", fontFamily:"Fixel Display Light"}}>{route}</span></p>
                    <div className="result-ticket-date-box">
                        <div>
                            <p>{startTime}</p>
                            <p style={{color:"#6F6F6F"}}>{startDate}</p>
                        </div>
                        <div style={{textAlign:"end"}}>
                            <p>{endTime}</p>
                            <p style={{color:"#6F6F6F"}}>{endDate}</p>
                        </div>
                    </div>
                    <div>
                        {prices.map(p=>{
                            let el = <TicketDataSimple client={priceIndex+1} price={p} key={uuidv4}/>
                            ++priceIndex;
                            return el;})}
                    </div>
                    <div className="promo-code">Промкод
                    </div>
                    <button disabled={ticketSend.values.phone=="" || ticketSend.values.email==""} className="data-button" onClick={handle}><p style={{fontFamily:"Fixel Display Light", marginTop:".3rem"}}>До сплати </p>  
                        <div className="seat-price" style={{marginRight:"0"}}>
                            <p style={{fontSize:"24px"}}>{parseFloat(totalPrice.toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </button>
                </div>
            </li>
        </ul>
    </div>
}
export default ClientDataBlock