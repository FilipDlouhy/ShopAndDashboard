import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'

function DashboardAddedSeller(props) {
    const navigate = useNavigate()
    const {setRewievdSeller} = useContext(DashboardContext)
    const  {addedSellers} = useContext(DashboardContext)
    const  {setAddedSellers} = useContext(DashboardContext)
     const {notAddedSellers} = useContext(DashboardContext)
     const {setnotAddedSellers} = useContext(DashboardContext)
  return (
    <div className='h-80 w-72 rounded-xl m-7 shadow-lg'>
    <div className='w-full h-1/2 bg-sky-400 rounded-t-xl flex items-center justify-center'>
    <i class={` w-24 h-24 ${props.seller.icon} flex items-center justify-center bg-blue-500 shadow-2xl rounded-full text-4xl text-yellow-50`}></i>
  </div>   
  
  <div className='w-full h-1/2 flex flex-col justify-around items-center'>

          <p className='text-2xl font-extrabold'>{props.seller.name}</p>
          <button onClick={()=>{
            setRewievdSeller(props.seller)
            navigate("/DashBoardSellersSeller")
          }} className='rounded-xl h-10 w-44 font-semibold hover:w-56 duration-300 cursor-pointer bg-[#045DE9] text-white'>To Seller Stats</button>   
           <button onClick={()=>{
                let added = []
                let notAdded = []

                    addedSellers.map((seller)=>{
                        if(seller._id !== props.seller._id){
                            added.push(seller)
                        }else{
                            notAdded.push(seller)
                        }
                    })
                    axios.get(`http://localhost:5000/RemoveSeller/${props.seller._id}`)
                    notAddedSellers.map((seller)=>{
                       
                            notAdded.unshift(seller)
                        
                    })
                    setAddedSellers(added)
                    setnotAddedSellers(notAdded)

           }} className='rounded-xl h-10 w-44 font-semibold hover:w-56 duration-300 cursor-pointer bg-[#F53844] text-white'>Remove Seller</button>   
  </div>
</div>

  )
}

export default DashboardAddedSeller