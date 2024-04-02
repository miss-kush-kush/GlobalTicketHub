import '../styles/CommentsBlock.css'
import avatar from '../../../../image/avatar2.png'
import { useState, useContext } from 'react'
import { Rate } from 'antd'
import AuthContext from '../../../../contexts/AuthContext'
import { toast } from 'react-toastify'
const CommentForm = () =>{
    const[text,setText] = useState('')
    const[rate,setRate] = useState(5)
    const {sendComment} = useContext(AuthContext)
    const handle = async (e) => {
        e.preventDefault()
        let cRate = rate;
        let commentText = text;
        let res = await sendComment(cRate,commentText)
        toast.success("Comment send!")
        setText('')
    }
    return <div className='comment-form-block'>
        <h1>Залиш свій коментар та допоможи нам покращити роботу!</h1>
        <div className='comment-form'>
            <div className='comment-avatar'>
                <img src={avatar} alt="" />
            </div>
                <form onSubmit={handle} >
                    <div className='comment-form-body'>
                        <textarea name='text' value={text} onChange={(e)=>{setText(e.target.value)}} />
                        <div className='rate-block'>
                            <Rate className='rate-bar' onChange={setRate} size='small' allowHalf value={rate}/>
                            <input type="submit" value={"Відправити"} />    
                        </div>
                    </div>
                </form>
        </div>
    </div>
}
export default CommentForm