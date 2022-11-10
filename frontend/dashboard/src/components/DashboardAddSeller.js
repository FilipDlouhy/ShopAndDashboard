
import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import { DashboardContext } from '../context/DashboardContext'
import DashboardAddedSeller from './DashboardAddedSeller'
import DashboardNotAddedSeller from './DashboardNotAddedSeller'
function DashboardAddSeller() {
      const  {addedSellers} = useContext(DashboardContext)
      const  {setAddedSellers} = useContext(DashboardContext)
       const {notAddedSellers} = useContext(DashboardContext)
       const {setnotAddedSellers} = useContext(DashboardContext)
   
        useEffect(()=>{
                axios.get("http://localhost:5000/GetSellersTrue").then((res)=>{
                        setAddedSellers(res.data)
                })

                axios.get("http://localhost:5000/GetSellersFalse").then((res)=>{
                        setnotAddedSellers(res.data)
                })
},[])
  return (
    <div className='px-9 h-screen w-full'>


    <div className=' w-full flex items-center   justify-between px-20 h-40'>


    <p className='text-4xl   font-bold'> All Sellers</p>

   </div> 
   <div className=' w-full flex items-center   justify-center px-20 h-40'>


<p className='text-2xl   font-bold'> Recieving From</p>

</div> 


            <div className='flex-wrap w-full flex justify-around items-center buyProductsHeight'>

                        {addedSellers&& addedSellers.map((seller)=>{
                                return                 <DashboardAddedSeller seller={seller}/>
                        })}

            </div>


            <div className=' w-full flex items-center   justify-center px-20 h-40'>
                    <p className='text-2xl   font-bold'>Could be Added</p>
            </div>


            <div className='flex-wrap w-full flex justify-around items-center buyProductsHeight'>
                
                {notAddedSellers&& notAddedSellers.map((seller)=>{
                        return                <DashboardNotAddedSeller seller={seller}/>
                })}
            

                </div>
    </div>
  )
}

export default DashboardAddSeller