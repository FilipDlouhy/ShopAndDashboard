
import React, { useEffect, useState,useContext } from 'react'
import Axios from "axios"
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'   

function CheckoutPageItem(props) {
    const [item,setITEM] = useState()
    const [price,setPrice] =useState()
    const { setItem} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(props.item)
        axios.get(`http://localhost:5000/GetAllItems`).then((res)=>{
            res.data.map((item)=>{
                if(item._id === props.item.itemId){
                    setITEM(item)
                            let price = item.price  * props.item.quantity
                            console.log(price)
                            setPrice(price)    
                        }
             
            
            })
           })
    },[])
  return (
    <div className='checkoutPageMiddleItem'>
    <img onClick={(e)=>{
    setItem(item)
        navigate("/ProductPage")
    }} src={ item&&require(`../../images/${item.imageId}`) }></img>
        <h1>{item&&item.name}</h1>

                <div>
                    <h2>Quantity</h2>
                    <p>{props.item.quantity}</p>
                    </div>           

                <div>
                    <h2>Price</h2>
                    <p>{price&&price} $</p>
                    </div>                                                   
    </div>
  )
}

export default CheckoutPageItem