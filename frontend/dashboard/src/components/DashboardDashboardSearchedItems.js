import React, { useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext'
import DashboardDashboardSearchCustomer from './DashboardDashboardSearchCustomer'
import DashboardDashboardSearchOrder from './DashboardDashboardSearchOrder'
import DashboardDashboardSearchItem from './DashboardDashboardSearchItem'

function DashboardDashboardSearchedItems() {
  const {finalSearchArr} = useContext(DashboardContext)
  const {showSearch} = useContext(DashboardContext)
  
  return (
    <div className={showSearch?'searchArr':"hidden"}>
      {finalSearchArr && finalSearchArr.map((search)=>{
        if(search.type === "Item"){
          return  <DashboardDashboardSearchItem search={search.data}/>
        }else   if(search.type === "User"){
          return  <DashboardDashboardSearchCustomer search={search.data} />
        }else{
         return <DashboardDashboardSearchOrder search={search.data} />
        }
      })}
      
    </div>
  )
}

export default DashboardDashboardSearchedItems