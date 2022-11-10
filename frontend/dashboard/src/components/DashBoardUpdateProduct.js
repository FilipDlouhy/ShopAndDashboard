import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'
import axios from 'axios'
function DashBoardUpdateProduct() {
    const {updatedProduct} = useContext(DashboardContext)
    const {setUpdatedProduct} = useContext(DashboardContext)
    const navigate = useNavigate()
    const [name,setName] = useState() 
    const [price,setPrice]   =useState()
   const [ seller,setSeller]  =useState() 
    const [description,setDescription]   =useState()
  return (
    <div className='px-9 addProductHeight w-full'>
    <div className='px-12 w-full flex items-center justify-between h-40'>
    <button onClick={()=>{
        navigate("/DashboardProducts")
    }} className='h-12 w-52   bg-[#e90404] text-xl text-white font-bold rounded cursor-pointer duration-100 hover:bg-[#6f1414]'> Back to Products</button>
                  <p className='text-4xl text-center   font-bold'> Update Form for {updatedProduct.name}</p>
                  <button  onClick={()=>{
                          
                          let updatedItem = {
                            name,
                            price,
                            seller,
                            description
                        }
                            if(name === undefined){
                              updatedItem.name = updatedProduct.name
                            }
                            else{
                                updatedItem.name = name
                            }

                             if(price === undefined){
                                setPrice(updatedProduct.price)
                                updatedItem.price = updatedProduct.price
                            }else{
                                updatedItem.price = price
                            }
                             if(seller === undefined){
                                updatedItem.seller = updatedProduct.seller
                            }else{
                                updatedItem.seller = seller

                            }
                             if(description === undefined){
                                updatedItem.description = updatedProduct.descpirtion
                            }else{
                                updatedItem.description = description 
                            }
                     
                    
                      axios.post(`http://localhost:5000/UpdateProduct/${updatedProduct._id}`,updatedItem).then((res)=>{
                        setUpdatedProduct(res.data)
                      })
                      
                      navigate("/DashboardProducts")
                  }} 
                  className='h-12 w-52 bg-[green] text-xl text-white font-bold rounded cursor-pointer duration-100 hover:bg-[#00c400]'> Update</button>
                  </div> 
  
  
  
                    <form className='addProductForm'>
                                  <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                  <label className='text-xl font-bold' for="name">Poduct Name:</label>
                                  <input onChange={(e)=>{
                                        setName(e.target.value)
                                  }} placeholder={updatedProduct.name} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='name' id='name' type="text"></input>
  
                                  </div>
                                  <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                  <label className='text-xl font-bold' for="price">Poduct Price:</label>
                                  <input  onChange={(e)=>{
                                    setPrice(e.target.value)
                                  }} placeholder={updatedProduct.price} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='price' id='price' type="number"></input>
  
                                  </div>  
                                  <div className='w-full h-24 p-2 flex  justify-around flex-col'>
                                <label className='text-xl font-bold' for="seller"> Seller:</label>
                                <input onChange={(e)=>{
                                        setSeller(e.target.value)

                                }} placeholder={updatedProduct.seller} className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='seller' id='seller' type="text"></input>

                                </div>
                                  <div className='w-full h-80 p-2 flex  justify-around flex-col'>
                                  <label className='text-xl font-bold' for="stock">Poduct Description:</label>
                                      <textarea  onChange={(e)=>{
                                            setDescription(e.target.value)
                                      }}placeholder={updatedProduct.descpirtion}  className='text-xl font-medium w-full border-2 h-72 resize-none p-4'>
                                      </textarea>
                                  </div>
                                  <div className='w-full h-36 p-2 flex  justify-around flex-col'>
                                  <label className='text-xl font-bold' for="stock">Add Image:</label>
              
                                  <input className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='stock' id='stock' type="text"></input>    
                                  <input className='  hover:bg-gray-100  border-2 text-2xl font-bold h-10 w-full text-center' name='stock' id='stock' type="file"></input>
                                  </div>
                      </form>                                          
  
      </div>
  )
}

export default DashBoardUpdateProduct