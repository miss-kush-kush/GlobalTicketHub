import { Row } from 'antd'
import './styles/SeatPicker.css'
import Seat from './Seat.jsx'
const SeatField = ({seats,even=true, selectSeats, setSelectSeats, setSeat}) =>{
    const evenStuff = (<>
        <Row>
            {seats.map(s=>{
                if(s.value%2==0){
                    return <Seat value={s.value} id={s.seatId} even={even} 
                                                                status={s.status} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}/>
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
                                                                setSeat={setSeat}/>
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
                                                                                    setSeat={setSeat}/>
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
                                                                setSeat={setSeat}/>)}
        </Row>
    </>)
    return <div className='seat-field'>
        {even?evenStuff:notEvenStuff}
    </div>
}
export default SeatField