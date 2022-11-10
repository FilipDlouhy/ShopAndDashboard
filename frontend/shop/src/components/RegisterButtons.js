import React from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
function RegisterButtons() {
     const navigate = useNavigate() 
  return (
    <div className='bellowNavBTNSDiv'>
        <button  onClick={()=>navigate("/SingUpForm")

}>Register</button>
<button onClick={()=>{navigate("/LoginForm")
Axios.get("http://localhost:5000/SingUpForm").then((res)=>{
    console.log(res)
})}

}>Login</button>
    </div>
  )
}

export default RegisterButtons