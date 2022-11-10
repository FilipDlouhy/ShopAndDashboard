import React,{useEffect} from 'react'
import '../index.css';
import { useState } from 'react'
import { DashboardContext } from '../context/DashboardContext'
import DashboardSideBar from './DashboardSideBar'
import DashboardSearchBar from './DashboardSearchBar'
import DashboardProducts from './DashboardProducts'
import DashboardDashboard from './DashboardDashboard'
import DashboardAddProduct from './DashboardAddProduct'
import DashboardOrders from './DashboardOrders'
import DashboardOrdersReviewOrder from './DashboardOrdersReviewOrder'
import DashboardUsers from './DashboardUsers'
import DashboardMenuOptions from './DashboardMenuOptions'
import { BrowserRouter as Router,Routes,Route,Link, } from 'react-router-dom'
import DashBoardSellersSeller from './DashBoardSellersSeller'
import DashBoardSellers from './DashBoardSellers'
import DashBoardTransactions from './DashBoardTransactions'
import DashboardBuyProducts from './DashboardBuyProducts'
import DashboardAddSeller from './DashboardAddSeller'
import DashboardProductStats from './DashboardProductStats'
import DashBoardProfilePage from './DashBoardProfilePage'
import DashBoardUpdateProduct from './DashBoardUpdateProduct';
import axios from 'axios'
function Container() {
  const [showOptions,setShowOptions] = useState(false);
  const [reviewdOrder,setReviewdOrder] = useState()
  const [updatedProduct,setUpdatedProduct] = useState()
  const [reviewdUser,setRewievdUser] = useState()
  const [reviewdSeller,setRewievdSeller] = useState()
  const [items,setItems]= useState()
  const [addedSellers, setAddedSellers] = useState()   
  const [notAddedSellers, setnotAddedSellers] = useState()
  const [showModal,setShowModal] = useState(false)
  const [addedProduct,setAddedProduct]= useState()
  const [priceToPay,setPriceToPay] = useState()
  const [priceToPayModal,setPriceToPayModal] = useState()
  const [sellerName,setSellerName] = useState()
  const [addedItemId,setAddedItemId] = useState()
const [addedQuantity,setAddedQuantity]= useState()
const [itemsStock,setItemsStock]= useState()
const [searchArray,setSearchArray] = useState()
const [finalSearchArr,setFinalSearchArr] = useState()
const [showSearch,setShowSearch] = useState()
const [reviewedItem,setRewievdItem] = useState()
useEffect(()=>{
  axios.get(`http://localhost:5000/GetAll`).then((res)=>{
    setSearchArray(res.data)
  })
},[])
  return (

   < DashboardContext.Provider value={{ reviewedItem,setRewievdItem,showSearch,setShowSearch,finalSearchArr,setFinalSearchArr,searchArray,setSearchArray,itemsStock,setItemsStock,setAddedItemId,setSellerName,setPriceToPayModal,priceToPay,setPriceToPay,addedProduct,setAddedProduct, showModal,setShowModal,addedSellers, setAddedSellers,notAddedSellers, setnotAddedSellers,reviewdSeller,setRewievdSeller,reviewdUser,setRewievdUser,items,setItems,updatedProduct,setUpdatedProduct, showOptions,reviewdOrder,setReviewdOrder}}>
  <Router>

    <div onClick={(e)=>{
if(e.target.id === "dashboardMenuIcon"){
setShowOptions(true)

}else{
  setShowOptions(false)
}

if(e.target.id === "showSearch"){
  setShowSearch(true)
}else{
  setShowSearch(false)
}
    }} className=' flex'>

<DashboardSideBar/>
    <div className='w-12/12 containerPadding xl:w-full h-full'>
    <DashboardSearchBar/>
          <div className=' offset w-full h-5/6'>
          
              <Routes>

                <Route path={'/'} element={<DashboardDashboard/>} />
                <Route path={'/DashboardProducts'} element={<DashboardProducts/>} />
                <Route path={'/DashboardAddProduct'} element={<DashboardAddProduct/>} />
                <Route path={'/DashboardOrders'} element={<DashboardOrders/>} />
                <Route path={'/DashboardOrdersReviewOrder'} element={<DashboardOrdersReviewOrder/>} />
                <Route path={'/DashboardUsers'} element={<DashboardUsers/>} />
                <Route path={'/DashBoardSellers'} element={<DashBoardSellers/>} />
                <Route path={'/DashBoardSellersSeller'} element={<DashBoardSellersSeller/>} />
                <Route path={'/DashBoardTransactions'} element={<DashBoardTransactions/>} />
                <Route path={'/DashboardAddSeller'} element={<DashboardAddSeller/>} />
                <Route path={'/DashboardBuyProducts'} element={<DashboardBuyProducts/>} /> 
                <Route path={'/DashboardProductStats'} element={<DashboardProductStats/>} />
                <Route path={'/DashBoardProfilePage'} element={<DashBoardProfilePage/>} />
                <Route path={'/DashBoardUpdateProduct'} element={<DashBoardUpdateProduct/>} />
              </Routes>
            
          </div>


    </div>
      <DashboardMenuOptions/>
    </div>
    <div className={ showModal ?'modalBg':"none"}>
          <div className='modal'>
     
            <div className='w-full h-20 flex justify-around items-center p-4'>
            <h1>Add To The Stock</h1>
            <i onClick={()=>{setShowModal(false)
                let input = document.querySelector(".modalIntput")
                input.value = 1
                }} class="mr-2  hover:text-red-700 cursor-pointer duration-200 text-4xl fa-solid fa-xmark"></i>
            </div>
            <div className='w-full h-20 flex justify-around text-center text-2xl font-semibold items-center p-4'>
            <h4>{addedProduct && addedProduct.numberInStock} in stock right now</h4>
            </div>
              <div className='h-96 flex flex-col justify-around items-center'>
                
                 <div className='flex flex-col h-40 items-center justify-center'>
                 <label className='text-2xl font-semibold ' for="number">How much do you want to buy ?</label>
                 <input onChange={(e)=>{
              setPriceToPayModal( priceToPay * e.target.value)
              setAddedQuantity(parseInt(addedProduct.numberInStock ) + parseInt( e.target.value))
                }} className='modalIntput mt-8 w-80 h-12 shadow-xl rounded-xl text-center text-2xl' min={1} type="number" name="number" id="number"></input>

                </div>
                <div className='w-full h-12 flex justify-around text-center text-2xl font-semibold items-center p-4'>
                  <h4>Price to pay:{priceToPayModal && priceToPayModal}$</h4>
                  </div>
                  <button onClick={()=>{
                                   var date = new Date();
                                   var dd = String(date.getDate()).padStart(2, '0');
                                   var mm = String(date.getMonth() + 1).padStart(2, '0');
                                   var yyyy = date.getFullYear()
                                   let today = mm + '/' + dd + '/' + yyyy
                                   let year = parseInt(yyyy)
                      let newTransaction = {
                        type:"Seller"
                        ,money:priceToPayModal
                        ,sellerName:sellerName,
                        createdAt:today
                    }
                
                  axios.post(`http://localhost:5000/CreateTransaction`,newTransaction)
                   axios.post(`http://localhost:5000/UpdateStock/${addedItemId}`,{added:addedQuantity}).then((res)=>{
                setItemsStock(res.data)
                setShowModal(false)
                  setPriceToPayModal(0)
                  setAddedQuantity(0)
                  let input = document.querySelector(".modalIntput")
                  input.value = 1
                   })
                  }} className='w-96 hover:bg-green-500 duration-300 cursor-pointer font-semibold text-white rounded-xl h-16 text-2xl shadow-xl bg-green-300  '> Add { addedProduct&& addedProduct.name} to the stock</button>
              </div>
          </div>
    </div>
    </Router>
    </DashboardContext.Provider>
  )
}

export default Container