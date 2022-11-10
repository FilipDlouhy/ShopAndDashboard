
const mongoose = require('mongoose');


const seller = new mongoose.Schema({
 
    name:{
        type:String
    },
icon:{
    type:String
},subscribed:{
    type:Boolean
},createdAt:{
    type:String
}
});



const Comments = mongoose.model('Sellers', seller);

module.exports = Comments;