
import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
function DashboardUserUser(props) {
    const navigate =  useNavigate()
    const {setRewievdUser} = useContext(DashboardContext)
  return (
    <div onClick={()=>{
        setRewievdUser(props.user)
    navigate('/DashBoardProfilePage')
    } }className='w-52 relative rounded-lg h-64 m-3 shadow-lg hover:shadow-2xl duration-300 cursor-pointer'>
    <div className='w-full h-1/2 bg-[#63A4FF]  rounded-t-lg flex justify-center items-center'>

        <div className='w-24 rounded-full h-24  flex justify-center items-center bg-slate-50 shadow-xl   '>

        <i class="fa-solid fa-user text-4xl text-blue-500"></i>

        </div>  

    </div>

 
        

    <div className='w-full h-1/2  flex flex-col justify-around items-center'>

        <p className=' text-md font-semibold'> {props.user.name}</p>
        <p className='text-sm text-gray-500'>Customer</p>
         <p className='text-sm text-gray-500 font-semibold'>{props.user.email}</p>       
    </div>          
</div>
  )
}

export default DashboardUserUser