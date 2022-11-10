import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import DashBoardOrderReviewItem from './DashBoardOrderReviewItem'
import axios from 'axios'
function DashboardOrdersReviewOrder() {
    const {reviewdOrder} = useContext(DashboardContext)
      const navigate = useNavigate()
         const [delivered,SetDelivered] = useState()
         const [today,setToday] = useState()
useEffect(()=>{
    setToday(reviewdOrder.deliveredAt)
            SetDelivered(reviewdOrder.delivered)
},[])
  return (
    <div className='px-9 h-screen w-full '>
  <div className='px-12 w-3/5 flex items-center justify-between h-40'>
  <button onClick={()=>navigate("/DashboardOrders")} className='h-12 w-52   hover:bg-[#009FFD] duration-200 text-xl justify-between text-white font-bold rounded cursor-pointer  hover:bg-[] bg-[#020202]'>Back to Orders</button>
                <p className='text-4xl   font-bold'> Order Review</p>
                    </div> 


                  
                    <div className='w-full flex h-24 justify-between bg-blue-500'>
                            <div className=' flex justify-around flex-col items-start h-full w-1/2 p-4 '>
                                <p className='text-sm font-semibold text-white tracking-wide'>
                                <i class="fa-solid fa-calendar-days "></i> Orderet at  { reviewdOrder && reviewdOrder.createdAt} </p>
                                <p className='text-xs text-white tracking-wide'>
                                    OrderId : { reviewdOrder && reviewdOrder._id}
                                </p>
                            </div>


                            <div className=' flex justify-end  items-center h-full w-80 p-2 '>

          
                           <div className='h-16 rounded bg-blue-700 shadow-md text-2xl text-white flex justify-center items-center w-16'>
                           <i class="fa-solid fa-print"></i>
                            </div> 
                            </div>
                      </div>
                    <div className='w-full orderPreviewDiv'>

                        <div className='w-full flex h-48'>

                            <div className='w-1/3 flex items-center px-8 h-full'>
                                
                                    <div className='bg-[#09C6F9] rounded-full flex justify-center items-center  h-24 w-24'>
                                    <i class="fa-solid fa-user text-5xl text-cyan-50"></i>
                                    </div>
                                        <div className='h-24 w-48 text-sm flex flex-col items-start ml-4'>
                                            <h1 className='m-1 font-semibold'>Customer</h1>
                                            <p className='m-1'>{ reviewdOrder && reviewdOrder.firstName}</p>
                                            <p className='m-1'>{ reviewdOrder && reviewdOrder.email}</p>
                                        </div>

                            </div>


                            <div className='w-1/3 flex items-center px-8 h-full'>
                                
                                <div className='bg-[#09C6F9] rounded-full flex justify-center items-center  h-24 w-24'>
                                <i class=" text-5xl text-cyan-50 fa-solid fa-truck-fast"></i>
                                </div>
                                    <div className='h-24 w-48 text-sm flex flex-col items-start ml-4'>
                                        <h1 className='m-1 font-semibold'>Order Info</h1>
                                        <p className='m-1'>Shipping to { reviewdOrder && reviewdOrder.city}</p>
                                        <p className='m-1'>Payment by Card</p>
                                    </div>

                        </div>


                        <div className='w-1/3 flex items-center px-8 h-full'>
                                
                                <div className='bg-[#09C6F9] rounded-full flex justify-center items-center  h-24 w-24'>
                                <i class= "  text-5xl text-cyan-50  fa-solid fa-location-dot"></i>                                </div>
                                    <div className='h-24 w-48 text-sm flex flex-col items-start ml-4'>
                                        <h1 className='m-1 font-semibold'>Deliver To</h1>
                                        <p className='m-1'>Adress:{ reviewdOrder && reviewdOrder.city}</p>
                                        <p className='m-1'>{ reviewdOrder && reviewdOrder.street}</p>
                                    </div>

                        </div>

                        </div>  
                            <div className='w-full flex  h-96'>
                                <div className='h-full flex justify-start flex-col items-center w-4/5'>
                       <div className=' w-full'>
                        <div className='rounded  shadow-md pt-2 w-full'>
                        <div className=' w-full h-11 flex '> 

                                <div className='w-2/5 flex border-b-2 justify-start items-center px-4 border-black h-11'>
                                <p className='text-lg font-semibold text-gray-500'> Product</p>
                                </div> 
                                <div className='w-1/5 h-11 border-b-2   flex justify-start items-center px-4 border-black'>
                                <p className='text-lg font-semibold text-gray-500'> Unit Price</p>
                                </div>

                                <div className='w-2/5 h-11 border-b-2 flex items-center justify-between px-4 border-black'>
                                <p className='text-lg font-semibold text-gray-500'> Quantity </p>
                                <p className='text-lg font-semibold text-gray-500'> Total</p>
                                </div>


                                </div> 
                                        <div className='w-full  h-80'>
                                                <div className= ' offset w-full h-64'>
                                                {reviewdOrder && reviewdOrder.items.map((item)=>{
                                                    return <DashBoardOrderReviewItem item={item}/>
                                                })}
                                                </div>
                                                <div className='w-full flex justify-end bg-blue-200 h-32'>
                                                        <div className='h-full w-2/5'>
                                                                    <div className='w-full items-center flex justify-between px-8 h-1/4'>
                                                                        <p className='font-semibold'>Subtotal:</p>
                                                                        <p className='text-xs'>{reviewdOrder.price}$</p>
                                                                    </div>


                                                                    <div className='w-full items-center flex justify-between px-8 h-1/4'>
                                                                    <p className='font-semibold'>Shipping:</p>
                                                                    <p className='text-xs'>{reviewdOrder.shipping}$</p>
                                                                    </div>



                                                                    <div className='w-full items-center flex justify-between px-8 h-1/4'>
                                                                    <p className='font-semibold'>Grandtotal</p>
                                                                    <p className='font-extrabold'>{reviewdOrder.shipping +reviewdOrder.price }$</p>
                                                                    </div>


                                                                    <div className='w-full items-center flex justify-between px-8 h-1/4'>
                                                                    <p className='font-semibold'>Status</p>
                                                                    <p className={reviewdOrder.payed ?'w-24 h-6  rounded flex items-center justify-center bg-green-500 text-white font-semibold text-sm' :'w-24 h-6  rounded flex items-center justify-center bg-red-500 text-white font-semibold text-sm'  }> {reviewdOrder.payed ? "Payed" :"Not Payed"}</p>
                                                                     </div>
                                                        </div>
                                                </div>
                                        </div>
                                  </div>
                
                    </div>
                                    
                                    
                                </div>

                                <div className='h-full ml-11  w-1/3'>
                                   
                                   {reviewdOrder.payed &&      <div className='w-full h-24 rounded border-2 flex items-center bg-slate-200 justify-center'>
                                         
                                         <div onClick={()=>{
                                                 var date = new Date();
                                                 var dd = String(date.getDate()).padStart(2, '0');
                                                 var mm = String(date.getMonth() + 1).padStart(2, '0');
                                                 var yyyy = date.getFullYear()
                                                 let today = mm + '/' + dd + '/' + yyyy
                                                 setToday(today)
                                                 axios.post(`http://localhost:5000/DeliverOrder/${reviewdOrder._id}`,{deliveredAt:today})
                                                 SetDelivered(true)
                                                 }} className= {delivered ? 'w-3/4 flex items-center text-white font-semibold hover:h-14 duration-300 cursor-pointer hover:rounded-md justify-center h-12 hover:bg-[#5577ffaa] bg-sky-500  rounded border-2': 'w-3/4 flex items-center text-white font-semibold hover:h-14 duration-300 cursor-pointer hover:rounded-md justify-center h-12 hover:bg-[#000000aa] bg-black  rounded border-2'}  >
                                            {delivered ?  `Delivered at ${today}` :"Mark as Delivered"}
                                        </div>
    
    
                                        </div> }
                                    

                                </div>
                            </div>



                    </div>

    </div>
  )
}

export default DashboardOrdersReviewOrder