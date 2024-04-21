import SearchForm from './SearchForm'
import './styles/SearchBlock.css'
import { useTranslation } from 'react-i18next'
const SeacrhBlock = ({startPoint, endPoint}) =>{
    const {t} = useTranslation()
    return <div className='search-block'>
        <div className="photo-back">
            <div className='gradient-background'></div>
            <h1 style={{width:"1335px", textAlign:"center"}}>{t('searchBlock.h1')}</h1>
            <div className='search-line'>
                <SearchForm startPoint={startPoint} endPoint={endPoint}/>
            </div>
        </div>
    </div>
}
export default SeacrhBlock