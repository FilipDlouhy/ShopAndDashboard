import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import img from "../images/0c7fb986-8a4b-488b-86ad-00230a25b3bb.png"
import axios from "axios"

function DashBoardSellersSeller() {
       const{reviewdSeller} = useContext(DashboardContext)
       const [totalRevenue,setTotalRevenue] = useState(0)
       const [totalProducts,setTotalProducts] = useState()
       const [avgRating,setAvgRating] = useState("None")
       const [totalQuantity,setTotalQuantity] = useState(0)
       const[mostSoldItem,setMostSoldItem] = useState()
       useEffect(()=>{
              let total = 0
              let quantityTotal = 0
              let totalReviews = 0 
              let totalReviewsLength = 0     
              axios.get(`http://localhost:5000/GetALLOrders`).then((res)=>{
                     res.data.map((order)=>{
                            order.items.map((item)=>{

                                   axios.get(`http://localhost:5000/GetItem/${item.itemId}`).then((res)=>{
                                          if(res.data.seller === reviewdSeller.name){
                                                        total += item.quantity * res.data.price
                                                        quantityTotal += quantityTotal + item.quantity
                                                        if(total > 0){
                                                               setTotalRevenue(total)


                                                               
                                                        }else{
                                                               setTotalRevenue(0)
                                                        }
                                                        if(quantityTotal > 0){
                                                               setTotalQuantity(quantityTotal)
                                                        }else{
                                                               setTotalQuantity(0)
                                                        }
                                                     
                                                        axios.get(`http://localhost:5000/GetComments/${item.itemId}`).then((res)=>{
                                          
                                                        res.data.map(review=>{
                                                               totalReviews+=  parseInt(review.rating)
                                                    
                                                        })
                                                        totalReviewsLength += res.data.length
                                                        setAvgRating(    Math.round(( totalReviews / totalReviewsLength)* 100) / 100)
                                                    
                                                        })      
                                                  

                                                                    }
                     
                                   })

                            })
                  
                     })
              })
              axios.get(`http://localhost:5000/GetAllItemsFiltered`).then((res)=>{
                     let arr =[]
                     res.data.map((item)=>{
                            if(item.seller === reviewdSeller.name){
                                   arr.push(item)
                            }
                     })
                     if(arr.length > 0){
                            setTotalProducts(arr.length)

                     }else{
                            setTotalProducts(0)  
                     }
                              })
                              
                          axios.get(`http://localhost:5000/GetAllSellerItems/${reviewdSeller.name}`).then((res)=>{
                            let items = res.data
                                 let prevQuantity = 0
                                   items.map((item)=>{
                                          let totalQuantityOfItem = 0
                                          axios.get(`http://localhost:5000/GetALLOrders`).then((res)=>{
                                                 res.data.map((order)=>{
                                                        order.items.map((orderItem)=>{
                                                               if(item._id === orderItem.itemId){
                                                                     
                                                                      totalQuantityOfItem += orderItem.quantity
                                                               }
                                                        })
                                                 })
                                             if(totalQuantityOfItem > prevQuantity){

                                                 prevQuantity= totalQuantityOfItem
                                                 setMostSoldItem(item)
                                             }
                                            
                                          })
                                   })
                              
                               
                     })    
                             
       },[])

    const navigate = useNavigate()
  return (
    <div className='px-2  sm:px-9 h-screen w-full'>


    <div className=' w-full flex items-center   justify-between px-2 md:px-20 h-40'>


    <p className='text-lg sm:text-4xl   font-bold'> Seller Overview</p>

                <div onClick={()=>{navigate('/DashBoardSellers')}} className='w-72 h-14 shadow-xl justify-center rounded-md hover:w-96 duration-500  text-white  text-lg lg:text-2xl font-semibold items-center flex cursor-pointer hover:bg-cyan-700 hover:tracking-widest bg-cyan-500'>
                    <p>Back to all Sellers</p>
                </div>
   </div> 




        <div className='w-full h-72 flex justify-between'>
            <div className='w-1/2 h-full  flex items-center justify-center'>
            <p className='text-6xl font-bold'>
           {reviewdSeller.name}
            </p>
            </div>


            <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className='text-4xl sm:text-8xl  w-24 sm:w-48  h-24 sm:h-48  text-red-50  rounded-full bg-sky-500 shadow-xl flex items-center justify-center'>
                    <i class={`${reviewdSeller.icon}`}></i>

                    </div>

            </div>

        </div>

        <div className=' justify-between w-full flex items-center h-96 lg:flex-nowrap flex-wrap  lg:h-36'>

                    <div className='  w-96 lg:w-4/12 mx-auto  lg:mx-4 flex items-center px-9 border-2  rounded-md h-24'>
                    <div className= '     w-14 h-14 bg-[#d121964b] flex   justify-center items-center rounded-full'>
                    <i class="   text-2xl text-purple-800  fa-solid fa-sack-dollar"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Sales Of Nike</p>
                           <p className='text-sm'>{totalRevenue && totalRevenue} $</p>
                           </div>

               

                    </div>

                    <div className='     w-96 lg:w-4/12 mx-auto  lg:mx-4  flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#5f2fff4b] flex justify-center items-center rounded-full'>
                    <i class="text-2xl text-blue-800 fa-solid fa-calendar-days"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Selling From</p>
                           <p className='text-sm'>{reviewdSeller.createdAt}</p>
                           </div>

               

                    </div>


                    <div className=' w-96 lg:w-4/12 mx-auto  lg:mx-4  flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#ff2e2e4b] flex  justify-center items-center rounded-full'>
                    <i class=" text-2xl text-red-600 fa-solid fa-basket-shopping"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Products From Nike</p>
                           <p className='text-sm'>{totalProducts  && totalProducts}</p>
                           </div>

               

                    </div>

                </div>


                <div className=' justify-between w-full flex items-center h-96 lg:flex-nowrap flex-wrap  lg:h-36'>

<div className='  w-96 lg:w-4/12 mx-auto  lg:mx-4 flex items-center px-9 border-2  rounded-md h-24'>
<div className='w-14 h-14 bg-[#21d1c24b] flex justify-center items-center rounded-full'>
<i class=" text-2xl text-cyan-800  fa-brands fa-cc-amazon-pay"></i>
</div> 

<div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
       <p className='font-bold text-sm tracking-wide '>Total Quantity Of Products Sold</p>
       <p className='text-sm'>{totalQuantity && totalQuantity}</p>
       </div>



</div>

<div className='  w-96 lg:w-4/12 mx-auto  lg:mx-4  flex items-center px-9 border-2  rounded-md h-24'>
<div className='w-20 h-20 bg-[#472fff20] flex  justify-center items-center rounded-full p-2'>
    <img src={img}></img>
    </div> 

<div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
       <p className='font-bold text-sm tracking-wide '>Most Sold From Nike</p>
       <p className='text-sm'>{mostSoldItem ?  mostSoldItem.name: "Zero Items Sold"}</p>
       </div>



</div>


<div className='   w-96 lg:w-4/12 mx-auto  lg:mx-4  flex items-center px-9 border-2  rounded-md h-24'>
<div className='w-14 h-14 bg-[#2eff2e4b] flex  justify-center items-center rounded-full'>
<i class=" text-2xl text-green-600 fa-solid fa-star"></i>
  
</div> 

<div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
       <p className='font-bold text-sm tracking-wide '>Avg review</p>
       <p className='text-sm'>{avgRating && avgRating}</p>
       </div>



</div>

</div>
                    

    </div>
  )
}

export default DashBoardSellersSeller