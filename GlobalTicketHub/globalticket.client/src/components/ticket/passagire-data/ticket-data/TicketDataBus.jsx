import { useFormik } from "formik"
import './styles/TicketData.css'
const TicketDataBus = ({id}) => {
    const {values, handleChange, handleBlur} = useFormik({
        initialValues: {
            name: "",
            surname: "",
            birth: new Date().toISOString().slice(0, 10)
        }
    })
    return <div className="ticket-data-block">
        <p>Пасажир {id+1} <span style={{color:"#9D9D9D"}}>Сидячий, Вільна розсадка</span></p>
        <div className="client-name-block client-name-block-bus">
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
                <li>
                    <label> ДАТА НАРОДЖЕННЯ
                        
                    </label>
                    <input type="date" name="birth" value={values.birth} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                </li>
            </ul>
        </div>
    </div>
}
export default TicketDataBus