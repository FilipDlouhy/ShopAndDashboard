import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../context/DashboardContext'

function DashboardAddProductIntoStockProduct(props) {
       const navigate = useNavigate()
        const {setShowModal} = useContext(DashboardContext)
        const {setPriceToPay} = useContext(DashboardContext)
        const {setAddedProduct} = useContext(DashboardContext)
        const {setSellerName} = useContext(DashboardContext)
        const {setAddedItemId} = useContext(DashboardContext)
        const {setPriceToPayModal} = useContext(DashboardContext)
       const {setRewievdItem} = useContext(DashboardContext)
  return (
    <div  className='h-96 m-4 w-72 rounded-lg p-3 flex hover:shadow-xl cursor-pointer duration-300 flex-col justify-around items-center border-2'>
    <img  onClick={()=>{
      setRewievdItem(props.item)
      navigate('/DashboardProductStats')}} src={props.item.imageId} className='w-full h-1/2'>
    
    </img> 
    <div className='h-1/3 w-full p-2 flex items-center justify-around flex-col'>
         <p>{props.item.name}</p>
         <div className='w-full flex justify-around flex-col items-center'>
             <p className='w-40 rounded-lg m-3  text-cyan-100 font-bold h-8 flex justify-center items-center bg-cyan-500'>In Stock {props.item.numberInStock}</p>
             <button onClick={()=>
              { setAddedItemId(props.item._id)
                setSellerName(props.item.seller)
                setPriceToPayModal(Math.round(props.item.price * 0.8))
                setPriceToPay(Math.round(props.item.price * 0.8)) 
                setAddedProduct(props.item)
                setShowModal(true)}}  className=' m-3 h-12 w-52 rounded-lg hover:w-64 hover:text-xl font-semibold hover:bg-indigo-600 duration-300 cursor-pointer flex justify-center text-lg text-white items-center bg-red-200 rounded-r-md'>Add into to the Stock</button>
         </div>
    </div>
</div>      

  )
}

export default DashboardAddProductIntoStockProduct