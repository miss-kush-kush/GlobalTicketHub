import '../tips/styles/TipsBlock.css'
import './styles/Tips2.css'
import Image1 from '../../../image/t1.png'
import Image2 from '../../../image/t2.png'
import Image3 from '../../../image/t3.png'
import Image4 from '../../../image/t4.png'
const Tips2 = () =>{
    return <div className='tips-block second-tips'>
        <ul>
            <li>
                <div className='tip-icon'>
                    <img src={Image1} alt="" />
                </div>
                <p>
                    Покупка квитків он-лайн у будь-який час
                </p>
            </li>
            <li>
            <div className='tip-icon'>
                    <img src={Image2} alt="" />
                </div>
                <p>
                    Покупка квитків он-лайн у будь-який час
                </p>
            </li>
            <li>
            <div className='tip-icon'>
                    <img src={Image3} alt="" />
                </div>
                <p>
                    Покупка квитків он-лайн у будь-який час
                </p>
            </li>
            <li>
            <div className='tip-icon'>
                    <img src={Image4} alt="" />
                </div>
                <p>
                    Покупка квитків он-лайн у будь-який час
                </p>
            </li>
        </ul>
    </div>
}
export default Tips2