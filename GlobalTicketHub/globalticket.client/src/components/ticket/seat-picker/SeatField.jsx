import { Row } from 'antd'
import './styles/SeatPicker.css'
import Seat from './Seat.jsx'
import { v4 as uuidv4 } from 'uuid';
const SeatField = ({seats,even=true, selectSeats, setSelectSeats, setSeat}) =>{
    const evenStuff = (<>
        <Row>
            {seats.map(s=>{
                if(s.value%2==0){
                    return <Seat value={s.value} id={s.seatId} even={even} 
                                                                status={s.status} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}
                                                                key={uuidv4()}/>
                }
            })}
        </Row>
        <Row>
            {seats.map(s=>{
                if(s.value%2!=0){
                    return <Seat value={s.value} id={s.seatId} even={even} 
                                                                status={s.status} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}
                                                                key={uuidv4()}/>
                }
            })}
        </Row>
        {seats.length>35?<>
                            <Row></Row>
                            <Row>
                                {seats.map(s=>{
                                    if(s.id > 35){
                                        return <Seat value={s.value} id={s.seatId} even={even} 
                                                                                    status={s.status} 
                                                                                    selectSeats={selectSeats} 
                                                                                    setSelectSeats={setSelectSeats}
                                                                                    setSeat={setSeat}
                                                                                    key={uuidv4()}/>
                                    }
                                })}
                            </Row></> 
                        :<></>}
        
    </>);
    const notEvenStuff = (<>
        <Row>
            {seats.map(s=><Seat value={s.value} id={s.seatId} even={even} 
                                                                status={s.status} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}
                                                                key={uuidv4()}/>)}
        </Row>
    </>)
    return <div className='seat-field'>
        {even?evenStuff:notEvenStuff}
    </div>
}
export default SeatField