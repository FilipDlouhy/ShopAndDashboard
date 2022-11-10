import React, { useEffect, useState,useContext } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
function SingUp() {
const [email,setEmail] = useState()
const [password,setPassword]   = useState()
const [checkCassword,setCheckPassword]   = useState()
const [name,setName]   = useState()
const [error,setError] = useState()
const navigate = useNavigate()
const {shoppingList} = useContext(UserContext)
const {RendersetShoppingList} = useContext(UserContext)
useEffect(()=>{  RendersetShoppingList(shoppingList)},[
  
])
  return (
    <form className='singUpForm'>
<div className='singUpFormHeader'>
    <h1>Sing Up</h1>
    <h2 className='BAD'>{error}</h2>
    </div>
   <div  className='formLabelInput'>
    <label for="email">EMAIL:</label>
    <input onChange={(e)=>{

setEmail(e.target.value)

    }} type="email" name="email" id="email"></input>
   </div>
   <div  className='formLabelInput'>
    <label for="name">NAME:</label>
    <input onChange={(e)=>{

setName(e.target.value)

    }} type="name" name="name" id="name"></input>
   </div>
   <div className='formLabelInput'> 
    <label for="password">PASSWORD:</label>
    <input onChange={(e)=>{

setPassword(e.target.value)

    }} type="password" name="password" id="password"></input>
   </div>
   <div className='formLabelInput'> 
    <label for="password">VERIFY PASSWORD:</label>
    <input onChange={(e)=>{

setCheckPassword(e.target.value)

    }} type="password" name="password" id="password"></input>
   </div>
        <button onClick={(e)=>{
            e.preventDefault()

            if(checkCassword === password){
                let user ={
                    email:email,password:password,name:name
                }
                            Axios.post("http://localhost:5000/CreateUser",user)
                .then((response)=>{
                    console.log(response)
                if(response.data === "done"){
                    console.log(response)
                    navigate("/LoginForm")
                }
                else{
                    setError("Aleready Registered")
                }
                })
            }else{
                setError("PASSWORD DO NOT MATCH")
            }

  }} className='singUpFormBTN'>Register</button>
    </form>
  )
}

export default SingUp