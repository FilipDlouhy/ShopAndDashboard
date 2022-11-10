import React from 'react'

function DashboardSellerTransaction(props) {

  return (
    <div className='h-14 border-b-2 flex px-2 sm:px-8'>
    <div className='h-full w-1/2 flex items-center justify-start'>                        
        <div className='w-1/2 flex justify-between'>
        <p className='text-sm font-extrabold text-gray-700'>Seller</p>
        <p className=' hidden ml-16 lg:ml-0 md:inline-block text-sm font-semibold text-gray-700'>{props.transaction.sellerName}</p>
        </div>
    </div>
    <div className='h-full w-1/4 flex items-center justify-start '>
    <p className=' text-xs sm:text-sm font-semibold text-gray-700'>{props.transaction.createdAt}</p>
    </div>
    <div className='h-full w-1/4 flex justify-end items-center '>
    <p className='text-sm sm:text-xl font-semibold text-green-500'>{props.transaction.money}$</p>
    </div>
    </div>

  )
}

export default DashboardSellerTransaction