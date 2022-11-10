import React, { useState } from 'react'
import NavBar from './NavBar'
import SingUp from './SingUp'
import BellowNav from "./BellowNav"
import { BrowserRouter as Router,Routes,Route,Link, } from 'react-router-dom'
import LoginForm from "./LoginForm"
import { UserContext } from '../Context/UserContext.js'
import ProfilePage from './ProfilePage'
import ProducrPage from './ProducrPage'
import ShoppingCartPage from './ShoppingCartPage'
import Items from "./Items"
import CheckoutPage from './CheckoutPage'
import DeliveryForm from './DeliveryForm'
import PayForm from './PayForm'
function Container() {
  const[continueToCheckout,setContinueToCheckout] = useState(false)
  const[userId,setUserId] = useState()
  const [loggedIn,setLoggedIn] = useState(false)
  const [userName,setUserName] = useState()
  const [item,setItem] = useState()
  const [itemReviews,setItemReviews] = useState()
  const  [items,setItems]= useState()
  const [shoppingList,setShoppingList] = useState([])
  const [RendershoppingList,RendersetShoppingList] = useState([])
  const [listLength,setListLength] = useState(0)
  const[price,setPrice]= useState(0)
  const [order,setOrder] = useState()
  const[orderId,setOrderId] = useState()
  const [showOrder,setShowOrder]= useState(false)
  const [search,setSearch] = useState(false)

  return (
<UserContext.Provider value={{search,setSearch,showOrder,setShowOrder,orderId,setOrderId,order,setOrder,continueToCheckout,setContinueToCheckout,RendershoppingList,RendersetShoppingList,price,setPrice,listLength,setListLength,shoppingList,setShoppingList,item,setItem,setUserId,userId,loggedIn,setLoggedIn,userName,setUserName,itemReviews,setItemReviews,items,setItems}}>
    <Router>
    <div className='container' onClick={(e)=>{
    if(e.target.id ==="search"){
      setSearch(true)
    }else{
      setSearch(false )
    }
    }}>
<NavBar/>
<BellowNav/>

<Routes>
<Route path='/DeliveryForm' element={<DeliveryForm/>}/>
<Route path='/ProfilePage' element={<ProfilePage/>}/>
<Route path='/SingUpForm' element={<SingUp/>}/>
<Route path='/LoginForm' element={<LoginForm/>}/>
<Route path='/ProductPage' element={<ProducrPage/>} />
<Route path='/' element={<Items/>}/>
<Route path='/PayForm' element={<PayForm/>}/>
<Route path='/ShoppingCartPage' element={<ShoppingCartPage/>}/>
<Route path='/CheckoutPage' element={<CheckoutPage/>}/>
</Routes>




    </div>
    </Router>
    </UserContext.Provider>
  )
}

export default Container