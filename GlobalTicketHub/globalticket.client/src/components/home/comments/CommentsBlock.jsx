import Comment from './Comment';
import './styles/CommentsBlock.css'
import {comments} from './commentsList'
import { useTranslation } from 'react-i18next';
const CommentsBlock = () =>{
    const {t} = useTranslation()
    return <div className='comments-block'>
        <h1>{t('comment.title')}</h1>        
        <div className='comments-field'>
            {comments.map(c=><Comment name={c.name} avatar={c.avatar} rate={c.rate} text={c.text}/>)}
        </div>
    </div>
}
export default CommentsBlock;