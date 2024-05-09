import { Row } from 'antd'
import './styles/SeatPicker.css'
import Seat from './Seat.jsx'
const SeatField = ({seats,even=true, selectSeats, setSelectSeats, setSeat}) =>{
    const evenStuff = (<>
        <Row>
            {seats.map((s,index)=>{
                if(s.number%2==0){
                    return <Seat value={s.number} id={s.seatId} even={even} 
                                                                status={s.stateType} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}
                                                                key={index}
                                                                />
                } else {
                    return null
                }
            })}
        </Row>
        <Row>
            {seats.map((s,index)=>{
                if(s.number%2!=0){
                    return <Seat value={s.number} id={s.seatId} even={even} 
                                                                status={s.stateType} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}
                                                                key={index}/>
                } else {
                    return null
                }
            })}
        </Row>
        {seats.number>35?<>
                            <Row></Row>
                            <Row>
                                {seats.map((s,index)=>{
                                    if(s.id > 35){
                                        return <Seat value={s.number} id={s.seatId} even={even} 
                                                                                    status={s.stateType} 
                                                                                    selectSeats={selectSeats} 
                                                                                    setSelectSeats={setSelectSeats}
                                                                                    setSeat={setSeat}
                                                                                    key={index}
                                                                                    />
                                    } else {
                                        return null
                                    }
                                })}
                            </Row></> 
                        :<></>}
        
    </>);
    const notEvenStuff = (<>
        <Row>
            {seats.map((s,index)=><Seat value={s.number} id={s.seatId} even={even} 
                                                                status={s.stateType} 
                                                                selectSeats={selectSeats} 
                                                                setSelectSeats={setSelectSeats}
                                                                setSeat={setSeat}
                                                                key={index}
                                                                />)}
        </Row>
    </>)
    return <div className='seat-field'>
        {even?evenStuff:notEvenStuff}
    </div>
}
export default SeatField