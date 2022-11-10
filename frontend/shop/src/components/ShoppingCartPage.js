import React from 'react'


import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CartItem from './CartItem'
import { parse } from 'uuid'
function ShoppingCartPage() {
    const navigate = useNavigate()
    const { shoppingList} = useContext(UserContext)
        const {userId} = useContext(UserContext)
    const { price} = useContext(UserContext)
    const { setPrice} = useContext(UserContext)
    const { setShowOrder} = useContext(UserContext)
    const { listLength} = useContext(UserContext)
    const { RendersetShoppingList} = useContext(UserContext)
    const { RendershoppingList} = useContext(UserContext)
    const [show,setShow] = useState(false)
    const {setContinueToCheckout} = useContext(UserContext)
   const { order} = useContext(UserContext)
   const {setOrder} = useContext(UserContext)
    useEffect(()=>{
        if(listLength > 0){
            setShow(true)
        }else if(listLength){
            setShow(true)
        }
        else if(!listLength){
            setShow(false)
        }
        else if(!listLength < 0){
            setShow(false)
        }
        if(shoppingList){
            let newPrice = 0
            axios.get(`http://localhost:5000/GetAllItems`).then((res)=>{
                shoppingList.map((item)=>{
             
                    res.data.map(data=>{
                        if(data._id  === item.itemId){
                           let add = (parseInt(data.price) * parseInt(item.quantity))
                           
                    newPrice+=add
                    setPrice(newPrice)
                        }
                    })
                })
          
                
                })
             
              
        }
    },[])
  return (
    <div className='ShoppingCartPage'>
         <div className='ShoppingCartPageHeader'>
            <p>Total Cart Products ({listLength})  </p>
        </div>
        {RendershoppingList&& RendershoppingList.map(item=>{
             return   <CartItem item ={item}/>
        })}
        
        <div className='ShoppingCartPageFooter'>
            <p>Total:<span>{price&& price}$</span></p>
            <div className='ShoppingCartPageFooterButtons'>
                <button onClick={()=>{navigate("/")}} className='continueShopping'>Continue Shopping</button>
               {show && <button onClick={()=>{
                if(userId){
                    let arr = []
                    shoppingList.map((item)=>{
                        arr.push(item)
                    })
                    setOrder(arr)
                    setShowOrder(true)
                    navigate("/DeliveryForm")

                }else{
                    navigate("/LoginForm")
                    setContinueToCheckout(true)
                }
             }} className='checkout'>Place Order</button> } 
            </div>
            
        </div>

    </div>
  )
}

export default ShoppingCartPage