import SearchForm from './SearchForm'
import './styles/SearchBlock.css'
const SeacrhBlock = ({startPoint, endPoint}) =>{
    
    return <div className='search-block'>
        <div className="photo-back">
            <div className='gradient-background'></div>
            <h1>До нової подорожі лише один крок!</h1>
            <div className='search-line'>
                <SearchForm startPoint={startPoint} endPoint={endPoint}/>
            </div>
        </div>
    </div>
}
export default SeacrhBlock