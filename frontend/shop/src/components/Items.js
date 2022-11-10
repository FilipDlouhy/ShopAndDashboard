import React, { useEffect, useState,useContext } from 'react'
import Item from './Item'
import FilterProducts from './FilterProducts'
import Axios from "axios"
import { UserContext } from '../Context/UserContext'
function Items() {

  const { items} = useContext(UserContext)
  const { setItems} = useContext(UserContext)

  const { shoppingList} = useContext(UserContext)
  const { RendersetShoppingList} = useContext(UserContext)

useEffect(()=>{
  RendersetShoppingList(shoppingList)
Axios.get("http://localhost:5000/GetAllItemsFiltered").then((res)=>{
  setItems(res.data)
})

},[])

  return (
    <div className='mainPage'>
      <FilterProducts/>
  <div className='items'>
{items&& items.map(item=>{
 return <Item item={item}/>
})}

    
  
     </div>
    </div>
  
  )
}

export default Items