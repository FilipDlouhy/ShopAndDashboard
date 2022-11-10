import React from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'

function OutputSearchItem(props) {
    const [item,setITEM] = useState()
    const { setItem} = useContext(UserContext)
const navigate = useNavigate()
  useEffect(()=>{
if(props.item){
    setITEM(props.item)
}
  },[])
    return (
    
<div onClick={()=>{
               
                      setItem(props.item)
                      navigate("/ProductPage")
            }} className='outputSearch'>
            <div >
                <p>Category</p>
            <p>{item&&item.category}</p>
                </div>
           <div>
           <p>Name</p>
           <p>{item&&item.name}</p>
            </div>
            <div>
            <p>Price</p>
            <p>{item&&item.price}$</p> 
                </div>
        </div>  )
}

export default OutputSearchItem