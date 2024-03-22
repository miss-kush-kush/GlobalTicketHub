import SearchForm from './SearchForm'
import './styles/SearchBlock.css'
const SeacrhBlock = () =>{
    
    return <div className='search-block'>
        <div className="photo-back">
            <div className='gradient-background'></div>
            <h1>До нової подорожі лише один крок!</h1>
            <div className='search-line'>
                <SearchForm/>
            </div>
        </div>
    </div>
}
export default SeacrhBlock