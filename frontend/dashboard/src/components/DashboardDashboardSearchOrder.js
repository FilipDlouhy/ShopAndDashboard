import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
function DashboardDashboardSearchOrder(props) {
      const navigate = useNavigate()
      const {setReviewdOrder} = useContext(DashboardContext)
  return (
    <div onClick={()=>{
        setReviewdOrder(props.search)
        navigate('/DashboardOrdersReviewOrder')
    }} className='w-full my-2 h-12 font-semibold text-white tracking-wider hover:bg-green-300 duration-300 cursor-pointer  flex  px-5 justify-between items-center'>
    <h1>Order</h1>
    <h3> Ordered at:{props.search.createdAt}</h3>    
</div>
  )
}

export default DashboardDashboardSearchOrder