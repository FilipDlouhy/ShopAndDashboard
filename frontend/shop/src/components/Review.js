import axios from 'axios'
import React from 'react'
import  { useContext, useEffect,useState } from 'react'
function Review(props) {
const[userName,setUserName] = useState()
const [date,setDate] = useState()
useEffect(()=>{
axios.get(`http://localhost:5000/GetUser/${props.review.userId}`).then((res)=>{
    setUserName(res.data.name)

    
})

},[])

function returnStars(){
  
    if(props.review.rating === "1" ){
                
        return <div className='stars'>
        <i class="fa-solid fa-star"></i>
    </div>


    }else if(props.review.rating === "2"){
                
        return   <div className='stars'>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>


    }else if(props.review.rating === "3" ){
                
        return  <div className='stars'>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>


    }
    else if(props.review.rating === "4"){
                
        return    <div className='stars'>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>

    </div>


    }else{
                
        return  <div className='stars'>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>


    }

}
  return (
    <div className='productPageReview'>
    <p className='productPageReviewHeader'> {userName&&userName}</p>
{  returnStars()}

  


<p className='reviewDate'>{props.review.createdAt}</p>


<p className='comment'>{props.review.comment}</p>


</div>    )
}

export default Review