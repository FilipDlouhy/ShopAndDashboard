import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DashboardSideBar() {

  const [Dashboard,setDashboard]=useState(true)
 const  [Products,setProducts]=useState(false)
 const  [AddProduct,setAddProduct]=useState(false)
 const  [Orders,setOrders]=useState(false)
 const  [Users,setUsers]=useState(false)
 const  [Sellers,setSellers]=useState(false)
 const  [Transactions,setTransactions]=useState(false)
 const  [BuyProducts,setBuyProducts]=useState(false)
 const  [AddSeller,setAddSeller]=useState(false)

 const navigate = useNavigate()
  return (

<div className='w-1/5 fixed sideBarHeight border-r-2 shadow-xl '>
 
    <div className=' flex justify-around 	 items-center bg-[#009FFD] h-24 w-full'>

      <p className='text-xs lg:text-sm  xl:text-lg text-white font-extrabold 2xl:text-2xl'>Admin Dashboard</p>
    <p  > <i class="hidden mr-5 md:inline-block lg:text-base  xl:text-xl  text-white font-extrabold 2xl:text-3xl fa-sharp fa-solid fa-briefcase"></i></p>
    </div>


      <button onClick={()=>{navigate('/')
      setDashboard(true)
      setProducts(false)
      setAddProduct(false)
      setOrders(false)
      setUsers(false)
      setSellers(false)
      setTransactions(false)
      setBuyProducts(false)
      setAddSeller(false)
    }} className={Dashboard ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '} >
        <p className={Dashboard ? 'text-green-700 ':"text-gray-500"}> <i class={Dashboard? "hidden  sm:inline-block  text-green-600  lg:text-xl xl:text-xl  mr-8  fa-solid fa-house":"hidden sm:inline-block lg:text-xl xl:text-xl  mr-8  fa-solid fa-house"}></i></p>
          <p className={Dashboard ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl font-bold' :'tracking-wider text-xs  lg:text-2xl   hover:text-white  font-bold'}>Dashboard</p>

        </button> 
        
        <button 
        onClick={()=>{navigate('/DashboardProducts')
          setDashboard(false)
          setProducts(true)
          setAddProduct(false)
          setOrders(false)
          setUsers(false)



          setSellers(false)
          setTransactions(false)
          setBuyProducts(false)
          setAddSeller(false)
          }} className={Products ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={Products ?  'text-green-700 ':"text-gray-500"}> <i class={Products? "hidden sm:inline-block  lg:text-xl xl:text-xl text-green-600   mr-8   fa-solid fa-briefcase":"hidden sm:inline-block  lg:text-xl xl:text-xl  mr-8   fa-solid fa-briefcase"}></i></p>
          <p className={Products ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl font-bold' :'tracking-wider text-xs lg:text-2xl hover:text-white  font-bold'}>Products</p>

        </button> 
        
        <button onClick={()=>{navigate('/DashboardAddProduct')
         setDashboard(false)
         setProducts(false)
         setAddProduct(true)
         setOrders(false)
         setUsers(false)
         setSellers(false)
         setTransactions(false)
         setBuyProducts(false)
         setAddSeller(false)}} className={AddProduct ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={AddProduct ? 'text-green-700 ':"text-gray-500"}> <i class={AddProduct? "hidden sm:inline-block lg:text-xl xl:text-xl  text-green-600 mr-8   fa-solid fa-cart-plus":"hidden sm:inline-block lg:text-xl xl:text-xl  mr-8   fa-solid fa-cart-plus"}></i></p>
          <p className={AddProduct ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl font-bold' :'tracking-wider text-xs lg:text-2xl  hover:text-white  font-bold'}>Add Product</p>

        </button> 
        
        <button onClick={()=>{navigate('/DashboardOrders')
        setDashboard(false)
        setProducts(false)
        setAddProduct(false)
        setOrders(true)
        setUsers(false)
        setSellers(false)
        setTransactions(false)
        setBuyProducts(false)
        setAddSeller(false)}} className={Orders ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={Orders ? 'text-green-700 ':"text-gray-500"}> <i class={Orders? " text-green-600 hidden sm:inline-block lg:text-xl xl:text-xl   mr-8   fa-solid fa-cart-flatbed-suitcase":"hidden sm:inline-block lg:text-xl xl:text-xl mr-8  fa-solid fa-cart-flatbed-suitcase"}></i></p>
          <p className={Orders ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl font-bold' :'tracking-wider  text-xs lg:text-2xl    hover:text-white  font-bold'}>Orders</p>

        </button> 
        
        <button onClick={()=>{navigate('/DashboardUsers')
           setDashboard(false)
           setProducts(false)
           setAddProduct(false)
           setOrders(false)
           setUsers(true)
           setSellers(false)
           setTransactions(false)
           setBuyProducts(false)
           setAddSeller(false)
      }} className={Users ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={Users ? 'text-green-700 ':"text-gray-500"}> <i class={Users? " hidden sm:inline-block lg:text-xl xl:text-xl text-green-600 text-sm   mr-8   fa-sharp fa-solid fa-users":"hidden sm:inline-block lg:text-xl xl:text-xl  mr-8  fa-sharp fa-solid fa-users"}></i></p>
          <p className={Users ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl  font-bold' :'tracking-wider text-xs lg:text-2xl    hover:text-white  font-bold'}>Users</p>

        </button> 
        
        <button  onClick={()=>{navigate('/DashBoardSellers')
        setDashboard(false)
        setProducts(false)
        setAddProduct(false)
        setOrders(false)
        setUsers(false)
        setSellers(true)
        setTransactions(false)
        setBuyProducts(false)
        setAddSeller(false)
      }} className={Sellers ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={Sellers ? 'text-green-700 ':"text-gray-500"}> <i class={Sellers? "hidden sm:inline-block lg:text-xl xl:text-xl text-green-600   mr-8  fa-solid fa-hand-holding-dollar":"hidden sm:inline-block lg:text-xl xl:text-xl  mr-8  fa-solid fa-hand-holding-dollar"}></i></p>
          <p className={Sellers ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl  font-bold' :'tracking-wider text-xs lg:text-2xl  hover:text-white  font-bold'}>Sellers</p>

        </button> 
        
        <button  onClick={()=>{navigate('/DashBoardTransactions')
              setDashboard(false)
              setProducts(false)
              setAddProduct(false)
              setOrders(false)
              setUsers(false)
              setSellers(false)
              setTransactions(true)
              setBuyProducts(false)
              setAddSeller(false)
      }} className={Transactions ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={Transactions ? 'text-green-700 ':"text-gray-500"}> <i class={Transactions? " text-green-600 hidden sm:inline-block lg:text-xl xl:text-xl  mr-8  fa-solid fa-money-bill":"hidden sm:inline-block lg:text-xl xl:text-xl mr-8 fa-solid fa-money-bill"}></i></p> 
          <p className={Transactions ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl  font-bold' :'tracking-wider text-xs lg:text-2xl    hover:text-white  font-bold'}>Transactions</p>

        </button> 
        <button onClick={()=>{navigate('/DashboardBuyProducts')
                   setDashboard(false)
              setProducts(false)
              setAddProduct(false)
              setOrders(false)
              setUsers(false)
              setSellers(false)
              setTransactions(false)
              setBuyProducts(true)
              setAddSeller(false)}}  className={BuyProducts ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={BuyProducts ? 'text-green-700 ':"text-gray-500"}> <i class={BuyProducts? " text-green-600 hidden sm:inline-block lg:text-xl xl:text-xl mr-8  fa-solid fa-cart-shopping":"hidden sm:inline-block lg:text-xl xl:text-xl  mr-8 fa-solid fa-cart-shopping"}></i></p>
          <p className={BuyProducts ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl  font-bold' :'tracking-wider text-xs lg:text-2xl   hover:text-white  font-bold'}>Buy Products</p>
   </button> 
        <button  onClick={()=>{navigate('/DashboardAddSeller')
                   setDashboard(false)
              setProducts(false)
              setAddProduct(false)
              setOrders(false)
              setUsers(false)
              setSellers(false)
              setTransactions(false)
              setBuyProducts(false)
              setAddSeller(true)}} className={AddSeller ? ' h-16 w-full pl-3.5  bg-[#1aff6694] hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center ':' h-16 w-full pl-3.5  hover:shadow-xl  duration-300 cursor-pointer  hover:bg-[#1aff6694] flex items-center '}>
        <p className={AddSeller ? 'text-green-700 ':"text-gray-500"}> <i class={Transactions? "  text-green-600 hidden sm:inline-block lg:text-xl xl:text-xl  mr-8  fa-solid fa-user-tie":"hidden sm:inline-block lg:text-xl xl:text-xl  mr-8 fa-solid fa-user-tie"}></i></p>
          <p className={AddSeller ?' text-white  hover:text-white tracking-wider text-xs lg:text-2xl font-bold' :'tracking-wider text-xs lg:text-2xl   hover:text-white  font-bold'}>Add Seller</p>

        </button> 
        

   
</div>
   
  )
}

export default DashboardSideBar