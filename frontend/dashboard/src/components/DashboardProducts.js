import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import DashboardProductsProduct from './DashboardProductsProduct'


function DashboardProducts() {
  const {items} = useContext(DashboardContext)
  const {setItems} = useContext(DashboardContext)
  const navigate = useNavigate()
const [allItems,setAllItems] = useState()
useEffect(()=>{
  axios.get("http://localhost:5000/GetAllItemsFiltered").then((res)=>{
    setItems(res.data)
    setAllItems(res.data)
  })
},[])

function shuffleItems(value){
  let arr = []
  if(value === "shoes"){
    allItems.map((item)=>{
  if (item.category ===  "Shoes"){
    arr.push(item)
  }
})
  }else if(value === "shirts"){
    allItems.map((item)=>{
      if (item.category ===  "Shirts"){
        arr.push(item)
      }
    })
  }
  else if(value === "jerseys"){
    allItems.map((item)=>{
      if (item.category ===  "Jerseys"){
        arr.push(item)
      }
    })
  }
  else if(value === "laptops"){
    allItems.map((item)=>{
      if (item.category ===  "Laptops"){
        arr.push(item)
      }
    })
  }else{
    allItems.map((item)=>{
 
        arr.push(item)
      })
  }
  setItems(arr)
}
function sortItems (value){

  if(value === "latest"){
    let arr  =[]
    let finalArr = []
    if(items.length >0){
      items.map((item)=>{
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
      allItems.map((item)=>{
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


setItems(finalArr)

  }else if(value === "oldest"){
    let arr  =[]
    let finalArr = []
    if(items.length >0){
      items.map((item)=>{
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

      allItems.map((item)=>{
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

    
    setItems(finalArr)
  }
else if(value === "lowest"){
  let arr = []
  if(items.length >0){  items.map((item)=>arr.push(item))
    arr.sort((a, b) => {
      return a.price - b.price;
  });
  }else{  allItems.map((item)=>arr.push(item))
    arr.sort((a, b) => {
      return a.price - b.price;
  });
  }

setItems(arr)
}
else if(value === "highest"){
  let arr = []
  if(items.length >0){}else{}
  items.map((item)=>arr.push(item))
  arr.sort((a, b) =>{ return b.price - a.price});

setItems(arr)
}else{

  let ids = []
  if(items.length >0){}else{}
 items.map((item)=>{
  ids.push({id:item._id,quantity:0})
 })
axios.get("http://localhost:5000/GetALLOrders").then((res)=>{
  res.data.map(order=>{
    ids.map((id)=>{
      order.items.map((item)=>{
       if(id.id === item.itemId){
        id.quantity += item.quantity
       }
      })
    })
  })
}).then(()=>{
  let finalArr =[]
  if(items.length >0){  ids.sort((a, b) => {return b.quantity - a.quantity});
  ids.map((id)=>{
    items.map((item)=>{
      if(item._id === id.id){
        finalArr.push(item)
      }
    })
  })}else{
    ids.sort((a, b) => {return b.quantity - a.quantity});
    ids.map((id)=>{
      allItems.map((item)=>{
        if(item._id === id.id){
          finalArr.push(item)
        }
      })
    })
  }

  setItems(finalArr)
})

}


}

  return (
    <div className='px-2 h-screen w-full'>
            <div className=' w-full flex items-center justify-between h-40'>
                <p className='text-4xl   font-bold'> Products</p>
                <button onClick={()=>{navigate('/DashboardAddProduct')}} className='h-12  w-28 sm:w-40 bg-[#045DE9] text-lg text-white font-bold rounded cursor-pointer duration-100 hover:bg-[#045ce9d1]'> Create New</button>
                </div> 




                <div className='w-full  border-2 productsHeight'>
                    <div className=' px-6 w-full border-b-2 h-24 flex items-center justify-between'>
                    <input onChange={(e)=>{
                        let arr = []
                        allItems.map((item)=>{
                          if(item.name.toLowerCase().includes(e.target.value.toLowerCase())){
                            arr.push(item)
                          }
                        })
                        setItems(arr)
                    }}  className=' px-2 hover:bg-blue-100  border-2 text-xl h-10 w-64 xl:w-96 text-left' placeholder='Search..' type="text"></input>
                   
                    <div className=' h-full w-96 flex items-center justify-around'>
                    <select onChange={(e)=>{
                      shuffleItems(e.target.value)
                    }} className='hidden md:inline-block  h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2' name="category" placeholder='Category' id="category">
    <option value="all">All</option>
    <option value="shoes">Shoes</option>
    <option value="shirts">Shirts</option>
    <option value="jerseys">Jerseys</option>
    <option value="laptops">Laptops</option>
                    </select>
                    <select onChange={(e)=>{
                      sortItems (e.target.value)
                    }}  className='hidden lg:inline-block h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2'name="sort " placeholder='Sort by' id="sort">
                      <option value="latest">Latest Added</option>
                      <option value="lowest">Lowest Price</option>
                      <option value="highest">Highest Price</option>
                      <option value="most">Most Ordered</option>
                      <option value="oldest">Oldest</option>
                    </select>
                    </div>
                    </div>  

                <div className='w-full p-4 flex h-5/6 offset items-start flex-wrap'>
                  {items  && items.map((item)=>{
                    return     <DashboardProductsProduct item={item}/>
                  })}
           
                

                </div>


                </div>
    </div>
  )
}

export default DashboardProducts