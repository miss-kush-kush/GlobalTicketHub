import Comment from './Comment';
import './styles/CommentsBlock.css'
import {comments} from './commentsList'
const CommentsBlock = () =>{
    return <div className='comments-block'>
        <h1>Відгуки про нас</h1>        
        <div className='comments-field'>
            {comments.map(c=><Comment name={c.name} avatar={c.avatar} rate={c.rate} text={c.text}/>)}
        </div>
    </div>
}
export default CommentsBlock;