import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'
function UpdateProfile(props) {
    
  const navigate = useNavigate()
  
    const {userId} = useContext(UserContext)
   
    const [date,setDate] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword]   = useState()
    const [checkCassword,setCheckPassword]   = useState()
    const [name,setName]   = useState()
    const [error,setError] = useState()

   
  return (
    <form className='profilePageProfileSettings'>
    <h1>{error}</h1>
      <div className='profilePageProfileSettingsDiv'>
            <div> 
               <label for="text"> NEW USERNAME:</label>
                <input onChange={(e)=>{
                 setName( e.target.value)
                }} type="text" name="text" id="text"></input>
             </div>
   
             <div> 
               <label for="email"> NEW EMAIL:</label>
                <input  onChange={(e)=>{
                 setEmail( e.target.value)
                }}type="email" name="email" id="email"></input>
             </div>
       </div>
  
  
  
       <div className='profilePageProfileSettingsDiv'>
            <div> 
               <label for="password"> NEW PASSWORD:</label>
                <input onChange={(e)=>{
                 setPassword( e.target.value)
                }} type="password" name="password" id="password"></input>
             </div>
   
             <div> 
               <label for="newPassword"> CONFIRM NEW PASSWORD:</label>
                <input  onChange={(e)=>{
                 setCheckPassword( e.target.value)
                }}type="password" name="newPassword" id="newPassword"></input>
             </div>
       </div>
  
       <button className="profilePageUpdateProfileButton"  onClick={(e)=>{
        e.preventDefault()
    
        if(!password   && !checkCassword ) {
            let newUser={
                email,name
              };
          if(email === undefined){
             
            newUser.email = props.user.email
          }else{
            newUser.email = email
          }

          
          if(name === undefined){
            newUser.name = props.user.name
          }else{
            newUser.name = name
          }
          axios.post(`http://localhost:5000/UpdateUser/${userId}`,newUser).then(res=>{
    
            props.setUser(res.data) 
            props.setUserId(res.data._id)
            props.setUserName(res.data.name)
          })
  
        }
      else{
        if(checkCassword === undefined){
         setError("Please verify your password")
        }
         else{
            if(password === checkCassword){
                let newUser={
                    email,password,name
                  };
              if(email === undefined){
               
                newUser.email = props.user.email
              }else{
                newUser.email = email
              }
            
                newUser.password = password
              
              if(name === undefined){
                newUser.name = props.user.name
              }else{
                newUser.name = name
              }
  
              axios.post( `http://localhost:5000/UpdateUser/${userId}`,newUser).then(res=>{
                props.setUser(res.data) 
                props.setUserId(res.data._id)
                props.setUserName(res.data.name)
              })
  
  
            }else{
              setError("Passowrds do not match")
            }
          }
            
            
        }
  
  
       }}>Update Profile</button>
  </form>
  )
}

export default UpdateProfile