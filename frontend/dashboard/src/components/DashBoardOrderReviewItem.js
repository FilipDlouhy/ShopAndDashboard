import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DashBoardOrderReviewItem(props) {
   const [item,setItem] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:5000/GetItem/${props.item.itemId}`).then((res)=>{
            setItem(res.data)
      
        })
  
    },[])

  return (
   
    <div className=' w-full h-16 flex items-center border-b-2 '> 

    <div className='w-2/5  h-16 flex justify-around items-center px-4 border-black '>
        <img src={require("../images/4f61bef3-338d-4f22-b823-e57cc04ed429.png")} className='w-12 h-8 mr-5'>
        </img>
    <p className='text-xs font-semibold break-words	' >{item&& item.name} </p>
    </div> 
    <div className='w-1/5 h-16  flex justify-start items-center px-4 border-black'>
    <p className='text-xs font-semibold break-words	' >{props.item.price}$ </p>
    </div>

    <div className='w-2/5 h-16 flex items-center justify-between px-4 border-black'>
    <p className='text-xs font-semibold break-words	' >{props.item.quantity} </p>
    <p className='text-xs font-semibold break-words	' >{item && props.item.quantity * props.item.price }$ </p>
    </div>


    </div> 
    
  )
}

export default DashBoardOrderReviewItem