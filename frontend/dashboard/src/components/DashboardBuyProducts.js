import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import DashboardAddProductIntoStockProduct from './DashboardAddProductIntoStockProduct'
function DashboardBuyProducts() {
   const navigate = useNavigate()
   const {itemsStock} = useContext(DashboardContext)
   const {setItemsStock} = useContext(DashboardContext)
useEffect(()=>{
  axios.get("http://localhost:5000/GetAllItemsFiltered").then((res)=>{
    setItemsStock(res.data)
  })

},[])
    return (
    <div className='relative px-9 h-screen w-full'>


    <div className=' w-full flex items-center   justify-between px-20 h-40'>


    <p className='text-4xl   font-bold'> Buy Products</p>

   </div> 

            <div className='w-full buyProductsHeight  flex flex-wrap items-center justify-around'>

                {itemsStock && itemsStock.map((item)=>{
                  return <DashboardAddProductIntoStockProduct item={item}/>
                })}
            </div>


               
    </div>
  )
}

export default DashboardBuyProducts