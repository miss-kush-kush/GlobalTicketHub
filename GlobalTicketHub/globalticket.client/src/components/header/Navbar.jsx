import { useState } from 'react'
import './styles/Header.css'
import qPassImage from '../../image/telegram-cloud-photo-size-2-5343906624919687974-y 2.png'
import SetLanguageDiv from './SetLanguageDiv';
import SetProfileDiv from './SetProfileDiv';
const Navbar = ({setVisible})=>{
    const[language, setLanguage] = useState('Укр');
    const[visibleLang, setVisibleLang] = useState(false)
    const[visibleProfile, setVisibleProfile] = useState(false)
    
    return <header ><nav className="navbar">
        <a href="" className='home'>
                    <img src={qPassImage} alt="" />
        </a>
        <ul>
            <li>
                <a href="" className='active'>
                    <svg width="20" height="29" viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.47353 4.60771 2.55612 8 2.07089V3C8 3.55228 8.44771 4 9 4H11C11.5523 4 12 3.55228 12 3V2.07089C15.3923 2.55612 18 5.47353 18 9V12H2V9ZM2 17V14H18V17C18 18.1046 17.1046 19 16 19H7H4C2.89543 19 2 18.1046 2 17ZM8 21H12L13.5 23H6.5L8 21ZM5 25L2.6 28.2L1 27L5.5 21H4C1.79086 21 0 19.2091 0 17V9C0 4.02944 4.02944 0 9 0H11C15.9706 0 20 4.02944 20 9V17C20 19.2091 18.2091 21 16 21H14.5L16 23L19 27L17.4 28.2L15 25H5ZM9.5 15C8.67157 15 8 15.6716 8 16.5C8 17.3284 8.67157 18 9.5 18H10.5C11.3284 18 12 17.3284 12 16.5C12 15.6716 11.3284 15 10.5 15H9.5Z" />
                    </svg>
                    <span>Потяги</span>
                </a>
                <a href="">
                    <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2 4H15.899C17.1955 5.27052 18 7.04131 18 9V14H2V9C2 7.04131 2.80447 5.27052 4.10102 4H10.6388L8.43826 6.75061L10 8L13.2 4ZM2 16V19C2 20.1046 2.89543 21 4 21H16C17.1046 21 18 20.1046 18 19V16H2ZM0 9C0 4.02944 4.02944 0 9 0H11C15.9706 0 20 4.02944 20 9V19C20 20.8638 18.7252 22.4299 17 22.874V25C17 26.1046 16.1046 27 15 27C13.8954 27 13 26.1046 13 25V23H7V25C7 26.1046 6.10457 27 5 27C3.89543 27 3 26.1046 3 25V22.874C1.27477 22.4299 0 20.8638 0 19V9ZM4 18.5C4 17.6716 4.67157 17 5.5 17H6.5C7.32843 17 8 17.6716 8 18.5C8 19.3284 7.32843 20 6.5 20H5.5C4.67157 20 4 19.3284 4 18.5ZM13.5 17C12.6716 17 12 17.6716 12 18.5C12 19.3284 12.6716 20 13.5 20H14.5C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H13.5Z"/>
                    </svg>
                    <span>Автобуси</span>
                </a>
                <a href="">
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.967 8.7616H12.8268L11.7047 3.22117C11.6603 3.00178 11.7671 2.7796 11.9661 2.67725L14.1476 1.55564C14.3828 1.43473 14.6714 1.51783 14.8063 1.74528L18.967 8.7616ZM23.1014 8.7616L20.7109 8.76159L16.0965 0.980186C15.557 0.070398 14.4024 -0.262014 13.4617 0.221633L11.2803 1.34325C10.484 1.75265 10.0568 2.64138 10.2346 3.51891L11.2964 8.7616H10.1514L10.1564 8.75709L5.74595 3.90565C5.2283 3.33623 4.49445 3.0116 3.72491 3.0116C1.18439 3.01159 -0.609525 5.50052 0.193857 7.91066L2.43404 14.6312C2.80836 15.7542 3.85924 16.5116 5.04292 16.5116H6.16443C6.6343 17.1648 7.3603 17.6214 8.19538 17.7344L7.02833 21.9779C6.77734 22.8905 7.20045 23.8541 8.0422 24.2869L10.3299 25.4631C11.183 25.9017 12.2273 25.673 12.8188 24.9179L18.4253 17.7616L23.1014 17.7616C25.5867 17.7616 27.6014 15.7469 27.6014 13.2616C27.6014 10.7763 25.5867 8.7616 23.1014 8.7616ZM5.61167 15.0116C5.60487 14.9292 5.6014 14.8458 5.6014 14.7616V11.7616C5.6014 10.2539 6.71358 9.00599 8.16227 8.79351L4.63604 4.91466C4.40267 4.65795 4.07184 4.51159 3.72491 4.51159C2.20823 4.51159 1.13727 5.99747 1.61688 7.43632L3.85707 14.1569C4.02721 14.6673 4.50488 15.0116 5.04292 15.0116H5.61167ZM11.6002 10.2617L11.6001 10.2616H8.6014C7.77298 10.2616 7.1014 10.9332 7.1014 11.7616V14.7616C7.1014 15.59 7.77298 16.2616 8.6014 16.2616H19.6004H23.1014C24.7583 16.2616 26.1014 14.9184 26.1014 13.2616C26.1014 11.6047 24.7583 10.2616 23.1014 10.2616H20.1887L19.8565 10.2616L11.6002 10.2617ZM8.47463 22.3756L9.74357 17.7616L16.5198 17.7616L11.638 23.9928C11.4901 24.1816 11.2291 24.2388 11.0158 24.1291L8.7281 22.9529C8.51766 22.8447 8.41188 22.6038 8.47463 22.3756ZM12.6014 12.7616C12.6014 12.2093 13.0491 11.7616 13.6014 11.7616C14.1537 11.7616 14.6014 12.2093 14.6014 12.7616V13.7616C14.6014 14.3139 14.1537 14.7616 13.6014 14.7616C13.0491 14.7616 12.6014 14.3139 12.6014 13.7616V12.7616ZM17.6014 11.7616C17.0491 11.7616 16.6014 12.2093 16.6014 12.7616V13.7616C16.6014 14.3139 17.0491 14.7616 17.6014 14.7616C18.1537 14.7616 18.6014 14.3139 18.6014 13.7616V12.7616C18.6014 12.2093 18.1537 11.7616 17.6014 11.7616Z"/>
                    </svg>
                    <span>Авіаквитки</span>
                </a>
                <a href="">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.76172C8 1.20943 8.44771 0.761719 9 0.761719C9.55229 0.761719 10 1.20943 10 1.76172V2.76172H16V1.76172C16 1.20943 16.4477 0.761719 17 0.761719C17.5523 0.761719 18 1.20943 18 1.76172V2.76172H22C24.2091 2.76172 26 4.55258 26 6.76172V20.7617C26 22.9709 24.2091 24.7617 22 24.7617H4C1.79086 24.7617 0 22.9709 0 20.7617V6.76172C0 4.55258 1.79086 2.76172 4 2.76172H8V1.76172ZM8 4.76172H4C2.89543 4.76172 2 5.65715 2 6.76172V20.7617C2 21.8663 2.89543 22.7617 4 22.7617H22C23.1046 22.7617 24 21.8663 24 20.7617V6.76172C24 5.65715 23.1046 4.76172 22 4.76172H18C18 5.314 17.5523 5.76172 17 5.76172C16.4477 5.76172 16 5.314 16 4.76172H10C10 5.314 9.55229 5.76172 9 5.76172C8.44771 5.76172 8 5.314 8 4.76172ZM5 7.76172C4.44772 7.76172 4 8.20943 4 8.76172V9.76172C4 10.314 4.44772 10.7617 5 10.7617C5.55228 10.7617 6 10.314 6 9.76172V8.76172C6 8.20943 5.55228 7.76172 5 7.76172ZM5 12.7617C4.44772 12.7617 4 13.2094 4 13.7617V14.7617C4 15.314 4.44772 15.7617 5 15.7617C5.55228 15.7617 6 15.314 6 14.7617V13.7617C6 13.2094 5.55228 12.7617 5 12.7617ZM4 18.7617C4 18.2094 4.44772 17.7617 5 17.7617C5.55228 17.7617 6 18.2094 6 18.7617V19.7617C6 20.314 5.55228 20.7617 5 20.7617C4.44772 20.7617 4 20.314 4 19.7617V18.7617ZM9 7.76172C8.44771 7.76172 8 8.20943 8 8.76172V9.76172C8 10.314 8.44771 10.7617 9 10.7617C9.55229 10.7617 10 10.314 10 9.76172V8.76172C10 8.20943 9.55229 7.76172 9 7.76172ZM8 13.7617C8 13.2094 8.44771 12.7617 9 12.7617C9.55229 12.7617 10 13.2094 10 13.7617V14.7617C10 15.314 9.55229 15.7617 9 15.7617C8.44771 15.7617 8 15.314 8 14.7617V13.7617ZM9 17.7617C8.44771 17.7617 8 18.2094 8 18.7617V19.7617C8 20.314 8.44771 20.7617 9 20.7617C9.55229 20.7617 10 20.314 10 19.7617V18.7617C10 18.2094 9.55229 17.7617 9 17.7617ZM12 8.76172C12 8.20943 12.4477 7.76172 13 7.76172C13.5523 7.76172 14 8.20943 14 8.76172V9.76172C14 10.314 13.5523 10.7617 13 10.7617C12.4477 10.7617 12 10.314 12 9.76172V8.76172ZM13 12.7617C12.4477 12.7617 12 13.2094 12 13.7617V14.7617C12 15.314 12.4477 15.7617 13 15.7617C13.5523 15.7617 14 15.314 14 14.7617V13.7617C14 13.2094 13.5523 12.7617 13 12.7617ZM12 18.7617C12 18.2094 12.4477 17.7617 13 17.7617C13.5523 17.7617 14 18.2094 14 18.7617V19.7617C14 20.314 13.5523 20.7617 13 20.7617C12.4477 20.7617 12 20.314 12 19.7617V18.7617ZM17 7.76172C16.4477 7.76172 16 8.20943 16 8.76172V9.76172C16 10.314 16.4477 10.7617 17 10.7617C17.5523 10.7617 18 10.314 18 9.76172V8.76172C18 8.20943 17.5523 7.76172 17 7.76172ZM16 13.7617C16 13.2094 16.4477 12.7617 17 12.7617C17.5523 12.7617 18 13.2094 18 13.7617V14.7617C18 15.314 17.5523 15.7617 17 15.7617C16.4477 15.7617 16 15.314 16 14.7617V13.7617ZM17 17.7617C16.4477 17.7617 16 18.2094 16 18.7617V19.7617C16 20.314 16.4477 20.7617 17 20.7617C17.5523 20.7617 18 20.314 18 19.7617V18.7617C18 18.2094 17.5523 17.7617 17 17.7617ZM20 8.76172C20 8.20943 20.4477 7.76172 21 7.76172C21.5523 7.76172 22 8.20943 22 8.76172V9.76172C22 10.314 21.5523 10.7617 21 10.7617C20.4477 10.7617 20 10.314 20 9.76172V8.76172ZM21 12.7617C20.4477 12.7617 20 13.2094 20 13.7617V14.7617C20 15.314 20.4477 15.7617 21 15.7617C21.5523 15.7617 22 15.314 22 14.7617V13.7617C22 13.2094 21.5523 12.7617 21 12.7617ZM20 18.7617C20 18.2094 20.4477 17.7617 21 17.7617C21.5523 17.7617 22 18.2094 22 18.7617V19.7617C22 20.314 21.5523 20.7617 21 20.7617C20.4477 20.7617 20 20.314 20 19.7617V18.7617Z"/>
                    </svg>
                    <span>Розклад</span>
                </a>
            </li>
            <li>
                <button onClick={()=>{setVisibleLang(!visibleLang)}}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7153 24.942C18.1237 24.5166 21.8626 21.8014 23.7281 18.0003H17.2272C16.8162 19.0538 16.3494 20.073 15.8963 20.9888C15.258 22.279 14.6208 23.4143 14.1435 24.2268C13.9803 24.5046 13.8355 24.7452 13.7153 24.942ZM15.0684 18.0003C14.7678 18.7148 14.4395 19.4231 14.1037 20.1019C13.5272 21.2672 12.9497 22.3043 12.5 23.0754C12.0503 22.3043 11.4728 21.2672 10.8963 20.1019C10.5605 19.4231 10.2322 18.7148 9.93163 18.0003H15.0684ZM15.822 16.0003H9.17802C8.7645 14.7383 8.5 13.5269 8.5 12.5003C8.5 11.4737 8.76451 10.2622 9.17803 9.00027H15.822C16.2355 10.2622 16.5 11.4737 16.5 12.5003C16.5 13.5269 16.2355 14.7383 15.822 16.0003ZM17.9158 16.0003H24.5034C24.8267 14.8897 25 13.7152 25 12.5003C25 11.2853 24.8267 10.1109 24.5034 9.00027H17.9158C18.2716 10.2118 18.5 11.4119 18.5 12.5003C18.5 13.5887 18.2716 14.7888 17.9158 16.0003ZM17.2272 7.00027H23.7281C21.8626 3.1991 18.1237 0.483916 13.7153 0.0585938C13.8355 0.255328 13.9803 0.495914 14.1435 0.773701C14.6208 1.58625 15.258 2.72158 15.8963 4.01175C16.3494 4.92752 16.8162 5.94672 17.2272 7.00027ZM15.0684 7.00027H9.93163C10.2322 6.28578 10.5605 5.57741 10.8963 4.89861C11.4728 3.73334 12.0503 2.69626 12.5 1.92511C12.9497 2.69626 13.5272 3.73334 14.1037 4.89861C14.4395 5.57741 14.7678 6.28578 15.0684 7.00027ZM1.2719 7.00027C3.13739 3.1991 6.87629 0.483916 11.2847 0.0585938C11.1645 0.255328 11.0197 0.495915 10.8565 0.773702C10.3792 1.58625 9.74198 2.72158 9.10369 4.01175C8.65063 4.92752 8.18384 5.94672 7.77282 7.00027H1.2719ZM0.496616 9.00027H7.08415C6.7284 10.2118 6.5 11.4119 6.5 12.5003C6.5 13.5887 6.7284 14.7888 7.08415 16.0003H0.5V16.0119C0.174542 14.8979 0 13.7194 0 12.5003C0 11.2853 0.173332 10.1109 0.496616 9.00027ZM1.2719 18.0003H7.77282C8.18384 19.0538 8.65063 20.073 9.10369 20.9888C9.74198 22.279 10.3792 23.4143 10.8565 24.2268C11.0197 24.5046 11.1645 24.7452 11.2847 24.942C6.87629 24.5166 3.13739 21.8014 1.2719 18.0003Z" fill="#F07B6A"/>
                    </svg>
                    <span>{language}</span>
                </button>
                <button onClick={()=>{setVisibleProfile(!visibleProfile)}}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.03258 23.2731C1.97043 20.8947 0 17.1775 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 17.1775 24.0296 20.8947 20.9674 23.2731C18.7667 24.9823 16.0022 26 13 26C9.99778 26 7.23325 24.9823 5.03258 23.2731ZM5.21848 22.1353C6.05863 18.6164 9.22377 16 13 16C16.7762 16 19.9414 18.6164 20.7815 22.1353C18.6864 23.9217 15.9691 25 13 25C10.0309 25 7.31362 23.9217 5.21848 22.1353ZM13 15C15.7614 15 18 12.7614 18 10C18 7.23858 15.7614 5 13 5C10.2386 5 8 7.23858 8 10C8 12.7614 10.2386 15 13 15Z" fill="#F07B6A"/>
                    </svg>
                    <span>Мій квиток</span>
                </button>
            </li>
        </ul>
    </nav>
    {visibleLang? <SetLanguageDiv setLanguage={setLanguage} setVisible={setVisibleLang} />: <></>}
    {visibleProfile? <SetProfileDiv setVisible={setVisibleProfile} setVisibleModal={setVisible}/>: <></>}
    
    </header>
} 
export default Navbar;