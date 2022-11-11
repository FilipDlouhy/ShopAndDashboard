import React from 'react'
import axios from 'axios'
import  { useContext, useEffect,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import ProductPageReviewOne from './ProductPageReviewOne'
import ProductPageReviewTwo from './ProductPageReviewTwo'
import { useNavigate } from 'react-router-dom'
import Review from './Review'
function ProducrPage() {
    const {item} = useContext(UserContext)
    const {userId} = useContext(UserContext)
    const {itemReviews} = useContext(UserContext)
    const {setItemReviews} = useContext(UserContext)
    const {setShoppingList} = useContext(UserContext)
    const {shoppingList} = useContext(UserContext)
    const {RendersetShoppingList} = useContext(UserContext)
    const {RendershoppingList} = useContext(UserContext)
    const[numberInstock,setNumberInstock] = useState()
        const { setListLength} = useContext(UserContext)
    const [avg,setAvg] = useState()
    const [lentgth ,setLength] = useState()
    const [itemQuantity,setItemQuantity] = useState()
    function returnStars(){

    if(avg &&lentgth) {
             if( avg=== 1){
                         
                 return  <div className='productPagePriceEtcStars'>
                 <i class="fa-solid fa-star"></i>
     
                 </div>
         
         
             }else if(avg ===2){
                         
                 return   <div className='productPagePriceEtcStars'>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 </div>
         
         
             }else if(avg=== 3 ){
                         
                 return   <div className='productPagePriceEtcStars'>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
       
                 </div>
         
         
             }
             else if(avg=== 4){
                         
                 return     <div className='productPagePriceEtcStars'>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 </div>
         
             
         
         
             }else if(avg === 5){
                 return    <div className='productPagePriceEtcStars'>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 </div>
             }
             }
             else {
                
                return    <div className='productPagePriceEtcStars'>
                </div>
         
             }
         
         }  
    useEffect(()=>{
        RendersetShoppingList(shoppingList)
            axios.get(`http://localhost:5000/GetComments/${item._id}`).then(res=>{
                setItemReviews(res.data)
            })

            setItemQuantity(1)
    },[])
    useEffect(()=>{
    if(itemReviews){
        if(itemReviews.length !== 0){
            let sum =0
            itemReviews.map((review)=>{
               sum += parseInt(review.rating)
            })
           
           setAvg( Math.round(sum/itemReviews.length))
           setLength(Math.round(sum/itemReviews.length))
        }
   
    }
let arr =[]
if(item){
    for(let i = 1  ; i  < item.numberInStock+1; i++ ){
        arr.push(i)
        }
        setNumberInstock(arr)
    }


},[itemReviews])


  return (
    <div className='productPage'>
          
          <div className='productPageTop'>
    <div className='productPageImg'>
        <img src={item.imageId }></img>
    </div>
    <div className='productPageDescription'>

    <h1>{item.name}</h1>
    <p>{item.descpirtion}
    </p>


        <div className='productPagePriceEtc'>
        <div className='productPagePriceEtcDiv'>
            <p className='productPagePriceEtcGray'>Price</p>
            <p className='productPagePriceEtcBlack'>{item.price}$</p>
        </div>

        <div className='productPagePriceEtcDiv'>
            <p className='productPagePriceEtcGray'>Status</p>
            <p  className='productPagePriceEtcBlack'>{item.inStock}</p>
        </div>

        <div className='productPagePriceEtcDiv'>
            <p className='productPagePriceEtcGray'>Reviews</p>
            { lentgth  && returnStars(avg)}
            <p  className='productPagePriceEtcBlack'>Reviews {itemReviews&& itemReviews.length} </p>
     
     
        </div>


        <div className='productPagePriceEtcDiv'>
        <p className='productPagePriceEtcGray'>Quantity</p>
              <select onChange={(e)=>{
                setItemQuantity(parseInt(e.target.value) )
              }} className='quantity' id="quantity" name="quantity">
                {numberInstock && numberInstock.map((number)=>{
                    return      <option value={number}>{number}</option>
                })}
    
  
                    </select>
        </div>
                
        <button onClick={()=>{

                let quantity = document.querySelector("#quantity")

                let arr = []

                if(shoppingList){
                    shoppingList.map((shopItem)=>{
                        arr.push(shopItem)
                    })
                }
                
                let newItem ={
                    quantity:itemQuantity,
                    itemId:item._id,imageId:item.imageId,price:item.price,itemCategory:item.category,seller:item.seller}
                    let isIn=true

                    arr.map(item =>{
                        if(item.itemId === newItem.itemId){
                            item.quantity = item.quantity + itemQuantity
                        isIn = false
                        }
                    })
                  if(isIn){
                    arr.push(newItem)
                  }
                    
                  setListLength(arr.length)
    
             setShoppingList(arr)
             RendersetShoppingList(arr)
                quantity.value = 1

        }}>Add To Cart</button>

        </div>


    </div>

          </div>
    

            <div className='productPageBottom'>
        <div className='productPageReviewes'>
            <h1>REWIEWS</h1>
            <div className='productPageReviewesDiv'>
                {itemReviews && itemReviews.map((review)=>{
                    return     <Review review={review}/>
                })}
  



            </div>
          
            
        </div>
                {  userId ? <ProductPageReviewTwo/>:<ProductPageReviewOne/> }
            


            <div>
            
        </div>
            </div>

    </div>
  )
}

export default ProducrPage