import './styles/Carriage.css'
const Carriage = ({number, freePlaces, active, setActive})=>{
    const handle = () =>{
        setActive(number)
    }
    /*'carriage-block'*/ 
    return <div onClick={handle} className={active==number?'carriage-block select-carriage':'carriage-block not-select-carriage'}>
        <div><p className='carriage-number'>{number}</p></div>
        <div></div>
        <div><p className='carriage-free-places'>{freePlaces}</p></div>   
        <div className='carriage-divider'></div>
    </div>
}
export default Carriage