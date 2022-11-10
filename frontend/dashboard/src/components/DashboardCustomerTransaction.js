import React , { useState } from 'react'
import axios from 'axios'

function DashboardCustomerTransaction(props) {
    
    const [email,setEmail] = useState()
    const [name,setName] = useState()
    axios.get(`http://localhost:5000/GetUser/${props.transaction.userId}`).then((res)=>{
        setName (res.data.name)
    setEmail (res.data.email)
    })
  return (
    <div className='h-14 border-b-2 flex px-2 sm:px-8'>
    <div className='h-full w-1/2 flex items-center justify-start'>                        
        <div className=' w-1/3 xs:w-1/2 xl:w-3/4 flex justify-between'>
        <p className=' text-xs xs:text-sm font-extrabold text-gray-700'>Customer</p>
        <p className='hidden ml-12 md:inline-block text-sm font-semibold text-gray-700'>{name&&name}</p>
        <p className=' hidden xl:inline-block text-sm font-semibold text-gray-700'>{email&&email}</p>
        </div>
    </div>
    <div className='h-full w-1/4 flex items-center justify-start '>
    <p className=' text-xs sm:text-sm font-semibold text-gray-700'>{props.transaction.createdAt}</p>
    </div>
    <div className='h-full w-1/4 flex justify-end items-center '>
    <p className=' text-sm sm:text-xl font-semibold text-green-500'>{props.transaction.money}$</p>
    </div>
    </div>  )
}

export default DashboardCustomerTransaction