import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DashBoardOrdersOrder from './DashBoardOrdersOrder'
function DashboardOrders() {
  const [orders,setOrders] = useState()
  const [allOrders,setAllOrders]= useState()
    useEffect(()=>{
    axios.get("http://localhost:5000/GetALLOrders").then((res)=>{
      setOrders(res.data)
      setAllOrders(res.data)
    })
  },[])

  function shuffleOrders(value){
    if(value === "all"){
      setOrders(allOrders)
    }else if(value === "Delivered"){
      let arr =[]
      if(orders.length >0){
        orders.map((order)=>{
          if(order.delivered){
            arr.push(order)
          }
        })

      }else{
        allOrders.map((order)=>{
          if(order.delivered){
            arr.push(order)
          }
        })

      }
   
      setOrders(arr)
    }
    else if(value === "NotDelivered"){
      let arr =[]
      if(orders.length >0){
        orders.map((order)=>{
          if(order.delivered === false){
            arr.push(order)
          }
        })

      }else{

        allOrders.map((order)=>{
          if(order.delivered === false){
            arr.push(order)
          }
        })
      }
   
      setOrders(arr)
    }
    else if(value === "Payed"){
      let arr =[]
      if(orders.length >0){
        orders.map((order)=>{
          if(order.payed === true){
            arr.push(order)
          }
        })
      }else{
        allOrders.map((order)=>{
          if(order.payed === true){
            arr.push(order)
          }
        })

      }
   
      setOrders(arr)
    }
    else if(value === "Unpayed"){
      let arr =[]
      if(orders.length >0){}else{}
      orders.map((order)=>{
        if(order.Payed === false){
          arr.push(order)
        }
      })
      setOrders(arr)
    }
  }


  return (
    <div className='px-9 w-full'>
 <div className=' w-full flex items-center justify-between h-20'>
                <p className='text-4xl   font-bold'> Orders</p>
                </div> 

                    <div className='w-full ordersDiv border-2 '>
                
                    <div className=' px-6 w-full border-b-2 h-20 flex items-center justify-between'>
                    <input onChange={(e)=>{
                      let arr =[]

                      allOrders.map((order)=>{
                        if(order.firstName.toLowerCase().includes(e.target.value)|| order.lastName.toLowerCase().includes(e.target.value) ||order.createdAt.includes(e.target.value)|| order.email.toLowerCase().includes(e.target.value)  ){
                          arr.push(order)
                        }
                      })
                      setOrders(arr)
                    }} className=' px-2 hover:bg-blue-100  border-2 text-xl h-10 w-56 sm:w-96 text-left' placeholder='Search..' type="text"></input>
                   
                    <div className=' h-full w-96 flex items-center justify-around'>
                    <select onChange={(e)=>{
                      shuffleOrders(e.target.value)
                    }} className='hidden md:inline-block h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2' name="category" placeholder='Category' id="category">
    <option value="all">All</option>
    <option value="Delivered">Delivered</option>
    <option value="NotDelivered">Not Delivered</option>
    <option value="Payed">Payed</option>
    <option value="Unpayed">Unpayed</option>
  </select>
  <select onChange={(e)=>{
        let arr =[]

        if(orders.length >0 && orders.length > parseInt(e.target.value) ){
          orders.map((order,index)=>{

                if(index < parseInt(e.target.value)+1){
                
                    arr.push(order)
                }
            })
            setOrders(arr)
        }else{
            setOrders(allOrders)
        }
     }}  className=   ' hidden lg:inline-block h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2'name="sort " placeholder='Sort by' id="sort">
    <option value="20">Show 20</option>
    <option value="40">Show 40</option>
    <option value="80">Show 80</option>
    <option value="all">Show All</option>
  </select>
                    </div>
                    </div>  

                <div className='w-full sx:px-5 ordersShow '>

            <div className='border-b-2 h-7 mt-2 border-black w-full flex'>
              <div className='h-full w-1/3 flex'>
                <div className='w-2/6 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                <p>Name</p>
                </div>
                <div className='hidden lg:flex h-full w-4/6 py-1 text-sm font-bold text-gray-400  px-2 justify-start items-center'>
                <p>Email</p>
                </div>
              </div>


              <div className='h-full w-1/4 flex'>
                <div className='w-3/6 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                <p>Total</p>
                </div>
                <div className='h-full ml-7 sm:ml-0 w-3/6 py-1 text-sm font-bold text-gray-400 flex px-2 justify-start items-center'>
                <p>Paid</p>
                </div>
              </div>

              <div className='h-full w-2/5 flex justify-end sm:justify-around'>
                <div className='w-2/5 h-full py-1 text-sm font-bold text-gray-400 hidden md:flex px-2 justify-start items-center'>
                <p>Ordered At</p>
                </div>
                <div className='hidden lg:flex h-full w-2/5 py-1 text-sm font-bold text-gray-400  px-2 justify-start items-center'>
                <p>Status</p>
                </div>
                <div className='w-1/5 h-full py-1 text-sm font-bold text-gray-400 flex px-2 justify-end items-center'>
                <p>Action</p>
                </div>
              </div>
            </div>

          {orders && orders.map((order)=>{
            return <DashBoardOrdersOrder order={order}/>
          })}
        
            


                </div>

                    </div>

    </div>
  )
}

export default DashboardOrders