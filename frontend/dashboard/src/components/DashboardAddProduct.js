import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import axios from 'axios'
function DashboardAddProduct() {
  const navigate = useNavigate()
  const [name,setName] = useState()
  const [price,setPrice] = useState()
  const [descpirtion,setDescription] = useState()
  const [seller,setSeller] =useState()
  const [category,setCategory] =useState()
  const [file,setFile] = useState()
  const [sellets,setSellers] = useState()
  const [error,setError] =useState(false)
  const {setItems} = useContext(DashboardContext)
  useEffect(()=>{
    axios.get("http://localhost:5000/GetSellersTrue").then((res)=>{
      setSellers(res.data)
    }) 

  },[])
  return (
    <div className='px-9 addProductHeight w-full'>
  <div className=' w-full flex items-center justify-between h-40'>
  <button 
  onClick={()=>{
    navigate("/DashboardProducts")
}}  className='h-12  w-24 sm:w-36 text-md xl:w-52  text-sm  bg-[#e90404] xl:text-xl text-white font-bold rounded cursor-pointer duration-100 hover:bg-[#6f1414]'>   Back to Products</button>
                <p className={error ?  'text-xs sm:text-lg lg:text-4xl text-red-700 font-extrabold': 'text-xs sm:text-lg lg:text-4xl   font-bold'}>{error ? "Fill the Whole Form" :"Add Product"}</p>
                <button onClick={()=>{
                  if(name !== undefined && price !== undefined && descpirtion !== undefined && seller !== undefined && category !== undefined){

                    let newItem={
                      name:name,
                      descpirtion:descpirtion,
                      inStock:true,
                      price:price,
                      imageId:"57cb2373-78e4-4f69-91d0-a187f7205e55.png",
                      category:category,
                      seller:seller,
                      deleted:true,
                      numberInStock:10,
                    }
                      axios.post(`http://localhost:5000/CreateItem`,newItem)
                      navigate('/DashboardProducts')
                  }else{
                    setError(true)
                  }
                     
                }} className='h-12 w-24   sm:w-36 text-sm  text-md xl:w-52 xl:text-xl bg-[green]  text-white font-bold rounded cursor-pointer duration-100 hover:bg-[#00c400]'> Create New</button>
                </div> 



                  <form className='addProductForm'>
                                <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="name">Poduct Name:</label>
                                <input onChange={(e)=>{
                                  setName(e.target.value)
                                }} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='name' id='name' type="text"></input>

                                </div>
                                <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="price">Poduct Price:</label>
                                <input onChange={(e)=>{
                                 setPrice(e.target.value)
                                }} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='price' id='price' type="number"></input>

                                </div>

                                <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="seller"> Seller:</label>
                                <select onChange={(e)=>{
                                  setSeller(e.target.value)
                                }} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='seller' id='seller' type="text">
                                  {sellets && sellets.map((seller)=>{
                                    return <option value={`${seller.name} `}>{seller.name}</option>
                                  })}
                                </select>

                                </div>
                                <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="price">Poduct Category:</label>
                                <select  onChange={(e)=>{
                                    setCategory(e.target.value)
                                }} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='price' id='price' type="number">
                                  <option selected="selected" value="Shoes">Shoes</option>
                                   <option value="Shirts">Shirts</option>
                                   <option value="Jerseys">Jerseys</option>
                                   <option value="Laptops">Laptops</option>
                                </select >

                                </div>

                                
                                <div className='w-full h-80 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="stock">Poduct Description:</label>
                                    <textarea onChange={(e)=>{
                                    setDescription  (e.target.value)
                                    }} className='text-xl font-medium w-full border-2 h-72 resize-none p-4'>
                                    </textarea>
                                </div>
                                <div className='w-full h-36 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="stock">Add Image:</label>   
                                <input onChange={(e)=>{
                               
                                }} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='stock' id='stock' type="file"></input>
                                </div>
                    </form>                                          

    </div>
  )
}

export default DashboardAddProduct