
const mongoose = require('mongoose');


const itemComment = new mongoose.Schema({
 
    comment:{
        type:String
    },
userId:{
    type:String
},
itemId:{
    type:String
},
rating:{
    type:String
},createdAt:{
    type:String
}
});



const Comments = mongoose.model('Reviews', itemComment);

module.exports = Comments;