
import React, { useEffect, useState,useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'   
import { useNavigate } from 'react-router-dom'

function OrderPageOrder(props) {
    const navigate = useNavigate()
    const [total ,setTotal] = useState(0)
    const { setOrderId} = useContext(UserContext)
    useEffect(()=>{
    
     
     
            axios.get(`http://localhost:5000/GetAllItems`).then((res)=>{
                let total =0
          res.data.map((item)=>{
            props.order.items.map(orderItem=>{
                if(item._id === orderItem.itemId){
                    total +=parseInt(item.price) * parseInt(orderItem.quantity)  
                }
            })
          })
          setTotal(total)
            })
        
       
    })
  return (
 
    <div className={props.order.payed ?'ordersListPageOrder orderPayed':  "ordersListPageOrder orderNotPayed"}>
    
    <div onClick={()=>{
        console.log(props.order)
        console.log(props.order._id)


setOrderId(props.order.orderId)

navigate("/CheckoutPage")
}} className=' orderLink ordersListPageOrderBigDiv'>
    {props.order._id}
    
    </div>

    <div className=' ordersListPageOrderSmallDiv'>
    {props.order.payed ?'Payed':  "Not Payed"}
   
    </div>

    <div className='ordersListPageOrderSmallDiv'>
    {props.order.createdAt}
   
    </div>

    <div className='ordersListPageOrderSmallDiv'>
        {total&&total} $
    </div>

  </div>
  )
}

export default OrderPageOrder