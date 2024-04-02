import Image from '../../../image/Group 19.png'
import './styles/ProfileBody.css'

const HomeProfileBody = () =>{
    return <div className="home-profile-body">
        <div>
            <img src={Image} alt="" />
        </div>
        <h1>Замовлення відсутні</h1>
        <p>Після бронування квитків ваше замовлення буде відображатися тут</p>
    </div>
}
export default HomeProfileBody