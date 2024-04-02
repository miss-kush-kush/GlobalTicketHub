import SelectBodyButton from './SelectBodyButton'
import { useState } from 'react';
import './styles/ProfileMenu.css'
const ProfileMenu = () =>{
    const [activeComponent, setActiveComponent] = useState('');
    const components = [{
        text:"Залізничні квитки",
        route: '/profile/ticket/train',
        image: <svg width="20" height="29" viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.47353 4.60771 2.55612 8 2.07089V3C8 3.55228 8.44771 4 9 4H11C11.5523 4 12 3.55228 12 3V2.07089C15.3923 2.55612 18 5.47353 18 9V12H2V9ZM2 17V14H18V17C18 18.1046 17.1046 19 16 19H7H4C2.89543 19 2 18.1046 2 17ZM8 21H12L13.5 23H6.5L8 21ZM5 25L2.6 28.2L1 27L5.5 21H4C1.79086 21 0 19.2091 0 17V9C0 4.02944 4.02944 0 9 0H11C15.9706 0 20 4.02944 20 9V17C20 19.2091 18.2091 21 16 21H14.5L16 23L19 27L17.4 28.2L15 25H5ZM9.5 15C8.67157 15 8 15.6716 8 16.5C8 17.3284 8.67157 18 9.5 18H10.5C11.3284 18 12 17.3284 12 16.5C12 15.6716 11.3284 15 10.5 15H9.5Z"/>
                </svg>
    },
    {
        text:"Автобусні квитки",
        route: '/profile/ticket/bus',
        image: <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2 4H15.899C17.1955 5.27052 18 7.04131 18 9V14H2V9C2 7.04131 2.80447 5.27052 4.10102 4H10.6388L8.43826 6.75061L10 8L13.2 4ZM2 16V19C2 20.1046 2.89543 21 4 21H16C17.1046 21 18 20.1046 18 19V16H2ZM0 9C0 4.02944 4.02944 0 9 0H11C15.9706 0 20 4.02944 20 9V19C20 20.8638 18.7252 22.4299 17 22.874V25C17 26.1046 16.1046 27 15 27C13.8954 27 13 26.1046 13 25V23H7V25C7 26.1046 6.10457 27 5 27C3.89543 27 3 26.1046 3 25V22.874C1.27477 22.4299 0 20.8638 0 19V9ZM4 18.5C4 17.6716 4.67157 17 5.5 17H6.5C7.32843 17 8 17.6716 8 18.5C8 19.3284 7.32843 20 6.5 20H5.5C4.67157 20 4 19.3284 4 18.5ZM13.5 17C12.6716 17 12 17.6716 12 18.5C12 19.3284 12.6716 20 13.5 20H14.5C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H13.5Z"/>
                </svg>
        
    },
    {
        text:"Авіаквитки",
        route: '/profile/ticket/airplane',
        image: <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.967 8.7616H12.8268L11.7047 3.22117C11.6603 3.00178 11.7671 2.7796 11.9661 2.67725L14.1476 1.55564C14.3828 1.43473 14.6714 1.51783 14.8063 1.74528L18.967 8.7616ZM23.1014 8.7616L20.7109 8.76159L16.0965 0.980186C15.557 0.070398 14.4024 -0.262014 13.4617 0.221633L11.2803 1.34325C10.484 1.75265 10.0568 2.64138 10.2346 3.51891L11.2964 8.7616H10.1514L10.1564 8.75709L5.74595 3.90565C5.2283 3.33623 4.49445 3.0116 3.72491 3.0116C1.18439 3.01159 -0.609525 5.50052 0.193857 7.91066L2.43404 14.6312C2.80836 15.7542 3.85924 16.5116 5.04292 16.5116H6.16443C6.6343 17.1648 7.3603 17.6214 8.19538 17.7344L7.02833 21.9779C6.77734 22.8905 7.20045 23.8541 8.0422 24.2869L10.3299 25.4631C11.183 25.9017 12.2273 25.673 12.8188 24.9179L18.4253 17.7616L23.1014 17.7616C25.5867 17.7616 27.6014 15.7469 27.6014 13.2616C27.6014 10.7763 25.5867 8.7616 23.1014 8.7616ZM5.61167 15.0116C5.60487 14.9292 5.6014 14.8458 5.6014 14.7616V11.7616C5.6014 10.2539 6.71358 9.00599 8.16227 8.79351L4.63604 4.91466C4.40267 4.65795 4.07184 4.51159 3.72491 4.51159C2.20823 4.51159 1.13727 5.99747 1.61688 7.43632L3.85707 14.1569C4.02721 14.6673 4.50488 15.0116 5.04292 15.0116H5.61167ZM11.6002 10.2617L11.6001 10.2616H8.6014C7.77298 10.2616 7.1014 10.9332 7.1014 11.7616V14.7616C7.1014 15.59 7.77298 16.2616 8.6014 16.2616H19.6004H23.1014C24.7583 16.2616 26.1014 14.9184 26.1014 13.2616C26.1014 11.6047 24.7583 10.2616 23.1014 10.2616H20.1887L19.8565 10.2616L11.6002 10.2617ZM8.47463 22.3756L9.74357 17.7616L16.5198 17.7616L11.638 23.9928C11.4901 24.1816 11.2291 24.2388 11.0158 24.1291L8.7281 22.9529C8.51766 22.8447 8.41188 22.6038 8.47463 22.3756ZM12.6014 12.7616C12.6014 12.2093 13.0491 11.7616 13.6014 11.7616C14.1537 11.7616 14.6014 12.2093 14.6014 12.7616V13.7616C14.6014 14.3139 14.1537 14.7616 13.6014 14.7616C13.0491 14.7616 12.6014 14.3139 12.6014 13.7616V12.7616ZM17.6014 11.7616C17.0491 11.7616 16.6014 12.2093 16.6014 12.7616V13.7616C16.6014 14.3139 17.0491 14.7616 17.6014 14.7616C18.1537 14.7616 18.6014 14.3139 18.6014 13.7616V12.7616C18.6014 12.2093 18.1537 11.7616 17.6014 11.7616Z"/>
                </svg>
        
    }]
    return (
        <div className='profile-navbar'>
                {components.map(c =>
                <SelectBodyButton 
                    text={c.text}
                    route={c.route}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    image={c.image}
                    />)}
            </div>
    )
}
export default ProfileMenu;