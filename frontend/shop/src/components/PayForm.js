
import React, { useEffect, useState,useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'   
import { useNavigate } from 'react-router-dom'

function PayForm() {
    const navigate = useNavigate()
    const { orderId} = useContext(UserContext)
      const { showOrder} = useContext(UserContext)
      const { userId} = useContext(UserContext)
    const validateCardNumber = number => {
        //Check if the number contains only numeric value  
        //and is of between 13 to 19 digits
        const regex = new RegExp("^[0-9]{13,19}$");
        if (!regex.test(number)){
            return false;
        }
      
        return luhnCheck(number);
    }
    
    const luhnCheck = val => {
        let checksum = 0; // running checksum total
        let j = 1; // takes value of 1 or 2
    
        // Process each digit one by one starting from the last
        for (let i = val.length - 1; i >= 0; i--) {
          let calc = 0;
          // Extract the next digit and multiply by 1 or 2 on alternative digits.
          calc = Number(val.charAt(i)) * j;
    
          // If the result is in two digits add 1 to the checksum total
          if (calc > 9) {
            checksum = checksum + 1;
            calc = calc - 10;
          }
    
          // Add the units element to the checksum total
          checksum = checksum + calc;
    
          // Switch the value of j
          if (j == 1) {
            j = 2;
          } else {
            j = 1;
          }
        }
      
        //Check if it is divisible by 10 or not.
        return (checksum % 10) == 0;
    }

    const [email,setEmail] = useState()
const[cardNumber,setCardNumber] = useState()
const [expireDateOfCard,setExpireDateOfCard] = useState()
const [cv,setCv] = useState()
const[error,setError] = useState()
  return (
    <div>
        
    <form className='payForm'>
<div className='payFormHeader'>
    <h1>Payment Form</h1>
    <h2 className='BAD'>{error}</h2>
    </div>
    <div  className='formLabelInput'>
    <label for="email">Email</label>
    <input onChange={(e)=>{
        setEmail(e.target.value)
    }} type="email" name="email" id="email"></input>
   </div>
   <div  className='formLabelInput'>
    <label for="cardNumber">Card Number</label>
    <input  onChange={(e)=>{
        setCardNumber(e.target.value)
    }}type="string" name="cardNumber" id="cardNumber"></input>
   </div>
   <div  className='formLabelInput'>
    <label for="expireDateOfCard">Card Expire Date</label>
    <input onChange={(e)=>{
        setExpireDateOfCard(e.target.value)
    }} type="string" maxLength={5} name="expireDateOfCard" id="expireDateOfCard"></input>
   </div>
   <div  className='formLabelInput'>
    <label for="cv">Card CV</label>
    <input onChange={(e)=>{
        setCv(e.target.value)
    }} type="string" maxLength={3} name="cv" id="cv"></input>
   </div>
        <button 
        onClick={(e)=>{
            e.preventDefault()
            axios.get(`http://localhost:5000/CheckEmail/${email}`).then((res)=>{
                
                if(res.data.message === "FOUNDED" ){
                let numOne = expireDateOfCard.toString().slice(0,2)
                let numTwo = expireDateOfCard.toString().slice(3,5)
                  
                        if(!isNaN(numOne) && !isNaN(numTwo) && !isNaN(cv)   && !isNaN(cardNumber) && parseInt(numOne) <  31 &&parseInt(numOne) >  0&& parseInt(numTwo) <  13 &&parseInt(numTwo) >  0 && cv.length === 3  ) {
                       
                            if(validateCardNumber(cardNumber)){
                      
                                axios.get(`http://localhost:5000/UpdateOrder/${orderId}`).then((res)=>{

                                    if(res.data.message ==="changed"){
                                        axios.get(`http://localhost:5000/GetOrder/${orderId}`).then((res)=>{
                                            var date = new Date();
                                            var dd = String(date.getDate()).padStart(2, '0');
                                            var mm = String(date.getMonth() + 1).padStart(2, '0');
                                            var yyyy = date.getFullYear()
                                            let today = mm + '/' + dd + '/' + yyyy
                                            let year = parseInt(yyyy)
                                            let newTransaction = {
                                                type:"Customer"
                                                ,money:res.data.price
                                                ,userId:userId,createdAt:today,orderId:orderId
                                            }
                                            console.log(newTransaction)
                                            axios.post(`http://localhost:5000/CreateTransaction`,newTransaction)
                                        })
                                     
                                        navigate("/ProfilePage")

                                    }else{
                                        setError("Somthing Went Wrong")
                                    }

                                 
                            })

                            }else{
                                setError("ENTER VALID CARD NUMBER")
                            }

                        }  else{
                            setError("ENTER VALID INPUTS")
                        }        
                

                  

                }else{
                    setError("EMAIL NOT FOUND")
                }
            })
        
        }}className='payFormBTN'>Pay For Order</button>

    </form>
    </div>
  )
}

export default PayForm
/*        */