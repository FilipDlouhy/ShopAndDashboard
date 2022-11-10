import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'
import UpdateProfile from './UpdateProfile'
import OrderList from './OrderList'

function ProfilePage() {


  const navigate = useNavigate()
  const [user,setUser]=useState()
    const {userId} = useContext(UserContext)
    const {setUserId} = useContext(UserContext)
    const [date,setDate] = useState()
    const {setUserName} = useContext(UserContext)
    const {loggedIn} = useContext(UserContext)
    const {shoppingList} = useContext(UserContext)
    const {RendersetShoppingList} = useContext(UserContext)
    const [showUpdate,setShowUpdate]=useState	(true);
    const [error,setError] = useState()
    const [ordersLength,setOrdersLength] = useState()
  useEffect(()=>{
    RendersetShoppingList(shoppingList)
if(loggedIn === false){
  navigate("/")
}
  if(userId){
    axios.get( `http://localhost:5000/GetUser/${userId}`).then((res)=>{
  
      setUser(res.data)
      setDate(res.data.createdAt.slice(0,10))

    })
  }

  axios.get(`http://localhost:5000/GetAllOrders/${userId}`).then((res)=>{

    setOrdersLength(res.data.length)

    })



},[])
  return (
    <div className='profilePage'>

<div className='profilePageProfile'>
<div className='profilePageProfileEmpty'></div>
<div className='prfilePageProfileUserInfo'>
    <div>
        <div className='profilePageIcon'>
        <i class="fa-regular fa-user"></i>
        </div>
        </div>
    <div className='profilePageProfileUserInfo'>   
        <h2>{ user && user.name}</h2>
        <p>Created at : { date && date}</p>

    </div>
</div>
        <div onClick={(e)=>{
          let beforeDiv = document.querySelector(".profileChosenOprion")
          beforeDiv.classList.remove("profileChosenOprion")
          e.target.classList.add("profileChosenOprion")
          setShowUpdate(true)
        }} className=' profileChosenOprion profilePageProfileFooter'>
        <p>Profile settings</p>
        </div>
        <div onClick={(e)=>{
          let beforeDiv = document.querySelector(".profileChosenOprion")
          beforeDiv.classList.remove("profileChosenOprion")
          e.target.classList.add("profileChosenOprion")
          setShowUpdate(false)

        }} className=' profilePageProfileFooter'>
        <p>Order list </p><div>{ordersLength&& ordersLength}</div>
        </div>
</div>
{showUpdate ?<UpdateProfile user={user} setUser={setUser} setUserId={setUserId} setError={setError} setUserName ={setUserName}/> : <OrderList/> }


    </div>
  )
}

export default ProfilePage