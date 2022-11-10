import React, { useContext } from 'react'
import DashboardDashboardSearchedItems from './DashboardDashboardSearchedItems'
import { DashboardContext } from '../context/DashboardContext'

function DashboardSearchBar() {
  const {searchArray} = useContext(DashboardContext)
  const {setFinalSearchArr} = useContext(DashboardContext)
  
  return (
    <div className=' h-36 md:h-24 border-b-2 ' >
          <div className='flex w-full flex-col sm:flex-row sm:justify-around h-full'>
            <div  className=' lg:pl-7 md:w-96 lg:w-6/12  xl:w-9/12 flex items-center h-full'>
              <input id="showSearch" onChange={(e)=>{
                 
           
   
                 let finalSearch =[]
                 searchArray.map((data)=>{
                    
                   if(data.type === "Item" || data.type === "User"){
                    console.log(data)
                    if(data.data.name.includes( e.target.value)){
                      finalSearch.push(data)
                    }
                   }else{
                    if(data.data.createdAt.includes(e.target.value)){
                      finalSearch.push(data)
                    }
                   }

                  }
               )

                      setFinalSearchArr(finalSearch)

              }} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-12 w-7/12 text-center' type="text"></input>
                    <div className=' hover:bg-gray-100  cursor-pointer flex justify-center items-center border-2 h-12 w-16 '><i class=" text-2xl fa-sharp fa-solid fa-magnifying-glass"></i></div>
                   < DashboardDashboardSearchedItems/>
            </div> 
            

        <div className=' flex items-center w-6/12 md:w-3/12 m-auto h-full '>
        <i class=" mx-5 duration-300 text-2xl cursor-pointer hover:text-blue-700 fa-solid fa-bell"></i>
        <i class=" mx-5  duration-300 text-2xl cursor-pointer hover:text-blue-700 fa-solid fa-moon"></i>
        <div className='flex items-center justify-center bg-[#21D190] h-16 w-16 rounded-full border-2 '>
        <i id='dashboardMenuIcon' class="text-white hover:text-4xl duration-300 cursor-pointer fa-brands fa-shopify text-3xl" ></i>
        </div>
        </div>

        </div>

    </div>
  )
}

export default DashboardSearchBar