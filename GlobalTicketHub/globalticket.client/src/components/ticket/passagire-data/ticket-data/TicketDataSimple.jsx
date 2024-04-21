import './styles/TicketData.css'
const TicketDataSimple =  ({client, price}) => {
    return <div className='simple-ticket-data'>
        <p style={{color:"#6F6F6F", fontSize:"16px"}}>{client}</p>
        <div className="seat-price price-data-block" style={{marginRight:"0"}}>
            <p style={{fontSize:"16px"}}>{price}<span style={{marginLeft:".2rem"}}>грн</span></p>
        </div>
    </div>
}
export default TicketDataSimple