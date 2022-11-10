
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,

  },
  name: {
    type: String,

  },createdAt:{
    type:String
  },
  type:{
    type:String
  }
});



const Users = mongoose.model('users', userSchema);

module.exports = Users;