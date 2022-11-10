
const mongoose = require('mongoose');
const { stringify } = require('uuid');


const transaction = new mongoose.Schema({
   createdAt:{
type:String
 },
 type:{
    type:String
 },money:{
    type:Number
 },userId:{
    type:String
 },sellerName:{
    type:String
 },orderId:{
   type:String
 }
});



const Comments = mongoose.model('Transactions', transaction);

module.exports = Comments;