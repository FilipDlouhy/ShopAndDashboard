import React, { useEffect, useState } from 'react'
import DashboardSellerTransaction from './DashboardSellerTransaction'
import DashboardCustomerTransaction from './DashboardCustomerTransaction'
import axios from 'axios'
function DashBoardTransactions() {
    const[transactions,setTransactions] = useState()
    const[alltransactions,setAllTransactions] = useState()
    const [sellers,setSellers]  = useState()
    useEffect(()=>{
        axios.get(`http://localhost:5000/GetTransactions`).then((res)=>{
        setTransactions(res.data)
        setAllTransactions(res.data)
        })


        axios.get(`http://localhost:5000/GetSellersTrue`).then((res)=>{
        setSellers(res.data)
            })

    },[])

function shuffleTransactions (value){

if(value === "Highest"){
    let arr =[]
    if(transactions.length > 0){

        transactions.map((transaction)=>arr.push(transaction))
        arr.sort((a, b) => b.money - a.money);
    setTransactions(arr)

    }else{

        alltransactions.map((transaction)=>arr.push(transaction))
        arr.sort((a, b) => b.money - a.money);
    setTransactions(arr)

    }

}else if(value === "Lowest"){
    let arr =[]
    if(transactions.length > 0){

        transactions.map((transaction)=>arr.push(transaction))
        arr.sort((a, b) => a.money - b.money);
        setTransactions(arr)

    }else{
        alltransactions.map((transaction)=>arr.push(transaction))
        arr.sort((a, b) => a.money - b.money);
        setTransactions(arr)


    }


}
else if(value === "Byseller"){
    let arr =[]
    if(transactions.length > 0){
        sellers.map((seller)=>{

            transactions.map((transaction)=>{
                if(transaction.type === "Seller"){
                    if(seller.name===transaction.sellerName){
                        arr.push(transaction)
                    }
                }
            })
            
            })


    }else{
        sellers.map((seller)=>{

            alltransactions.map((transaction)=>{
                if(transaction.type === "Seller"){
                    if(seller.name===transaction.sellerName){
                        arr.push(transaction)
                    }
                }
            })
            
            })


    }

setTransactions(arr)
}
else if(value === "Sellers"){
    let arr =[]
    if(transactions.length > 0){

        transactions.map((transaction)=>{
            if(transaction.sellerName){
                arr.push(transaction)
            }
         })
        

    }else{
        alltransactions.map((transaction)=>{
            if(transaction.sellerName){
                arr.push(transaction)
            }
         })


    }

setTransactions(arr)
}


else if(value === "Customers"){
    let arr =[]
    if(transactions.length > 0){

        transactions.map((transaction)=>{
            if(transaction.type==="Customer"){
                arr.push(transaction)
            }
         })

    }else{

        alltransactions.map((transaction)=>{
            if(transaction.type==="Customer"){
                arr.push(transaction)
            }
         })

    }

setTransactions(arr)
}else{
    setTransactions(alltransactions)

}
}

  return (
    <div className='px-9 w-full'>
    <div className=' w-full flex items-center justify-between h-20'>
                   <p className='text-4xl   font-bold'> Transactions</p>
                   </div> 
   
                       <div className='w-full ordersDiv border-2 '>
                   
                       <div className=' px-6 w-full border-b-2 h-20 flex items-center justify-between'>
                       <input onChange={(e)=>{
                        let arr =[]
                        alltransactions.map((transaction)=>{
                            if(transaction.sellerName.toLowerCase().includes(e.target.value.toLowerCase())  || transaction.createdAt.includes(e.target.value.toLowerCase()) )
                              {
                                arr.push(transaction)
                              }
                        })
                        setTransactions(arr)
                       }} className=' px-2 hover:bg-blue-100  border-2 text-xl h-10  w-40 md:w-96 text-left' placeholder='Search..' type="text"></input>
                      
                       <div className=' h-full w-96 flex items-center justify-around'>
                       <select onChange={(e)=>{
                        shuffleTransactions(e.target.value)
                       }} className=' sm:inline-block hidden h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2' name="category" placeholder='Category' id="category">
       <option value="all">All</option>
       <option value="Highest">Highest</option>
       <option value="Lowest">Lowest</option>
       <option value="Byseller">By seller</option>
       <option value="Sellers">Sellers</option>
       <option value="Customers">Customers</option>
     </select>
     <select onChange={(e)=>{
        let arr =[]
console.log(alltransactions)
        if(transactions.length >0 && transactions.length > parseInt(e.target.value) ){
            transactions.map((transaction,index)=>{

                if(index < parseInt(e.target.value)+1){
                    console.log(index)
                    arr.push(transaction)
                }
            })
            setTransactions(arr)
        }else{
            setTransactions(alltransactions)
        }
     }} className='hidden lg:inline-block h-9 text-lg text-gray-400 font-medium focus:border-gray-400 px-1 w-40 border-2'name="sort " placeholder='Sort by' id="sort">
       <option value="20">Show 20</option>
       <option value="40">Show 40</option>
       <option value="80">Show 80</option>
       <option value="all">Show All</option>
     </select>
                       </div>
                       </div>  
   
                   <div className='w-full  ordersShow '>
   
                <div className='w-full h-12 border-black flex border-b-4 px-2 sm:px-8'>
                    <div className='h-full w-1/2 flex items-center justify-start '>
                        <p className=' text-lg sm:text-2xl font-semibold'>Type</p>
                    </div>
                    <div className='h-full w-1/4 flex items-center justify-start '>
                        <p className=' text-lg sm:text-2xl font-semibold'>Date</p>
                    </div>
                    <div className='h-full w-1/4 flex justify-end items-center '>
                        <p className=' text-lg sm:text-2xl font-semibold'>Total</p>
                    </div>
                </div>
   
                   {transactions&&transactions.map(transaction=>{
                    if(transaction.type==="Customer"){
                        return <DashboardCustomerTransaction transaction={transaction}/>
                    }else{
                        return <DashboardSellerTransaction transaction={transaction}/>
                    }
                   })}


                   
                   </div>
   
                       </div>
   
       </div>
  )
}

export default DashBoardTransactions