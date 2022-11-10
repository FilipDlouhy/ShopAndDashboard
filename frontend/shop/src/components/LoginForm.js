import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Axios from "axios"
function SingUp() {
const [email,setEmail] = useState()
const [password,setPassword]   = useState()
const [error,setError] = useState()
const {setUserId} = useContext(UserContext)
const {setLoggedIn} = useContext(UserContext)
const {setUserName} = useContext(UserContext)
const {shoppingList} = useContext(UserContext)
const{setShowOrder} =  useContext(UserContext)
const {continueToCheckout} = useContext(UserContext)
const {setContinueToCheckout} = useContext(UserContext)
const {RendersetShoppingList} = useContext(UserContext)
const navigate = useNavigate()
useEffect(()=>{
    RendersetShoppingList(shoppingList)
},[])
  return (

    <form className='loginForm'>
<div className='singUpFormHeader'>
    <h1>Login</h1>
    <h2 className='BAD'>{error}</h2>
    </div>
   <div  className='formLabelInput'>
    <label for="email">EMAIL:</label>
    <input onChange={(e)=>{

setEmail(e.target.value)

    }} type="email" name="email" id="email"></input>
   </div>
   <div className='formLabelInput'> 
    <label for="password">PASSWORD:</label>
    <input onChange={(e)=>{

setPassword(e.target.value)

    }} type="password" name="password" id="password"></input>
   </div>
        <button onClick={(e)=>{
            e.preventDefault()
let user ={
    email:email,password:password
}
console.log(user)
            Axios.post("http://localhost:5000/Login",user)
.then((response)=>{

if(response.data === "Not Found"){

    setError("Wrong Email")


}
else if(response.data === "wrong password"){

    setError("Wrong Password")
}else{
    console.log(response.data)
    setUserId(response.data.id)
    setLoggedIn(true)
    setUserName(response.data.name)
    if(continueToCheckout){
        navigate("/DeliveryForm")
        setShowOrder(true)
        setContinueToCheckout(false)
    }else{
        navigate("/")

    }
}
})
        }} className='singUpFormBTN'>Login</button>
    </form>
  )
}

export default SingUp