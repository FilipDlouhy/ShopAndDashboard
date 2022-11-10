import DashboardUserUser from "./DashboardUserUser"
import React, { useContext,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import axios from 'axios'

function DashboardUsers() {
 
  const [users,setUsers] = useState()
  const [allusers,setallUsers] = useState()
  const [orders,setOrders]= useState()
  useEffect(()=>{
    axios.get("http://localhost:5000/GetUsersAdmin").then((res)=>{
      setUsers(res.data)
      setallUsers(res.data)
    })

    axios.get("http://localhost:5000/GetALLOrders").then((res)=>{
      setOrders(res.data)
      })

  },[])
  function shuffleUsers(value){
    if(value === "Latest"){
      let arr  =[]
      let finalArr = []
      if(users.length >0){
        users.map((item)=>{
          let month = (item.createdAt.slice(0,2))
          let day = (item.createdAt.slice(3,5))
          let year = (item.createdAt.slice(6,10))
          let date = new Date(`${year}-${month}-${day}`)
         let obj = {date:date,data:item}
         arr.push(obj)
        
         
        })
        const sortedDesc = arr.sort(
          (objA, objB) => Number(objB.date) - Number(objA.date),
        );
        sortedDesc.map((item)=>{
          finalArr.push(item.data)
        })
      }else{
        allusers.map((item)=>{
          let month = (item.createdAt.slice(0,2))
          let day = (item.createdAt.slice(3,5))
          let year = (item.createdAt.slice(6,10))
          let date = new Date(`${year}-${month}-${day}`)
         let obj = {date:date,data:item}
         arr.push(obj)
        
         
        })
        const sortedDesc = arr.sort(
          (objA, objB) => Number(objB.date) - Number(objA.date),
        );
        sortedDesc.map((item)=>{
          finalArr.push(item.data)
        })
      }
  
  
      setUsers(finalArr)
      console.log(finalArr)
    }else if(value === "Soonest"){
      let arr  =[]
      let finalArr = []
      if(users.length >0){
        users.map((item)=>{
          let month = (item.createdAt.slice(0,2))
          let day = (item.createdAt.slice(3,5))
          let year = (item.createdAt.slice(6,10))
          let date = new Date(`${year}-${month}-${day}`)
         let obj = {date:date,data:item}
         arr.push(obj)
        
         
        })
        const sortedAsc = arr.sort(
          (objA, objB) => Number(objA.date) - Number(objB.date),
        );
        sortedAsc.map((item)=>{
          finalArr.push(item.data)
        })
      }else{
  
        allusers.map((item)=>{
          let month = (item.createdAt.slice(0,2))
          let day = (item.createdAt.slice(3,5))
          let year = (item.createdAt.slice(6,10))
          let date = new Date(`${year}-${month}-${day}`)
         let obj = {date:date,data:item}
         arr.push(obj)
        
         
        })
        const sortedAsc = arr.sort(
          (objA, objB) => Number(objA.date) - Number(objB.date),
        );
        sortedAsc.map((item)=>{
          finalArr.push(item.data)
        })
      }
  
      console.log(finalArr)
      setUsers(finalArr)
    } else if(value===  "MostOrdered"){

      let arr = []
  let finalArr = []
  if(users.length >0){
    users.map((user)=>{
      arr.push({id:user._id,quantity:0})
    })
  arr.map(id=>{
    orders.map((order)=>{
      if(order.userId === id.id){
        id.quantity++
      }
    })
  })
  arr.sort((a, b) => { return b.quantity - a.quantity});

  arr.map((id)=>{
    users.map((user)=>{
      if(user._id === id.id){
        finalArr.push(user)
      }
    })
  })

  }else{
    allusers.map((user)=>{
      arr.push({id:user._id,quantity:0})
    })
  arr.map(id=>{
    orders.map((order)=>{
      if(order.userId === id.id){
        id.quantity++
      }
    })
  })
  arr.sort((a, b) => { return b.quantity - a.quantity});

  arr.map((id)=>{
    allusers.map((user)=>{
      if(user._id === id.id){
        finalArr.push(user)
      }
    })
  })

  }
  
 setUsers(finalArr)


    }
    else{
      let arr = []
      let finalArr = []
      if(users.length >0){
        users.map((user)=>{
          arr.push({id:user._id,quantity:0})
        })
      arr.map(id=>{
        orders.map((order)=>{
          if(order.userId === id.id){
            id.quantity += order.price
          }
        })
      })
      arr.sort((a, b) => { return b.quantity - a.quantity});
    
      arr.map((id)=>{
        users.map((user)=>{
          if(user._id === id.id){
            finalArr.push(user)
          }
        })
      })
      console.log(arr)
      }else{
        allusers.map((user)=>{
          arr.push({id:user._id,quantity:0})
        })
      arr.map(id=>{
        orders.map((order)=>{
          if(order.userId === id.id){
            id.quantity += order.price
          }
        })
      })
      arr.sort((a, b) => { return b.quantity - a.quantity});
  
      arr.map((id)=>{
        allusers.map((user)=>{
          if(user._id === id.id){
            finalArr.push(user)
          }
        })
      })
    
      }
  
     setUsers(finalArr)
    }
  
  }
  return (
    <div className='px-9 h-full w-full'>
          <div className='px-12 w-3/5 flex items-center justify-between h-40'>
                  <p className='text-4xl   font-bold'>Users</p>
                    </div> 


                    
                <div className='w-full  border-2 usersHeihgt'>
                    <div className=' px-6 w-full border-b-2 h-24 flex items-center justify-between'>
                    <input onChange={(e)=>{
                      let arr = []
                      allusers.map((user)=>{
                        if(user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||user.email.toLowerCase().includes(e.target.value.toLowerCase()) )
                      {
                        arr.push(user)
                      }
                      })
                      setUsers(arr)
                    }} className=' px-2 hover:bg-blue-100  border-2 text-xl h-10 w-56 sm:w-96 text-left' placeholder='Search..' type="text"></input>
                   
                    <div className=' h-full w-96 flex items-center justify-around'>
                    <select className='h-10 hidden md:inline-block text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2' name="category" placeholder='Category' id="category">
    <option value="all">All</option>
    <option value="shoes">Users</option>
    <option value="shirts">Admins</option>
     </select>
  <select onChange={(e)=>{
   shuffleUsers(e.target.value)
  }}  className='hidden lg:inline-block h-10 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2'name="sort " placeholder='Sort by' id="sort">
    <option value="Latest">Latest Joined</option>
    <option value="Soonest">Soonsest Join</option>
    <option value="MostOrdered">Most Orders</option>
    <option value="MostPaid">Most Paid</option>
  </select>
                    </div>
                    </div>  

                <div className='w-full p-4 flex h-5/6  items-center py-5  justify-around flex-wrap'>
        
                     
                {users && users.map((user)=>{
                  return <DashboardUserUser user={user}/>
                })}
                

         
                        </div>
                 
       
                       
                      

                        
                        
                </div>


                </div>

    
  )
}

export default DashboardUsers