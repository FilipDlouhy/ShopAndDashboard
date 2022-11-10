import React from 'react'
import { useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext'

function DashboardMenuOptions() {
 const{showOptions} = useContext(DashboardContext)
    return (
    <div className={showOptions ? ' font-bold text-white menuOptions w-32 h-16 flex flex-col justify-around items-center shadow-lg bg-[#1f66ff] hover:bg-sky-600 duration-300  cursor-pointer rounded-lg ':"hidden" }>
            <p className='hover:text-blue-700 hover:font-bold duration-300' >Profile </p>
             <p className='hover:text-blue-700 hover:font-bold duration-300' >Exit</p>   
    </div>
  )
}

export default DashboardMenuOptions