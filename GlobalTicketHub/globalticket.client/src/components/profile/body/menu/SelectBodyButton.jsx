import './styles/ProfileMenu.css'
import { useNavigate } from 'react-router-dom'
const SelectBodyButton = ({image,text,route, activeComponent, setActiveComponent}) => {
    const navigate = useNavigate()
    const changeComponent=()=>{
        navigate(route)
        setActiveComponent(text)
    }
    
    return (
        <button className={activeComponent===text?'profile-active-btn':'profile-btn'} onClick={changeComponent}>
            <span className="select-btn-image">{image}</span>
            <span className="select-btn-text">{text}</span>
        </button>
    );
}
export default SelectBodyButton;