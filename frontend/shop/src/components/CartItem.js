import React, { useEffect, useState,useContext } from 'react'
import Axios from "axios"
import { UserContext } from '../Context/UserContext'
import axios from 'axios'

function CartItem(props) {
    const { shoppingList} = useContext(UserContext)
    const { setShoppingList} = useContext(UserContext)
    const [cartItem,setCartItem] = useState()
    const [Itemprice,setItemPrice] = useState()
    const[options,setOptions]= useState()
    const { price} = useContext(UserContext)
    const { RendershoppingList} = useContext(UserContext)
    const { RendersetShoppingList} = useContext(UserContext)
    const { setListLength} = useContext(UserContext)
    const { setPrice} = useContext(UserContext)
    

    function renderSelect (){
        let arr = []
        let i
        for(i=1;i<props.item.quantity+4;i++){
                arr.push(i)
        }
        setOptions(arr)
    }

    
    useEffect(()=>{
      
       axios.get(`http://localhost:5000/GetAllItems`).then((res)=>{
        res.data.map((item)=>{
            if(item._id === props.item.itemId){
           let price = item.price* parseInt(props.item.quantity)
                setCartItem(item)
                setItemPrice(price)
                        }
         
        
        })
       })

       renderSelect ()
    },[])
  return (
    <div className='cartItem'>
    <button onClick={()=>{
         let minusPrice = 0
        axios.get(`http://localhost:5000/GetAllItems`).then((res)=>{
            res.data.map((item)=>{
                if(item._id === props.item.itemId){
          

                 let arr = []
                 shoppingList.map((shopItem)=>{
                    if(shopItem.itemId !== props.item.itemId){
                        arr.push(shopItem)
                  
                  
                    }else{
                        minusPrice   = parseInt(shopItem.quantity) *  parseInt(item.price)
                    }
                 })

            RendersetShoppingList(arr)
                setShoppingList(arr)
                console.log(minusPrice)
                setPrice(price - minusPrice)
                setListLength(arr.length)
                    }
            
            })
           })
    }}
    ><i class="fa-sharp fa-solid fa-xmark"></i></button>
    <img src={require(`../../images/${props.item.imageId}`) }></img>
    <h1>{cartItem&&cartItem.name}</h1>
    <div>
    <h2>Quantity</h2>
        <select onChange={(e)=>{

                let arr = []
let quantity = parseInt(e.target.value) 
            let newItem = {
                imageId: props.item.imageId,
                itemId: props.item.itemId,
                quantity: quantity
            }
            shoppingList.map((item)=>{
                if(item.itemId !==  props.item.itemId){
                    arr.push(item)
                }
            })

                arr.push(newItem)


                axios.get(`http://localhost:5000/GetAllItems`).then(res=>{
                    let globalPrice = 0
                    res.data.map((item)=>{
                        if(item._id ===  props.item.itemId){
                            let price = parseInt(newItem.quantity) * parseInt(item.price)
                            setItemPrice(price)             
                        }
                    })
                
                    arr.map((arrItem)=>{
                        res.data.map((item)=>{
                            if(item._id === arrItem.itemId){
                                let price = parseInt(arrItem.quantity) * parseInt(item.price)
                                    globalPrice += price     
                                  
                            }
                        })
                    })
                    setPrice(globalPrice)
                })

                setShoppingList(arr)
        }} 
        
        id="quantity" name="quantity">
            { options && options.map((option)=>{
                if(option === props.item.quantity){
                    return <option id={option} key={option} selected value={option}>{option}</option>
                }else{
                    return <option  id={option}key={option} value={option}>{option}</option>
                }
               
            })}

 
        </select>
    </div>
    <div>
        <h2>Price</h2>
       <p>{Itemprice&&Itemprice}$</p> 
    </div>
</div>
  )
}

export default CartItem