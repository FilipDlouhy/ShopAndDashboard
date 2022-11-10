import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
function DashboardDashboardSearchCustomer(props) {
  const {setRewievdUser} = useContext(DashboardContext)
  const navigate = useNavigate()
  return (
    <div onClick={()=>{
      setRewievdUser(props.search)
      navigate('/DashBoardProfilePage')
    }} className='w-full my-2 h-12 font-semibold text-white tracking-wider hover:bg-green-300 duration-300 cursor-pointer flex  px-5 justify-between items-center'>
    <h1>Customer</h1>
    <h3>Name:{props.search.name}</h3>    
</div>
  )
}

export default DashboardDashboardSearchCustomer