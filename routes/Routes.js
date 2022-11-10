const { Router, response } = require('express');
const mongoose = require("mongoose")
const Users = require("../models/User")
const bcrypt = require("bcrypt");
const Coments = require("../models/ItemComment")
const router = Router();
const Orders = require("../models/Order")
const multer = require("multer")
const Items = require("../models/Item")
let uuid = require("uuid");
const e = require('express');
const Seller = require("../models/Seller")
const Transaction = require("../models/Transactions")
const storage = multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,"images")
},filename:(req,file,cb)=>{
  let imageId = uuid.v4()
   path= imageId+".png"
    cb(null,path)
}
})
const upload = multer({storage:storage})

router.post("/CreateUser", async(req,res)=>{
  const {password,email,name } = req.body


Users.findOne({email:email},async (error, response )=>{
    if(response===null){
        let hashPassword =  await bcrypt.hash(password,10)
       
        var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear()
let today = mm + '/' + dd + '/' + yyyy
        let user = new Users({
          email:email,password:hashPassword,name:name,createdAt:today
        })
      user.save()
          res.json("done")
    }else{
        res.json("Aleready Registered")
    }
})

 
})
router.post("/Login", async(req,res)=>{
    const {password,email } = req.body
  Users.findOne({email:email},async (error, response )=>{
 
      if(response === null){
        res.json("Not Found")
      }else{
        let leCheck = await bcrypt.compare(password,response.password)
    
            if(leCheck){
    
                    res.json({id:response._id,name:response.name})
       
        
            }else{
                res.json("wrong password")
            }

      }
  })
  
   
  })
  router.get("/GetUser/:id", async(req,res)=>{
    
    let userId = req.params.id
   
    Users.findOne({_id:userId},async (error, response )=>{
     
        if(response === null){
          res.json("Not Found")
        }else{
          res.json(response)
  
        }
    })
   
  })
  router.post("/UpdateUser/:id",async (req,res)=>{
    if(req.body.password){

      const {name,password,email} = req.body
      const userId = req.params.id
    let hashPassword =  await bcrypt.hash(password,10)
    Users.findByIdAndUpdate(userId,{name:name,password:hashPassword,email:email}).then(()=>{
      Users.findById(userId,(err,response)=>{
        res.json(response)
      })
    })
    }else{
      const {name,email} = req.body
      const userId = req.params.id


    Users.findByIdAndUpdate(userId,{name:name,email:email}).then(()=>{
      Users.findById(userId,(err,response)=>{
        res.json(response)
      })
    })
    }

    
  })
router.get("/GetUsersAdmin",(req,res)=>{
  Users.find({type:"Customer"},async(error,response)=>{
    res.json(response)
  })
})

router.post("/CreateItem",(req,res)=>{
Items.findOne({name:req.body.name},(err,response)=>{
    if(response === null){
        let newItem = new Items({
            name:req.body.name
            ,descpirtion:req.body.descpirtion
           ,inStock:req.body.inStock
            ,price:req.body.price,
            imageId:req.body.imageId,
            category:req.body.category,
            deleted:req.body.deleted,
            numberInStock:req.body.numberInStock
        })
        newItem.save()

}})
    })

router.get("/GetAllItems",(req,res)=>{
  
  Items.find().then((response)=>{
    res.json(response)
  })
})
router.get("/GetAllItemsFiltered",(req,res)=>{
  
  Items.find({deleted:true}).then((response)=>{
    res.json(response)
  })
})

router.get("/GetAllSellerItems/:name",(req,res)=>{
const sellerName = req.params.name
  Items.find({seller:sellerName}).then((response)=>{
    res.json(response)
  })
})
router.get("/GetItem/:itemId",(req,res)=>{
const itemId = req.params.itemId
Items.findOne({_id:itemId},(err,response)=>{
  res.json(response)
})

})
router.post("/AddComent",(req,res)=>{
const {comment,userId,itemId,rating}=req.body
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear()
let today = mm + '/' + dd + '/' + yyyy
console.log(today)
const newComment = new Coments({
  comment:comment,
userId:userId,
itemId:itemId,
rating:rating,createdAt:today
})

newComment.save()
res.json("Done Ma man")

})
router.get("/GetComments/:id",(req,res)=>{
  let itemId = req.params.id

  Coments.find({itemId:itemId},(err,response)=>{
    res.json(response)
  })
})
router.post("/CreateOrder",(req,res)=>{
const {orderId,firstName,city,street,lastName,userId,items,createdAt,price,delivered,payed,year,type,email,shipping} = req.body
let newOrder = new Orders ({
  orderId:orderId,
  firstName:firstName,
  city:city,
  street:street,
  lastName:lastName,
  userId:userId,
  items:items,
  createdAt:createdAt,
  price:price,
  delivered:delivered,
  payed:payed,
  year:year,
type:type,
email:email,
shipping:shipping
})
newOrder.save()
res.json(orderId)
})
router.get("/GetOrder/:orderId",(req,res)=>{
  const orderId = req.params.orderId
  console.log(req.params.orderId)
  Orders.findOne({orderId:orderId},(err,response)=>{
 
    res.json(response)
  } )
})
router.get("/GetAllOrders/:userId",(req,res)=>{
const userId = req.params.userId;

Orders.find({userId:userId},(err,response)=>{
  res.json(response)
})


})
router.get("/GetALLOrders",(req,res)=>{
  
  Orders.find({},(err,response)=>{
    res.json(response)
  })
  
  
  })
