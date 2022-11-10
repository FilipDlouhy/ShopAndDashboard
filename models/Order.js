
const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    orderId:{
type:String
    },
  firstName: {
    type: String,
  },
  city:{type:String},
  street:{
    type:String
  },
  lastName:{
    type:String
  }
  ,
  userId: {
    type: String,

  },
  items: {
    type: Array,

  },createdAt:{
    type:String
  },price:{
    type:Number
  },delivered:{
    type:Boolean
  },payed:{
    type:Boolean
  },
  year:{
    type:Number
  },type:{
    type:String
  },email:{
    type:String
  },shipping:{
    type:Number
  },
  deliveredAt:{
    type:String
  }
});



const Orders = mongoose.model('orders', orderSchema);

module.exports = Orders;