
import React, { useEffect, useState,useContext } from 'react'
import Axios from "axios"
import { UserContext } from '../Context/UserContext'
function FilterProducts() {

  const { setItems} = useContext(UserContext)
  

  return (
    <div className='filterProducts'>
  <button onClick={()=>{
          Axios.get("http://localhost:5000/GetAllItems").then((res)=>{
            setItems(res.data)
          })
         }} >All</button>
        <button onClick={()=>{
let arr =[]

Axios.get("http://localhost:5000/GetAllItems").then((res)=>{
  res.data.map((item)=>{
    if(item.category === "Shoes"){
      arr.push(item)
    }
  })
  setItems(arr)
})
        }}>Shoes</button>
        <button onClick={()=>{
let arr =[]


Axios.get("http://localhost:5000/GetAllItems").then((res)=>{
  res.data.map((item)=>{
    if(item.category === "Shirts"){
      arr.push(item)
    }
  })
  setItems(arr)
})
        }}>Shirts</button>
        <button onClick={()=>{
let arr =[]


Axios.get("http://localhost:5000/GetAllItems").then((res)=>{
  res.data.map((item)=>{
    if(item.category === "Jerseys"){
      arr.push(item)
    }
  })
  setItems(arr)
})
        }}>Jerseys</button>
        <button onClick={()=>{
let arr =[]


Axios.get("http://localhost:5000/GetAllItems").then((res)=>{
  res.data.map((item)=>{
    if(item.category === "Laptops"){
      arr.push(item)
    }
  })
  setItems(arr)
})
        }}>Laptops</button> 
    </div>
  )
}

export default FilterProducts

