import React, { useState } from 'react';
import "./styles/ticket.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Ticket =  ({ id, route, time, date, passengers, status, price }) => {
    return(
        <div className='ticket-box'>
            <div className='id-content'>
                <p>{id}</p>
            </div>
            <div className='route-content'>
                <p>{route}</p>
                <div className='info-content'>
                    <span>{time}, </span>
                    <span>{date}, </span>
                    <span>{passengers}</span>
                </div>
            </div>
            <div className='pending-content'>
                <p className='peding-info'>{status}</p>
                <p className='price-content'>{price}</p>
            </div>
            <div>
                <button className='btn-details'>Детальніше</button>
            </div>
        </div>
    );
}


export default function TicketList(){
    const tickets=[];
    const [ticketType, setTicketType] = useState('all');
    const [statusType, setStatusType] = useState('all');

    const handleTicketTypeChange = (e) => {
        setTicketType(e.target.value)
    }

    const handleStatusTypeChange = (e) => {
        setStatusType(e.target.value);
    }

    const filteredTickets = tickets.filter(ticket => {
        if (ticketType === 'all' && statusType === 'all') {
            return true;
        }
        if (ticketType === 'actual' && ticket.status !== 'history') {
            return true;
        }
        if (ticketType === 'history' && ticket.status === 'history') {
            return true;
        }
        if (statusType === 'all') {
            return true;
        }
        return ticket.status === statusType;
    });

    return(
        <>
            <div className='custom-select'>
                <select className='select-all-ticket' value={ticketType} onChange={handleTicketTypeChange}>
                    <option value="all">Всі квитки</option>
                    <option value="actual">Актуальні квитки</option>
                    <option value="history">Історія замовлень</option>
                </select>
                <KeyboardArrowDownIcon className="select-arrow-icon" />
            </div>

            <div className='custom-select'>
                <select className='select-status' value={statusType} onChange={handleStatusTypeChange}>
                    <option value="all">Всі статуси</option>
                    <option value="Очікується оплата">Очікує оплати</option>
                    <option value="Відмінено оплачений">Відмінено оплачений</option>
                    <option value="Повернення запит користувача">Повернення запит користувача</option>
                    <option value="Списання підтвердженно">Списання підтвердженно</option>
                </select>
                <KeyboardArrowDownIcon className="select-arrow-icon" />
            </div>
            {tickets.length > 0 ? (
            filteredTickets.length > 0 ? (
                filteredTickets.map(ticket => (
                    <Ticket
                        key={ticket.id}
                        id={ticket.id}
                        route={ticket.route}
                        time={ticket.time}
                        date={ticket.date}
                        passengers={ticket.passengers}
                        status={ticket.status}
                        price={ticket.price}
                    />
                ))
            ) : (
                <div className='container'>
                    <p className='order-text'>За заданими фільтрами не знайдено жодного  замовлення</p>
                    <p className='order-text2'>Після бронування квитків ваше замовлення буде відображатися тут</p>
                </div> 
            )
        ) : (
            <div className='container'>
                <img className='img-size' src="https://s3-alpha-sig.figma.com/img/ed37/d8c8/a4d1733fd857b9f40d24ba1b88e31dd4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCBhY3SFzLwK3bVqLN~zUCCDc2UpmjMnnKfbRlO928SSlLvxfQF3R55L5cSPF9NW7tF5rfa6neWkz~1g1-sjGvo7ZVGhiJHbI7lho0qH7EhOnUWqlakVYJNTLYsMRfUtAhBgDSPOJENm6s~QY3zfty3a~0H6z04T0KpQYk-Lii3AYGmFMxfifrFBlajxxRYGnypKPbTa0fTHjw6WnzsjxA~JZD5TaM~KlWcRjUIwvSOVbIntLXGEcBa1OtKcVQ4eZ3wTZgD5ug~ivpPSGdNHehFwdTm2hGMT6vhWj663iAIqxGOM1pBVhsdV1OO~YtuTPzbMaCnqWcLEY6wFbktvrw__"/>
                <p className='order-text'>Замовлення відсутні</p>
                <p className='order-text2'>Після бронування квитків ваше замовлення буде відображатися тут</p>
            </div> 
        )}
        </>
        
    );
}