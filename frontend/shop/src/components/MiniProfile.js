import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'

function MiniProfile() {
  const navigate = useNavigate()

  const {userName} = useContext(UserContext)



  return (
    <div className='hvr-pulse  miniProfileContainer'>

 
    <div onClick={()=>{
      navigate("/ProfilePage")
    }} className=' miniProfile'>
<p>Hi there, {userName&& userName}</p>

    </div>

    </div>
  )
}

export default MiniProfile