import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import DashBoardOrdersOrder from './DashBoardOrdersOrder'
function DashBoardProfilePage() {
    const navigate = useNavigate()
    const{reviewdUser} = useContext(DashboardContext)
    const[userOrders,setUserOrders]= useState()

    useEffect(()=>{
            axios.get(`http://localhost:5000/GetAllOrders/${reviewdUser._id}`).then((res)=>{
                setUserOrders(res.data)
            })
    },[])
  return (
    <div className='px-9 h-screen w-full'>


                        <div className=' w-full flex items-center   justify-center px-20 h-40'>
                            <div className='w-2/5'>
                            <button onClick={()=>{
                                navigate("/DashboardUsers")
                            }} className='w-64 h-16  rounded-lg hover:bg-cyan-400 hover:w-72 duration-500 cursor-pointer flex items-center justify-center bg-emerald-500 text-2xl font-semibold text-white'>
                            Back to Users
                        </button>
                            </div>
                     

                        <p className='text-4xl w-3/5   text-start font-bold'> Profile Page</p>

                    </div> 


                <div className=' profilePageWidth flex justify-start rounded-2xl items-center flex-col shadow-xl mx-auto my-10'>

                    <div className='w-full h-2/5 rounded-t-2xl flex justify-center items-center bg-green-400'>
                        
                          <i class="rounded-full text-green-200 text-6xl w-32 h-32 fa-solid flex justify-center items-center shadow-lg bg-green-500 fa-user"></i>

                    </div>

                    <div className='w-full h-3/5 flex justify-center items-center '>
                        <div className='w-1/2 h-full flex justify-around items-center flex-col'>
                            <p className='text-md h-16 flex justify-center items-center w-64 shadow-lg font-semibold text-white bg-[#F53844] rounded-xl'>{reviewdUser.name}</p>
                            <p className='text-md h-16 flex justify-center items-center w-64 shadow-lg font-semibold text-white   bg-[#0652C5]  rounded-xl'>{reviewdUser.email}</p>
                        </div>
                           
                        <div className='w-1/2 h-full flex justify-around items-center flex-col'>
                            <p className='text-md h-16 flex justify-center items-center w-64 shadow-lg font-semibold text-white   bg-[#90D5EC]  rounded-xl'>Total Orders {userOrders && userOrders.length}</p>
                            <p className='text-md h-16 flex justify-center items-center w-64 shadow-lg font-semibold text-white   bg-[#FC575E]  rounded-xl'>{reviewdUser.createdAt}</p>
                        </div>
                    </div>

                </div>



                <div className=' w-full flex items-center   justify-center px-20 h-40'>
                    <p className='text-2xl   font-bold'> Users Orders</p>
                </div> 
                
                <div className='w-full px-5 ordersShow '>

                <div className='border-b-2 h-7 mt-2 border-black w-full flex'>
                <div className='h-full w-1/3 flex'>
                    <div className='w-2/6 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                    <p>Name</p>
                    </div>
                    <div className='h-full w-4/6 py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                    <p>Email</p>
                    </div>
                </div>


                <div className='h-full w-1/4 flex'>
                    <div className='w-3/6 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                    <p>Total</p>
                    </div>
                    <div className='h-full w-3/6 py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                    <p>Paid</p>
                    </div>
                </div>

                <div className='h-full w-2/5 flex justify-around'>
                    <div className='w-2/5 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                    <p>Date</p>
                    </div>
                    <div className='h-full w-2/5 py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                    <p>Status</p>
                    </div>
                    <div className='w-1/5 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-end items-center'>
                    <p>Action</p>
                    </div>
                </div>
                </div>
                {userOrders&& userOrders.map((order)=>{
                    return <DashBoardOrdersOrder order={order}/>
                })}
                   



    </div>

    </div>
  )
}

export default DashBoardProfilePage