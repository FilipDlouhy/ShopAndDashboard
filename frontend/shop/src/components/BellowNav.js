import React from 'react'
import Logo from "../img/logo.png"
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import MiniProfile from './MiniProfile'
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import SearchBar from './SearchBar'
import RegisterButtons from './RegisterButtons'
function BellowNav() {
    const navigate = useNavigate() 
     const {loggedIn} = useContext(UserContext)
     const {listLength} = useContext(UserContext)
     const {items} = useContext(UserContext)
     const [searchedItems,setSearchedItems] = useState()
  return (
    <div className='bellowNav'>
<div className='bellowNavImgDiv'>
<img onClick={()=>{
    navigate("/")
}} className='bellowNavImg' src={Logo}></img>
</div>

  
  <div className='bellowNavSearch'>
    <input id="search" onChange={(e)=>{
   console.log(e.target.value.toString().length)
      let arr =[]
      if(e.target.value.toString().length === 0){
        arr =[]
      }else{
        items.map(item=>{
          if(item.name.includes(e.target.value)){
            arr.push(item)
          }
        
         
        })
      }

setSearchedItems(arr)
    }} type="text"></input>
    <button>Search</button>
    <SearchBar searchedItems={searchedItems} />
  </div>


<div className="bellowNavBTNS">

  {loggedIn ?<MiniProfile/>: <RegisterButtons/>}
<div  onClick={()=>{
  navigate("/ShoppingCartPage")
}}className='basketDiv'>
<i  class="fa-solid fa-basket-shopping"></i>
<p className='bellowNavBTNSSpan'>{listLength && listLength}</p>
</div>


</div>
    </div>
  )
}

export default BellowNav

/*




*/