import './styles/PlaceBlock.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
const PlaceBlock = ({placeName, price,count}) => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    const handle = () => {
        navigate('/train/seat')
    }
    return <div className='place-block'>
        <ul>
            <li style={{margin:".7rem"}}> <p className='place-name'>{placeName}, <span className='place-count'>{count} місць</span></p></li>
            <li className='price-box'><p >{price}<span className='price-block'>грн</span></p></li>
            <li><button onClick={handle}>{t('buttons.continue')}</button></li>
        </ul>
    </div>
}
export default PlaceBlock