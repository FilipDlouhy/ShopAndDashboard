import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext'
function DashboardDashboardSearchItem(props) {
  const navigate = useNavigate()
  const {setRewievdItem} = useContext(DashboardContext)

  return (
    <div onClick={()=>{
      setRewievdItem(props.search)
 navigate('/DashboardProductStats')
    }} className='w-full my-2 h-12 font-semibold text-white tracking-wider hover:bg-green-300 duration-300 cursor-pointer   flex  px-5 justify-between items-center'>
    <h1>Item</h1>
    <h3>Name:{props.search.name}</h3>    
</div>
  )
}

export default DashboardDashboardSearchItem