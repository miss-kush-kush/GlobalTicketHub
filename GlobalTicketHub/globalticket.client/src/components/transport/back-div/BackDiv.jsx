
import { useNavigate } from 'react-router-dom';
import './styles/BackDiv.css'
const BackDiv = ({upText, downText}) => {
    const navigate= useNavigate();
    return <div className='back-div-block' onClick={()=>{navigate(-1)}}>
        <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3L4 14L14 24.5" stroke="#9D9D9D" stroke-width="5" stroke-linecap="round"/>
        </svg>

        <div className='back-text-box'>
            <p className='up-p'>{upText}</p>
            <p className='down-p'>{downText}</p>
        </div>
    </div>
    
}
export default BackDiv