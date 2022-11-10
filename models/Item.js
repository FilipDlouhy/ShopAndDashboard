const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  descpirtion:{type:String},
  inStock:{type:String},
  price:{type:Number},
  imageId:{type:String},
  category:{type:String},
  seller:{type:String},
  deleted:{type:Boolean},
  numberInStock:{type:Number},
  createdAt:{type:String}
});



const Items = mongoose.model('items', itemSchema);

module.exports = Items;