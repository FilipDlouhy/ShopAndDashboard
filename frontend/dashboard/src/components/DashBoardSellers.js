import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardSellersSellerSmall from './DashboardSellersSellerSmall'
import DashboardSellerTransaction from './DashboardSellerTransaction'
function DashBoardSellers() {
const navigate = useNavigate()
const [sellers,setSellers] =useState()
const [Allsellers,setAllSellers] =useState()
const [orders,setOrders] = useState()
useEffect(()=>{
  axios.get(`http://localhost:5000/GetSellersTrue`).then((res)=>{
    setSellers(res.data)
    setAllSellers(res.data)
  })
  axios.get(`http://localhost:5000/GetALLOrders`).then((res)=>{
    setOrders(res.data)

  })
},[])

function shuffleSellers(value){
  if(value === "latest"){
    let arr  =[]
    let finalArr = []
    if(sellers.length >0){
      sellers.map((item)=>{
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
      Allsellers.map((item)=>{
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


    setSellers(finalArr)

  }else if(value === "soones"){
    let arr  =[]
    let finalArr = []
    if(sellers.length >0){
      sellers.map((item)=>{
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

      Allsellers.map((item)=>{
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


    setSellers(finalArr)
  }
  else if(value === "lowest"){
    let   arr =[]
    let finalArr =[]

    if(sellers.length > 0){
      sellers.map((seller)=>{
        arr.push({name:seller.name, revenue:0})
       })
  
  
       arr.map((seller)=>{
        orders.map(order=>{
          order.items.map(item=>{
            if(item.seller ===seller.name){
              seller.revenue += item.price * item.quantity
            }
          })
         })
       })
  
       arr.sort((a, b) =>{ return b.revenue - a.revenue});
  
  
       arr.map((Seller)=>{
        sellers.map((seller)=>{
          
          if(seller.name === Seller.name){
            finalArr.push(seller)
          }
  
        })
   
       })
    
    }else{
      Allsellers.map((seller)=>{
        arr.push({name:seller.name, revenue:0})
       })
  
  
       arr.map((seller)=>{
        orders.map(order=>{
          order.items.map(item=>{
            if(item.seller ===seller.name){
              seller.revenue += item.price * item.quantity
            }
          })
         })
       })
  
       arr.sort((a, b) =>{ return b.revenue - a.revenue});
  
       arr.map((Seller)=>{
        Allsellers.map((seller)=>{
          
          if(seller.name === Seller.name){
            finalArr.push(seller)
          }
  
        })
   
       })
    
    }

     setSellers(finalArr)


  } 
  else if(value === "highest"){
    let   arr =[]
    let finalArr =[]
    if(sellers.length > 0){
      sellers.map((seller)=>{
        arr.push({name:seller.name, revenue:0})
       })
  
  
       arr.map((seller)=>{
        orders.map(order=>{
          order.items.map(item=>{
            if(item.seller ===seller.name){
              seller.revenue += item.price * item.quantity
            }
          })
         })
       })
  
       arr.sort((a, b) =>{ return a.revenue - b.revenue});
  

       arr.map((Seller)=>{
        sellers.map((seller)=>{
          
          if(seller.name === Seller.name){
            finalArr.push(seller)
          }
  
        })
   
       })
    
    }else{
      Allsellers.map((seller)=>{
        arr.push({name:seller.name, revenue:0})
       })
  
  
       arr.map((seller)=>{
        orders.map(order=>{
          order.items.map(item=>{
            if(item.seller ===seller.name){
              seller.revenue += item.price * item.quantity
            }
          })
         })
       })
  
       arr.sort((a, b) =>{ return a.revenue - b.revenue});
  
    
       arr.map((Seller)=>{
        Allsellers.map((seller)=>{
          
          if(seller.name === Seller.name){
            finalArr.push(seller)
          }
  
        })
   
       })
    
    }

     setSellers(finalArr)


  } 
}

    return (
    <div className='px-9 h-screen w-full'>

<div className=' w-full flex items-center  justify-between h-40'>
                <p className='text-4xl   font-bold'> Sellers</p>
                </div> 

                <div className='w-full  border-2 sellersHeight'>
                    <div className=' px-6 w-full border-b-2 h-24 flex items-center justify-between'>
                    <input onChange={(e)=>{
                      let arr =[]

                      Allsellers.map((seller)=>{
                        if(seller.name.toLowerCase().includes(e.target.value)){
                          arr.push(seller)
                        }
                      })
                      setSellers(arr)
                    }} className=' px-2 hover:bg-blue-100  border-2 text-xl h-10 w-56 lg:w-96 text-left' placeholder='Search..' type="text"></input>
                   
                    <div className=' h-full w-96 flex items-center justify-around'>
                    <select onChange={(e)=>{
                      shuffleSellers(e.target.value)
                    }} className=' hidden md:inline-block h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-48 border-2' name="category" placeholder='Category' id="category">
                    <option value="all">All</option>
                    <option value="latest">Latest Created</option>
                    <option value="soones">Soonest Created</option>
                    <option value="lowest">Lowest Revenue</option>
                    <option value="highest">Hihgest Revenue</option>
                  </select>
                  
                    </div>
                    </div>  

                <div className='w-full p-4 flex h-5/6 justify-around items-start flex-wrap'>
       
                {sellers && sellers.map((seller)=>{
                  return <DashboardSellersSellerSmall seller={seller}/>
                })}

                </div>


                </div>




    </div>
  )
}

export default DashBoardSellers