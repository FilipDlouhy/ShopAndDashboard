
import { useNavigate } from 'react-router-dom'
import img from "../images/0c7fb986-8a4b-488b-86ad-00230a25b3bb.png"
import React, { useContext, useEffect, useState } from 'react'
import { DashboardContext } from '../context/DashboardContext'
import axios from 'axios'
import { comment } from 'postcss'
function DashboardProductStats() {
    const navigate = useNavigate()
    const {reviewedItem} = useContext(DashboardContext)
    const [totalSold,setTotalSold] = useState(0)
    const [totalRevenue,setTotalRevenue] = useState(0)
    const[avgRating,setAvgRating] = useState(0)
    useEffect(()=>{
       let totalsold = 0
       let revenue =0
       axios.get(`http://localhost:5000/GetALLOrders`).then((res)=>{
          
              res.data.map(order=>{
        
                     order.items.map((item)=>{
                            if(item.itemId === reviewedItem._id){
                                   totalsold += totalsold + item.quantity
                                   revenue +=  item.price * item.quantity
                                   setTotalSold(totalsold)
                                   setTotalRevenue(revenue)
                            }
                     })
              })
       })

       axios.get(`http://localhost:5000/GetComments/${reviewedItem._id}`).then((res)=>{
              let rating = 0
              if(res.data.length > 0){
                     res.data.map((coment)=>{
                            rating += parseInt(coment.rating)
                           })
                           setAvgRating(    Math.round((rating/res.data.length) * 100) / 100)
                        
              }
     
       })
    },[])
  return (
    <div className='px-9 h-screen w-full'>


    <div className=' w-full flex items-center   justify-between px-2 md:px-20 h-40'>


    <p className='text-lg sm:text-4xl   font-bold'> Product Overview</p>

                <div onClick={()=>{navigate('/DashboardBuyProducts')}} className='w-72 h-14 shadow-xl justify-center rounded-md hover:w-96 duration-500  text-white  text-lg lg:text-2xl font-semibold items-center flex cursor-pointer hover:bg-cyan-700 hover:tracking-widest bg-cyan-500'>
                    <p>Back to Buy Products</p>
                </div>
   </div> 




        <div className='w-full h-72 flex justify-between'>
            <div className='w-1/2 h-full  flex items-center justify-center'>
            <p className='text-2xl sm:text-6xl font-bold'>
            {reviewedItem.name}
            </p>
            </div>


            <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className=' text-4xl sm:text-8xl  w-24 sm:w-48  h-24 sm:h-48  text-red-50  rounded-full bg-sky-500 shadow-xl flex items-center justify-center p-4'>
                    <img src={reviewedItem.imageId}></img>

                    </div>

            </div>

        </div>

        <div className=' justify-between w-full flex items-center h-96 lg:flex-nowrap flex-wrap  lg:h-36'>

                    <div className=' w-96 lg:w-4/12 mx-auto  lg:mx-4 flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#d121964b] flex justify-center items-center rounded-full'>
                    <i class="text-2xl text-purple-800  fa-solid fa-sack-dollar"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Shoes From</p>
                           <p className='text-sm'>{reviewedItem.seller}</p>
                           </div>

               

                    </div>

                    <div className=' w-96 lg:w-4/12 mx-auto  lg:mx-4  flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#5f2fff4b] flex justify-center items-center rounded-full'>
                    <i class="text-2xl text-blue-800  fa-solid fa-truck-fast"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Sold</p>
                           <p className='text-sm'>{totalSold&&totalSold}</p>
                           </div>

               

                    </div>


                    <div className=' w-96 lg:w-4/12  mx-auto  lg:mx-4  flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#ff2e2e4b] flex justify-center items-center rounded-full'>
                    <i class=" text-2xl text-red-600 fa-solid fa-basket-shopping"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Revenue</p>
                           <p className='text-sm'>{totalRevenue&&totalRevenue}$</p>
                           </div>

               

                    </div>

                </div>
                <div className=' justify-center w-full flex items-center  h-96 lg:flex-nowrap flex-wrap  lg:h-36'>






<div className='w-96 lg:w-4/12  mx-auto  lg:mx-4   flex items-center px-9 border-2  rounded-md h-24'>
<div className='w-14 h-14 bg-[#2eff2e4b] flex justify-center items-center rounded-full'>
<i class=" text-2xl text-green-600 fa-solid fa-star"></i>
  
</div> 

<div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
       <p className='font-bold text-sm tracking-wide '>Avg review</p>
       <p className='text-sm'>{avgRating&&avgRating}</p>
       </div>



</div>

</div>
                    

    </div>
  )
}

export default DashboardProductStats