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
const ClientDataBlockBus = () =>{
    const {getSelectTickets, getTicketPrice} = useContext(TicketContext)
    const [transportName, setTransportName] = useState("1631-Київ АС (центральний Зал. вокзал) - Ужгород АС-1")
    const [route, setRoute] = useState("Дніпро-Головний - Львів")
    const [startTime, setStartTime] = useState("20:00");
    const [startDate, setStartDate] = useState("22.05.2024");
    const [endTime, setEndTime] = useState("06:00");
    const [endDate, setEdDate] = useState("23.05.2024");
    const n = useNavigate()
    const ticketSend = useFormik({
        initialValues: {
            phone:"",
            phoneHeader: +38,
            email:"",
        }
    })
    const setDates = ()=>{
        const fDate = moment("22.05.2024", 'DD.MM.YYYY');
        const fFormattedDate = fDate.format('D MMMM');
        setStartDate(fFormattedDate)
        const lDate = moment("23.05.2024", 'DD.MM.YYYY');
        const lFormattedDate = lDate.format('D MMMM');
        setEdDate(lFormattedDate)
    }
    let index = 0;
    let tickets = []
    let simpleTickets = [];
    const handle  = () =>{
        n('/payment')
    }
    const size = getSelectTickets();
        for(index; index<size; index++){
            tickets.push(<TicketDataBus id={index} price={getTicketPrice()}/>)
            simpleTickets.push(<TicketDataSimple client={index+1} price={getTicketPrice()}/>)
        }
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
                    <div>
                        {simpleTickets}
                    </div>
                    <div className="promo-code">Промкод
                    </div>
                    <button disabled={ticketSend.values.phone=="" || ticketSend.values.email==""} className="data-button" onClick={handle}><p style={{fontFamily:"Fixel Display Light", marginTop:".3rem"}}>До сплати </p>  
                        <div className="seat-price" style={{marginRight:"0"}}>
                            <p style={{fontSize:"24px"}}>{parseFloat((getSelectTickets()*getTicketPrice()).toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </button>
                </div>
            </li>
        </ul>
    </div>
}
export default ClientDataBlockBus