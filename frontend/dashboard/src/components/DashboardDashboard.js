import React, { useEffect, useState } from 'react'
import DashBoardBarChart from './DashBoardBarChart'
import DashboardPieChart from './DashboardPieChart'
import DashBoardDashboardLatestOrder from './DashBoardDashboardLatestOrder'
import DashBoardDashboardLineChart from './DashBoardDashboardLineChart'
import axios from 'axios'
function DashboardDashboard() {
const [barChartData,setBarChartData]= useState()
const [lineChartData,setLineChartData]= useState()
const[totalRevenue,setTotalRevenue] = useState()
const [totalOrders,setTotalOrders] = useState()
const [Laptops,setLaptops]=useState(0)
const [Jerseys,setJerseys]=useState(0)
const [Shoes,setShoes]=useState(0)
const [Shirts,setShirts]=useState(0)
const [totalProducts,setTotalProducts] = useState()
const [orders,setOrders] = useState()
    useEffect(()=>{
        let laptop = 0
        let shoes = 0
        let shirts = 0
        let jerseys = 0
        let total = 0;
        axios.get(`http://localhost:5000/GetALLOrders`).then((res)=>{
  

            res.data.map((order)=>{
                if(order.payed === true){
                    console.log(order.price)
                    order.items.map((item)=>{
                       
                            
                        let addMoney = parseInt(item.quantity) * parseInt(item.price)
                       
                        total += addMoney
                            if("Laptops" ===item.itemCategory){
                                laptop += addMoney
                                console.log(laptop)

                                 }           
                  
                            
                            else if("Jerseys" === item.itemCategory){
                                jerseys += addMoney
                              
                                }
                           else  if("Shoes" ===item.itemCategory){
                                  shoes += addMoney
                             
                                }
                             else if("Shirts" ===item.itemCategory){
                               shirts += addMoney
                                
                                }
                                setLaptops(laptop)
                                setJerseys(jerseys)
                                 setShoes(shoes)
                                setTotalRevenue(total)
                                setShirts(shirts) 
                   
                      
                    })
                }
             
            })
     
    
       
   
            setTotalOrders(res.data.length)
            setOrders(res.data.reverse()) 
        
                    })
                    axios.get(`http://localhost:5000/GetALLOrders`).then((res)=>{

                                let sales =[]
                              
                        res.data.map((order)=>{
                       console.log(order.createdAt.slice(0,2) +"/" + order.createdAt.slice(6,10) )
                       let date =order.createdAt.slice(0,2) +"/" + order.createdAt.slice(6,10)
                         let newSale ={date:date,money:0}
                         console.log(newSale)
                         let arr =[]
                         sales.map((sale)=>{
                      
                                arr.push(sale.date)
                         })
                         if(arr.includes(newSale.date) === false){
                            sales.push(newSale)
                         }
                        })
                 
              
                   
                res.data.map((order)=>{
                    sales.map((sale)=>{
                        if(order.createdAt.slice(0,2) +"/" + order.createdAt.slice(6,10) === sale.date){
                                sale.money  = sale.money + order.price
                        }
                    })
                })
                setBarChartData(sales)
                    
                                })
                    axios.get(`http://localhost:5000/GetAllItemsFiltered`).then((res)=>{
                        setTotalProducts(res.data.length)
                    })
                    axios.get(`http://localhost:5000/GetTransactions`).then((res)=>{
                        
                        let transactions =[]
                              
                        res.data.map((transaction)=>{
                       let date =transaction.createdAt.slice(0,2) +"/" + transaction.createdAt.slice(6,10)
                         let newTransaction ={date:date,money:0}
                         let arr =[]
                         transactions.map((transaction)=>{
                      
                                arr.push(transaction.date)
                         })
                         if(arr.includes(newTransaction.date) === false){
                            transactions.push(newTransaction)
                         }
                        })
                 
              
                   
                res.data.map((transaction)=>{
                    transactions.map((sale)=>{
                        if(transaction.createdAt.slice(0,2) +"/" + transaction.createdAt.slice(6,10) === sale.date){
                            if(transaction.type === "Seller"){
                                sale.money  = sale.money - transaction.money
                            }else{
                                sale.money  = sale.money + transaction.money
                            }
                                
                        }
                    })
                })

                setLineChartData(transactions)
                        })
              
    },[])
 
  return (
    <div className=' px-9 w-full'>

               <div className=' w-full flex items-center h-40'>
                <p className='text-4xl   font-bold'> Dashboard</p>
                </div> 

                <div className=' justify-between w-full  flex items-center  flex-col lg:flex-row h-96 lg:h-36'>

                    <div className='w-8/12 lg:w-4/12  mr-4   flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#2167d14b] flex justify-center items-center rounded-full'>
                    <i class="text-2xl text-blue-800  fa-solid fa-sack-dollar"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Sales</p>
                           <p className='text-center text-xs sm:text-sm'>{totalRevenue &&totalRevenue} $</p>
                           </div>

               

                    </div>

                    <div className=' w-8/12 lg:w-4/12 mr-4  flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#39ff2f4b] flex justify-center items-center rounded-full'>
                    <i class="text-2xl text-green-800  fa-solid fa-truck-fast"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Orders</p>
                           <p className='text-center text-xs sm:text-sm'>{totalOrders &&totalOrders}</p>
                           </div>

               

                    </div>


                    <div className=' w-8/12 lg:w-4/12   flex items-center px-9 border-2  rounded-md h-24'>
                    <div className='w-14 h-14 bg-[#e0ff2e4b] flex justify-center items-center rounded-full'>
                    <i class=" text-2xl text-yellow-300 fa-solid fa-basket-shopping"></i>
                    </div> 

                    <div className=' ml-3  h-8 flex items-center justify-center  flex-col'>
                           <p className='font-bold text-sm tracking-wide '>Total Products</p>
                           <p className='text-center text-xs sm:text-sm'>{totalProducts&&totalProducts}</p>
                           </div>

               

                    </div>

                </div>



                    <div className='w-full flex mt-20 mb-24 md:mb-96 xl:mb-20 flex-col xl:flex-row items-center justify-between chartDivHeigt'>

                    <div  className=' shadow-xl  mr-2 barChartHeightDiv w-3/5  rounded  border-2'> 
                        <div className='w-full  text-2xl flex items-center px-7  font-bold  h-20'>
                                <p>
                                    Sale Statistics
                                </p>
                        </div>
                            <div className='  w-full'>
                               {barChartData &&  <DashBoardBarChart barChartData={barChartData}/> } 
                            </div>
                    </div>


                        <div className=' shadow-xl  m-10 chartDivHeigt w-3/5 flex flex-col justify-center items-center  ml-2  rounded  border-2'>

                        <div className='  w-full text-2xl flex items-center px-7   font-bold  h-20'>
                            <p>
                                Product Statistics
                            </p>
                            </div>
                 
                               {Laptops &&  <DashboardPieChart  Laptops ={Laptops} Jerseys ={Jerseys} Shoes ={Shoes} Shirts ={Shirts} /> } 
                         

                        </div>

                    </div>

                    <div className='LineChartDiv shadow-xl'>
                    <div className='  w-full text-2xl flex items-center px-7   font-bold  h-24'>
                            <p>
                                Shop Ballance
                            </p>
                            </div>
                            {lineChartData &&  <DashBoardDashboardLineChart  lineChartData={lineChartData} /> } 
                    </div>

                    <div className='w-4/5  h-60 mx-auto mb-20 offset rounded border-2 shadow-md '>
                        <div className='h-10 text-xl font-bold w-full flex items-center px-8'>
                            <p>Latest Orders</p>
                        </div>

                            <div className='w-full offset px-10'>

                                {orders && orders.map((order)=>{
                                    return <DashBoardDashboardLatestOrder order={order}/>
                                })}

                            </div>
                    </div>

    </div>
  )
}

export default DashboardDashboard