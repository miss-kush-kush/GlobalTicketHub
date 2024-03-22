import './styles/PopularRoute.css'
const RouteBlock = ({image, route}) =>{
    return <div className='route-block'>
        <img src={image} alt="" />
        <div className='route-gradient-background'></div>
        <p>{route}</p>
    </div>
}
export default RouteBlock