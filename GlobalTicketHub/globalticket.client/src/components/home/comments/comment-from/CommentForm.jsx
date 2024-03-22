import '../styles/CommentsBlock.css'
import avatar from '../../../../image/avatar2.png'
import { useState } from 'react'
import { Rate } from 'antd'
const CommentForm = () =>{
    const[text,setText] = useState('')
    const[rate,setRate] = useState(5)
    const handle = (e) => {
        e.preventDefault()
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