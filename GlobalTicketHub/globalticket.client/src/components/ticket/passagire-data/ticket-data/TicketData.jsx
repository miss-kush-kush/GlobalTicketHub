import { useFormik } from "formik"
import './styles/TicketData.css'
import { useEffect, useState } from "react";
const TicketData = ({id,price,setPrices,prices}) =>{
    const [selectedOption, setSelectedOption] = useState("1"); 
    const [visible, setVisible] = useState(false)
    const [ticketPrice, setTicketPrice]=useState(price)
    const [checkboxes, setCheckboxes] = useState({
        drink: false,
        tea: false,
        coffee: false,
        equipment: false,
        surplus: false,
        animal: false
      });
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleCheckboxChange = (event) => {
        console.log(ticketPrice)
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
      };
    const {values, handleChange, handleBlur} = useFormik({
        initialValues: {
            name: "",
            surname: ""
        }
    })
    useEffect(()=>{prices[id]=ticketPrice},[])
    useEffect(()=>{
        setPrices(prevPrices => {
            const updatedPrices = [...prevPrices];
            updatedPrices[id] = ticketPrice; 
            return updatedPrices; 
        });
    },[ticketPrice])
    return <div className="ticket-data-block">
        <p>Пасажир {id+1} <span style={{color:"#9D9D9D"}}>Плацкарт, Вагон 7, місце 44</span></p>
        <div className="radio-block">
            <div>
                <label class="container">
                    <input type="radio" name="radio" value="1" checked={selectedOption === "1"}  onChange={handleOptionChange}/>
                    <span class="checkmark"></span>
                    Повний
                </label>
            </div>
            <div>
                <label class="container">
                    <input type="radio" name="radio" value="2" checked={selectedOption === "2"} onChange={handleOptionChange}/>
                    <span class="checkmark"></span>
                    Дитячий
                </label>
            </div>
            <div>
                <label class="container">
                    <input type="radio" name="radio" value="3" checked={selectedOption === "3"} onChange={handleOptionChange}/>
                    <span class="checkmark"></span>
                    Студентський
                </label>
            </div>
            <div className="seat-price price-data-block">
                <p>{ticketPrice}<span style={{marginLeft:".2rem"}}>грн</span></p>
            </div>
        </div>
        <div className="client-name-block client-name-block-train">
            <ul>
                <li>
                    <label> ПРІЗВИЩЕ
                        
                    </label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                </li>
                <li>
                    <label> ІМ'Я
                        
                    </label>
                    <input type="text" name="surname" value={values.surname} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                </li>
            </ul>
        </div>
        <div>
            <div className="supplement-box">
                <ul>
                    <li><p>Постіль</p></li>
                    <li>
                        <div className="text-end">
                            <p>60<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                        <div className="show-supplement-box" onClick={()=>{setVisible(!visible)}}>
                            <i style={visible?{top:"20%"}:{top:"35%"}} className={visible?"arrow down":"arrow up"}></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {!visible?<></>:
        <>
            <div className="suppliment-block" style={{left:"33%"}}>
                <label class="checkbox-container">   
                    <div className="checkbox-checkmark-text-box">
                        <p>1 напій</p> 
                        <div className="text-end">
                            <p>10<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </div>   
                    <input name="drink" type="checkbox" checked={checkboxes.drink} onChange={(e)=>{
                        handleCheckboxChange(e);
                        checkboxes.drink?setTicketPrice(ticketPrice-10):setTicketPrice(ticketPrice+10)}}/>
                    <span class="checkbox-checkmark"></span>
                </label>
                <label class="checkbox-container">   
                    <div className="checkbox-checkmark-text-box">
                        <p>авторський чай</p> 
                        <div className="text-end">
                            <p>15<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </div>   
                    <input name="tea" type="checkbox" checked={checkboxes.tea} onChange={(e)=>{
                        handleCheckboxChange(e);
                        checkboxes.tea?setTicketPrice(ticketPrice-15):setTicketPrice(ticketPrice+15)}}/>
                    <span class="checkbox-checkmark"></span>
                </label>
                <label class="checkbox-container">   
                    <div className="checkbox-checkmark-text-box">
                        <p>дріп-ківа</p> 
                        <div className="text-end">
                            <p>25<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </div>   
                    <input name="coffee" type="checkbox" checked={checkboxes.coffee} onChange={(e)=>{
                        handleCheckboxChange(e);
                        checkboxes.coffee?setTicketPrice(ticketPrice-25):setTicketPrice(ticketPrice+25)}}/>
                    <span class="checkbox-checkmark"></span>
                </label>
            </div>
            <div className="suppliment-block" style={{left:"63%"}}>
                <label class="checkbox-container">   
                    <div className="checkbox-checkmark-text-box">
                        <p>апаратура</p> 
                        
                    </div>   
                    <input name="equipment" type="checkbox" checked={checkboxes.equipment} onChange={handleCheckboxChange}/>
                    <span class="checkbox-checkmark"></span>
                </label>
                <label class="checkbox-container">   
                    <div className="checkbox-checkmark-text-box">
                        <p>надлишок</p> 
                    </div>   
                    <input name="surplus" type="checkbox" checked={checkboxes.surplus} onChange={handleCheckboxChange}/>
                    <span class="checkbox-checkmark"></span>
                </label>
                <label class="checkbox-container">   
                    <div className="checkbox-checkmark-text-box">
                        <p>тварини, птахи</p> 
                    </div>   
                    <input name="animal" type="checkbox" checked={checkboxes.animal} onChange={handleCheckboxChange}/>
                    <span class="checkbox-checkmark"></span>
                </label>
            </div>
        </>}
    </div>
}
export default TicketData