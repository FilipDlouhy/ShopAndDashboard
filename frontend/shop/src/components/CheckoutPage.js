import React, { useEffect, useState,useContext } from 'react'
import Axios from "axios"
import { UserContext } from '../Context/UserContext'
import axios from 'axios'   
import CheckoutPageItem from './CheckoutPageItem'
import { useNavigate } from 'react-router-dom'


function CheckoutPage() {

const navigate = useNavigate()
const { orderId} = useContext(UserContext)
const { showOrder} = useContext(UserContext)
const { setShowOrder} = useContext(UserContext)
const[ orderPrice,setOrderPrice ] = useState(0)
const[ orderTax,setOrderTax ] = useState(0)
const [order,setOrder] = useState()
const {setShoppingList} = useContext(UserContext)
const {RendersetShoppingList} = useContext(UserContext)
const {setListLength} = useContext(UserContext)
const {setPrice} =  useContext(UserContext)
useEffect(()=>{
    if(showOrder){
        setShoppingList([])
        RendersetShoppingList([])
        setListLength(0)
        setPrice(0)
        setShowOrder(false)
        console.log("ASDASD")
    }


    console.log(order)   
   
axios.get(`http://localhost:5000/GetOrder/${orderId}`).then((res)=>{
    setOrder(res.data)
  console.log(res.data)
    let arr =  res.data.items
    Axios.get("http://localhost:5000/GetAllItems").then((res)=>{
  let sum = 0
  arr.map((item)=>{
    res.data.map((dataItem)=>{
       if(dataItem._id ===  item.itemId ){
        let addPrice = parseInt(dataItem.price) *parseInt(item.quantity)
            sum  = parseInt(sum) + parseInt(addPrice)
       }
    })

})
setOrderTax(Math.round(sum * 15 / 100))
setOrderPrice(Math.round(sum *1.15 +10)) 
})
})
},[])
  return (
    <div className='checkoutPage'>

            <div className='checkoutPageHeader'>
                <div className='checkoutPageHeaderDiv'>
                    <div className='checkoutPageHeaderDivIcon'>
                    <i class="fa-solid fa-user"></i>
                    </div>
                        <div className='checkoutPageHeaderDivText'>
                                    <h1>Customer</h1>

                                   <p>{order&& order.lastName}</p> 
                                        <p>{order&& order.firstName}</p>
                                        <p className='checkoutPageHeaderDivTextPONE'>asdasd</p>
                        </div>
                </div>


                <div className="checkoutPageHeaderDiv">
                <div className='checkoutPageHeaderDivIcon'>
                <i class="fa-solid fa-truck"></i>
                    </div>

                <div className='checkoutPageHeaderDivText'>
                                    <h1>Order Info</h1>
                                    <p>Ordered created at {order && order.createdAt}</p>
                                        <p>Pay By Card</p>
                                        <p  className={ order && order.payed ? "checkoutPageHeaderDivTextTWOBlue" :"checkoutPageHeaderDivTextTWORed"}>{ order && order.payed ? "Payed" :"Not Payed"}</p>

                </div>

                </div>




                <div className="checkoutPageHeaderDiv">
                <div className='checkoutPageHeaderDivIcon'>
            
                <i class="fa-solid fa-map-pin"></i>
                    </div>

                            <div className='checkoutPageHeaderDivText'> 
                                    <h1>Deliver To</h1>
                                    <p> City: {order && order.city}</p>
                                        <p> Street:{order && order.street}</p>
                                        <p className={ order && order.delivered ? "checkoutPageHeaderDivTextTWOBlue" :"checkoutPageHeaderDivTextTWORed"}>{ order &&order.delivered ? "Delivered" :"Not Delivered"}</p>
                            </div>

                </div>




            </div>


            <div className='checkoutPageMiddle'>

                <div className='checkoutPageMiddleShowItems'> 
                                   
            {order&&order.items.map((item)=>{
                return <CheckoutPageItem item={item}/>
            })}
                </div>
                <div className='checkoutPageStats'>
                    <div className='checkoutPageHeaderDivDivBorder'>
                        <div className='checkoutPageStatsP'>Products</div>
                        <div className='checkoutPageStatsStat'>{order && order.items.length}</div>
                    </div>
                    <div className='checkoutPageHeaderDivDivBorder'>
                        <div className='checkoutPageStatsP'>Shipping</div>
                        <div className='checkoutPageStatsStat'>10$</div>
                    </div>

                    <div className='checkoutPageHeaderDivDivBorder'>
                        <div className='checkoutPageStatsP'>Tax</div>
                        <div className='checkoutPageStatsStat'>{orderTax&& orderTax}$</div>
                    </div>

                    <div>
                        <div className='checkoutPageStatsP'>Total</div>
                        <div className='checkoutPageStatsStat'>{orderPrice && orderPrice} $ </div>
                    </div>

                

                </div>

            </div>

                <div className='CheckoutPageButtons'>
                <button className='CheckoutPageButtonsOne' onClick={()=>{
                    navigate("/")
                }} >Go Back</button>
                <button onClick={()=>{
                    navigate("/PayForm")
                }}  className='CheckoutPageButtonsTwo' >Pay</button>
                </div>
               
    </div>
  )
}

export default CheckoutPage