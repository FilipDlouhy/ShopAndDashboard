
import React, { useEffect, useState,useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'   
import { useNavigate } from 'react-router-dom'
import OrderPageOrder from './OrderPageOrder'
function OrderList() {
  const {userId} = useContext(UserContext)
  const [orders,setOrders] = useState()
  useEffect(()=>{

    axios.get(`http://localhost:5000/GetAllOrders/${userId}`).then((res)=>{
      setOrders(res.data)

    })
  },[])
  return (
    <div className='ordersListPage'>

  


            <div className='ordersListPageHeader'>
    
              <div className='ordersListPageOrderBigDiv'>

              ID
              </div>

              <div className='ordersListPageOrderSmallDiv'>

             STATUS
              </div>

              <div className='ordersListPageOrderSmallDiv'>
DATE
             
              </div>

              <div className='ordersListPageOrderSmallDiv'>
TOTAL
              </div>
        
            </div>

      {orders && orders.map((order)=>{
        return <OrderPageOrder order={order}/>
      })}
    </div>
  )
}

export default OrderList