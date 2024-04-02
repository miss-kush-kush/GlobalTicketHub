import Image1 from '../../../image/льввів.png'
import Image2 from '../../../image/Zaporizhya3.png'
import Image3 from '../../../image/дніпро.png'
import Image4 from '../../../image/іванофр.png'
import Image5 from '../../../image/київ.png'
const handle = () =>{
    window.scrollTo({
        top: 100,
        behavior: 'smooth'
    });
}
export const train = {
    routeList: [{
        image:Image1,
        startPoint: 'Київ',
        endPoint: 'Львів',
        route:'Київ - Львів',
        handle: handle
    },
    {
        image:Image2,
        startPoint: 'Львів',
        endPoint: 'Запоріжжя',
        route:'Львів - Запоріжжя',
        handle: handle
    },
    {
        image:Image3,
        startPoint: 'Київ',
        endPoint: 'Дніпро',
        route:'Київ - Дніпро',
        handle: handle
    },
    {
        image:Image4,
        startPoint: 'Київ',
        endPoint: 'Івано-Франківськ',
        route:'Київ - Івано-Франківськ',
        handle: handle
    },
    {
        image:Image5,
        startPoint: 'Львів',
        endPoint: 'Київ',
        route:'Львів - Київ',
        handle: handle
    }]
}
export const bus = {
    routeList: [
        {
            image:Image3,
            route:'Київ - Дніпро'
        },
        {
            image:Image1,
            route:'Київ - Львів'
        },
        {
            image:Image2,
            route:'Львів - Запоріжжя'
        },
        {
            image:Image5,
            route:'Львів - Київ'
        },
        {
            image:Image4,
            route:'Київ - Івано-Франківськ'
        }]
}
export const airplane = {
    routeList: [
        {
            image:Image4,
            route:'Київ - Івано-Франківськ'
        },
        {
            image:Image3,
            route:'Київ - Дніпро'
        },
        
        {
            image:Image2,
            route:'Львів - Запоріжжя'
        },
        {
            image:Image5,
            route:'Львів - Київ'
        },
        {
            image:Image1,
            route:'Київ - Львів'
        }]
}