import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
function DashBoardDashboardLatestOrder(props) {
  const {setReviewdOrder} = useContext(DashboardContext)
const navigate= useNavigate()
const [date,setDate] = useState("no")
useEffect(()=>{
if(props.order.payed){
  axios.get(`http://localhost:5000/GetOrderTransaction/${props.order.orderId}`).then((res)=>{
  
    setDate(res.data.createdAt)
   })
}
 
},[])
function getDate (Date){
let date = parseInt(Date.slice(0,2))
if(date ===1){
return  `Payed at Jan ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===2){
  return  `Payed at Feb ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}

else if(date ===3){
  return  `Payed at Mar ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===4){
  return  `Payed at Apr ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===5){
  return  `Payed at May ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===6){
  return  `Payed at Jun ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===7){
  return  `Payed at Jul ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===8){
  return  `Payed at Aug ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===9){
  return  `Payed at Sep ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===10){
  return  `Payed at Oct ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===11){
  return  `Payed at Nov ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}
else if(date ===12){
  return  `Payed at Dec ${Date.slice(0,2)} in ${Date.slice(6,10)}`
}


}
  return (
    <div className='w-full flex h-10 justify-center lg:justify-between border-b-2 '> 
    <div className='h-full text-xs  flex items-center justify-between w-1/3'>
        <p className='font-bold '>{props.order.firstName}</p>
        <p className= ' hidden lg:inline-block font-bold text-gray-500'>{props.order.email}</p>
    </div>
    <div className='h-full flex text-xs items-center  justify-center 2xl:justify-between w-3/12'>
    <p className='font-bold   text-gray-500 '>{props.order.price}$</p>
     {date &&   <p className= {props.order.payed ?'  2xl:inline-block hidden font-bold text-green-900 bg-green-200 rounded-full p-2 ':'  2xl:inline-block hidden font-bold text-red-900 bg-red-200 rounded-full p-2 '}>{props.order.payed ? getDate(date):"Not Payed"}</p> } 
    </div>
    <div className='h-full flex items-center justify-between w-2/12'>
    <p className='font-bold text-xs hidden sm:inline-block   text-gray-500 '>{props.order.createdAt}</p>
    <i onClick={()=>{
      setReviewdOrder(props.order)
      navigate("/DashboardOrdersReviewOrder")
    }} class=" ml-2 lg:ml-0 hover:text-lg cursor-pointer duration-300 text-green-500 fa-solid fa-eye"></i>
    </div>
</div>
  )
}

export default DashBoardDashboardLatestOrder