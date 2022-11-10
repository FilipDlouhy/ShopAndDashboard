import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'

function DashBoardOrdersOrder(props) {
      const navigate = useNavigate()
      const {setReviewdOrder} = useContext(DashboardContext)
  return (
<div className='border-b-2 h-9 py-1 hover:bg-blue-200 duration-200 cursor-pointer  w-full flex'>
              <div className='h-full w-1/3 flex'>
                <div className='w-2/6 h-full py-1 text-xs font-bold text-black flex px-2 justify-start items-center'>
                <p>{props.order.firstName}</p>
                </div>
                <div className=' h-full w-4/6 py-1 text-xs font-bold text-gray-600 hidden lg:flex px-2 justify-start items-center'>
                <p>{props.order.email}</p>
                </div>
              </div>


              <div className='h-full w-1/4 flex'>
                <div className='w-3/6 h-full py-1 text-xs font-bold text-black  flex px-2 justify-start items-center'>
                <p>{props.order.price}$</p>
                </div>
                <div className='h-full ml-7 sm:ml-0 w-3/6 py-1 text-xs font-bolder text-gray-600 flex px-2 justify-start items-center'>
                <p className={props.order.payed ?'p-2 h-5 font-bold w-20 text-red-900 rounded-lg flex items-center justify-center  bg-sky-400' :'p-2 h-5 font-bold w-20 text-red-900 rounded-lg flex items-center justify-center  bg-red-400'}>{props.order.payed ? " Paid " :" Not paid "}</p>
                </div>
              </div>

              <div className='h-full w-2/5 flex justify-end sm:justify-around'>
                <div className='w-2/5 h-full py-1 text-xs font-bold text-gray-600 hidden md:flex px-2 justify-start items-center'>
                <p> {props.order.createdAt}</p>
                </div>
                <div className=' h-full w-2/5 py-1 text-xs font-bold hidden lg:flex px-2 justify-start items-center'>
                <p className={props.order.delivered ?'h-5 rounded-lg w-24 flex justify-center items-center bg-green-500 text-white' :'h-5 rounded-lg w-24 flex justify-center items-center bg-black text-white' }>{props.order.delivered ? "Delivered":"Not Delivered"} </p>
                </div>
                <div className='w-1/5 h-full py-1 text-lg cursor-pointer hover:text-xl duration-300 font-bold text-gray-600 flex px-2 justify-end items-center'>
                <i onClick={()=>{
                    setReviewdOrder(props.order)
                    navigate('/DashboardOrdersReviewOrder')
                    }} class="fa-solid fa-eye text-green-500 "></i>
                </div>
              </div>
            </div>

    )
}

export default DashBoardOrdersOrder