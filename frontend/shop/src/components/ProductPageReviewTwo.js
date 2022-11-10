
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'

function ProductPageReviewTwo() {
    const { item} = useContext(UserContext)
    const { userId} = useContext(UserContext)
    const [rating,setRating] = useState()
    const[comment,setComment] = useState()
       const { setItemReviews} = useContext(UserContext)
       useEffect(()=>{
setRating(1)
       },[])
  return (
    <div className='productPageReviewTwo'>
      <h1>     WRITE A CUSTOMER REVIEW</h1>

      <div className='productPageReviewTwoDivOne'>

      <label for="rating">Rating</label>
      <select onChange={(e)=>{
        setRating(e.target.value)
      }} id="rating" name="rating">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
      </div>

      <div className='productPageReviewTwoDivTwo'>
      <label for="comment">Comment</label>

      <textarea  onChange={(e)=>{
        setComment(e.target.value)
      }} id='comment' name='comment'>

      </textarea>

      <button onClick={(e)=>{
        console.log(rating)
                let review ={
                    comment:comment,userId:userId,itemId:item._id,rating:rating
                 }

             axios.post("http://localhost:5000/AddComent",review).then(()=>{
                axios.get(`http://localhost:5000/GetComments/${item._id}`).then(res=>{
                    setItemReviews([])
                setItemReviews(res.data)
            })
             })   
                let textarea = document.querySelector("#comment")
                textarea.value = " "

      }}>Submit</button>
      </div>

    </div>
  )
}

export default ProductPageReviewTwo