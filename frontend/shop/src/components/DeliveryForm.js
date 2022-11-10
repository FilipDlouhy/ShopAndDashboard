import React, { useEffect, useState,useContext } from 'react'
import Axios from "axios"
import { UserContext } from '../Context/UserContext'
import axios from 'axios'   
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid';
function DeliveryForm() {
    const [city,setCity] = useState()
    const [street,setStreet] = useState()
    const[firstName,SetFirstName] = useState()
    const[lastName,SetLastName] = useState()
    const { userId} = useContext(UserContext)
  const navigate = useNavigate()
  const [error,setError] = useState()
    const { price} = useContext(UserContext)
    const { setOrderId} = useContext(UserContext)
    const{order}= useContext(UserContext)
  return (
    <form className='deliveryForm'>
    <div className='singUpFormHeader'>
        <h1>Delivery Adress</h1>
        <h2 className='BAD'>{error}</h2>
        </div>
       <div  className='formLabelInput'>
        <label for="city">City:</label>
        <input  onChange={(e)=>{
            setCity(e.target.value)
        }} type="text" name="city" id="city"></input>
       </div>
       <div className='formLabelInput'> 
        <label for="street">Street:</label>
        <input   onChange={(e)=>{
            setStreet(e.target.value)
        }}type="text" name="street" id="street"></input>
       </div>
       <div className='formLabelInput'> 
        <label for="firstName">First Name:</label>
        <input  onChange={(e)=>{
            SetFirstName(e.target.value)
        }} type="text" name="firstName" id="firstName"></input>
       </div>
       <div className='formLabelInput'> 
        <label for="lastName">Last Name:</label>
        <input  onChange={(e)=>{
            SetLastName(e.target.value)
        }} type="text" name="lastName" id="lastName"></input>
       </div>
            <button
                onClick={(e)=>{
             
                    e.preventDefault()
                    var date = new Date();
                    var dd = String(date.getDate()).padStart(2, '0');
                    var mm = String(date.getMonth() + 1).padStart(2, '0');
                    var yyyy = date.getFullYear()
                    let today = mm + '/' + dd + '/' + yyyy
                    let year = parseInt(yyyy)
             let orderId = uuid()
        if(firstName && lastName &&   city && street){
        
          axios.get(`http://localhost:5000/GetUser/${userId}`).then((res)=>{
        let shipping = 0;
           if (order.length > 3){
            shipping =100
           }
            let newOrder={ 
                orderId:orderId
                ,firstName:firstName,
                lastName:lastName,
                city:city,
                street:street
                ,userId:userId
                ,items:order
              ,createdAt:today
             , price:price
              ,delivered:false
              ,payed:false,
              year:year,
              type:"Customer",
              email:res.data.email,
              shipping:shipping,
              deliveredAt:today
            }
              axios.post(`http://localhost:5000/CreateOrder`,newOrder).then((res)=>{
                setOrderId(res.data)
                navigate("/CheckoutPage")
              })          
            
            })
            order.map((item)=>{
              axios.post(`http://localhost:5000/RemoveFromStock/${item.itemId}`,{minusQuantity:item.quantity})
            })
            }else{
                setError("FILL THE FORM")
            }
        
        }
        }
                 
            className='singUpFormBTN'>Continue</button>
        </form>
  )
}

export default DeliveryForm