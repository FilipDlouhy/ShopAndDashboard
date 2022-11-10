import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'

function DashboardSellersSellerSmall(props) {
    const navigate = useNavigate()
  const {setRewievdSeller} = useContext(DashboardContext)
    return (
    <div onClick={()=>{
        setRewievdSeller(props.seller)
        navigate("/DashBoardSellersSeller") }}  className='relative cursor-pointer hover:shadow-2xl m-5 duration-300 h-32 sm:h-72 w-72 shadow-xl flex justify-between flex-col rounded-lg'>
    <div className='w-full hidden sm:inline-block h-1/3 rounded-t-lg bg-sky-400'>

    </div>

        <div className='z-50 hidden  absolute h-32 shadow-xl w-32 rounded-full  text-sky-100 bg-sky-500 sm:flex items-center justify-center top-10 left-20	'>
                        <i  class={`text-6xl  hover:text-7xl duration-300 ${props.seller.icon}`}></i>
        </div>

        <div className='h-1/2 w-full flex flex-col justify-around items-center pt-6'>
            <p className='text-2xl font-bold'>{props.seller.name}</p>
            <p className='text-xl font-semibold text-gray-400'> from {props.seller.createdAt}</p>                
        </div>
</div>
  )
}

export default DashboardSellersSellerSmall