router.get("/CheckEmail/:userEmail",(req,res)=>{
  const email = req.params.userEmail
  Users.findOne({email:email},(err,response)=>{
    if(response){
      res.json({message:"FOUNDED"})
    }else{
      res.json({message:"NOTFOUNDED"})
    }
  })
})
router.get("/UpdateOrder/:id",async (req,res)=>{
 
  const orderId = req.params.id
Orders.findOneAndUpdate({orderId:orderId},{payed:true},(err,response)=>{
  res.json({message:"changed"})
})
  
})
router.post("/UpdateProduct/:id",async (req,res)=>{
const{ name,price, seller, description} = req.body
const itemId = req.params.id
Items.findByIdAndUpdate(itemId,{name:name,price:price, seller:seller, description:description})
.then(()=>{
  Items.findById(itemId,(error,response)=>{
    res.json(response)
  })
})
})
router.post("/DeliverOrder/:id",async (req,res)=>{
 const {deliveredAt}= req.body
  const orderId = req.params.id
  console.log(deliveredAt)
Orders.findByIdAndUpdate(orderId,{delivered:true,deliveredAt:deliveredAt},(err,response)=>{
  console.log(response)
  res.json({message:"changed"})
})
  
})
router.get("/DeleteItem/:id",(req,res)=>{
   const itemId = req.params.id
  Items.findByIdAndUpdate(itemId,{deleted:false}).then(()=>{
    Items.find({deleted:true}).then((response)=>{
      res.json(response)
    })
  })
})
router.post("/CreateSeller",(req,res)=>{
  console.log(req.body)
let newSeller = new Seller({
  name:req.body.name,
icon:req.body.icon
}) 
newSeller.save()
res.send("JUCHUU")
})
router.get("/GetSellersTrue",(req,res)=>{
  Seller.find({subscribed:true},async(error,response)=>{
    res.json(response)
  })
})
router.get("/GetSellersFalse",(req,res)=>{
  Seller.find({subscribed:false},async(error,response)=>{
    res.json(response)
  })
})
router.get("/RemoveSeller/:id",(req,res)=>{
  const sellerId = req.params.id

  Seller.findByIdAndUpdate(sellerId,{subscribed:false}).then(()=>{
    res.send("deleted")
  })

})
router.get("/AddSeller/:id",(req,res)=>{
  const sellerId = req.params.id

  Seller.findByIdAndUpdate(sellerId,{subscribed:true}).then(()=>{
    res.send("added")
  })
})
router.post("/CreateTransaction",(req,res)=>{
  const {type,money,userId,sellerName,createdAt,orderId} = req.body
if(userId){

let newTransaction = new Transaction({
  type:type,
  money:money,
  userId:userId,
  createdAt:createdAt,
  orderId:orderId
})
newTransaction.save()
}else if(sellerName){
let newTransaction = new Transaction({
  type:type,
  money:money,
sellerName:sellerName,
createdAt:createdAt
})
newTransaction.save()
}

})
router.post("/UpdateStock/:itemId",(req,res)=>{
 let added = req.body.added

 let itemId = req.params.itemId

 Items.findByIdAndUpdate(itemId,{numberInStock:added}).then(()=>{
  Items.find({deleted:true}).then((response)=>{
    res.json(response)
  })
 })
  })
  router.get("/GetUser/:id",(req,res)=>{
    const userId = req.params.id
    Users.findById(userId,(error,response)=>{
      res.json(response)
    })
  })
  router.get("/GetTransactions",(req,res)=>{
     Transaction.find().then((response)=>{
      res.json(response)
    })
  })
  router.post("/RemoveFromStock/:id",(req,res)=>{
    let id = req.params.id
  Items.findById(id,(err,response)=>{
    let newQuantity = response.numberInStock - req.body.minusQuantity
Items.findByIdAndUpdate(id,{numberInStock:newQuantity}).then(()=>{
  res.json("Updated")
})
  })
 })
router.get("/GetOrderTransaction/:orderId",(req,res)=>{
const orderId = req.params.orderId
Transaction.findOne({orderId:orderId},(err,response)=>{
res.json(response)
})
})
router.get("/GetAll",async  (req,res)=>{
  let allArray = []

await Items.find().then
((response)=>{
 
response.map(response=>{
  allArray.push({type:"Item", data:response})
})
})

await Orders.find().then((response)=>{

response.map(response=>{
  allArray.push({type:"Order", data:response})
})
})

await Users.find().then((response)=>{

response.map(response=>{
  allArray.push({type:"User", data:response})
})
})
res.json(allArray)

  })

module.exports = router