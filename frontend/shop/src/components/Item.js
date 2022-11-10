

import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Review from './Review'

function Item(props) {
const { setItem} = useContext(UserContext)
const navigate = useNavigate()
const [length,setLength] = useState()
const [revies,setReviews] = useState()
useEffect(()=>{

axios.get(`http://localhost:5000/GetComments/${props.item._id}`).then((res)=>{
    setLength(res.data.length)
    setReviews(res.data)
  
})
},[])


function returnStars(){
 if( length &&revies)
{
  let sum = 0
  revies.map(revier=>{
 
sum += parseInt(revier.rating)

  })
  let avg = Math.round( sum/length)

    if( avg=== 1){
              
      return <div className='Stars'>
      <i class="fa-solid fa-star"></i>

    </div>


  }else if(avg ===2){
              
      return  <div className='Stars'>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>

    </div>


  }else if(avg=== 3 ){
              
      return <div className='Stars'>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
 
    </div>


  }
  else if(avg=== 4){
              
      return    <div className='Stars'>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>

  


  }else if(avg === 5){
      return   <div className='Stars'>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
  }
  else {
     return    <div>
     </div>

  }}
  

     
  

}


  return (
    <div onClick={()=>{
      setItem(props.item)
      navigate("/ProductPage")
    }} className='item'>
       <div className='itemImgDiv'>
    <img src={require(`../../images/${props.item.imageId}`) } ></img>
       </div>

    <div className='itemDescription'>
    <h1>{props.item.name}</h1>
  {   returnStars()}
<p>{length && length} Reviews </p>
<h2>{props.item.price}$</h2>
    </div>


    </div>
  )
}

export default Item