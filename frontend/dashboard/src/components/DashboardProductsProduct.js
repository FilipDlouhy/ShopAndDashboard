import React, { useContext,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import axios from 'axios'
function DashboardProductsProduct(props) {
  const navigate = useNavigate() 
  const {setUpdatedProduct} = useContext(DashboardContext)
  const {setItems} = useContext(DashboardContext)
  const {setRewievdItem} = useContext(DashboardContext)
  useEffect(()=>{
    console.log()
  },[])
  return (
    <div className=' w-80 h:80 sm:h-96 m-5  rounded border-2' >
    <img onClick={()=>{
  setRewievdItem(props.item)
  navigate('/DashboardProductStats')
    }} src={props.item.imageId} className='h-64 p-10 hover:w-full duration-300 cursor-pointer hover:bg-blue-200 w-11/12'>
   </img>
   <div className='px-4 w-full flex justify-around flex-col pb-10 h-40'>
       <p className='text-sm text-gray-500'>{props.item.name}</p>
       <p className='text font-bold'>Price: {props.item.price} $</p>
       <div className='w-full h-14  flex justify-between'>
           <button onClick={()=>{
            setUpdatedProduct(props.item)
            navigate("/DashBoardUpdateProduct")
          }} className='w-6/12 flex  text-2xl   hover:text-3xl duration-200 items-center justify-center border-black  border-l-2 border-r-2  h-full border-y-2'>
           <i class=" text-green-600 fa-solid fa-pen"></i>
           </button>
           <button className='w-1/2  text-2xl flex hover:text-3xl duration-200  items-center justify-center border-black border-r-2 h-full border-y-2'>
           <i onClick={()=>{
            axios.get(`http://localhost:5000/DeleteItem/${props.item._id}`).then((res)=>{
              setItems(res.data)
            })
           }} class=" text-red-700  fa-solid fa-trash"></i>
           </button>
       </div>
   </div>
</div>
  )
}

export default DashboardProductsProduct