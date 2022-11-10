import React from 'react'
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
function NavBar() {
       const {loggedIn}=useContext(UserContext)
       const {setLoggedIn}=useContext(UserContext)
       const {setUserId}=useContext(UserContext)
       const navigate = useNavigate()
  return (
    <div className='navbar'>
    

<div className='leftNavbarSide'>
<h1>773 683 500</h1>
<h1>fi.dlo@email.cz</h1>
</div>
<div className='rightNavbarSide'>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-sharp fa-solid fa-crown"></i>
{loggedIn&&<i onClick={()=>{
setLoggedIn(false)
setUserId(null)
navigate("/LoginForm")
}} class="fa-solid fa-right-from-bracket"></i>}
</div>
    </div>
  )
}

export default NavBar