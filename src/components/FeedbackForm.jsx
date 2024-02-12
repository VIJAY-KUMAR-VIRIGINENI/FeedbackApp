import Card from "./shared/Card"
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}){
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState()
    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text===!'' && text.trim().length<=10){
            
            setMessage('Text must be atleast 10 characters')
            setBtnDisabled(true)

        }

        else{
            setBtnDisabled(false)
            setMessage(null )
        }
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>20){
            const newFeedback={
                text,
                rating
            }
            handleAdd(newFeedback)
            
        }
        setText('')
       
    }
    return (

        <Card>
            
            
            <form  onSubmit={handleSubmit}>
            <h2>How would you rate us?</h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} value={text} placeholder='Write a review' />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            <div>
                {message && <div className='message'>{message}</div>}
            </div>
            </form>

        </Card>
    )
}

export default FeedbackForm