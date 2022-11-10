import React from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import OutputSearchItem from './OutputSearchItem'
function SearchBar(props) {
    const {search} = useContext(UserContext)
  return (
    <div className={ search ?  'searchBar':"hidden"}>

{props.searchedItems && props.searchedItems.map(item=>{
    return <OutputSearchItem item={item}/>
})}



    </div>
  )
}

export default SearchBar