const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    
  },
  firstname: {
    type: String,
    
  },
  lastname: {
    type: String,
    
  },
  fullname: {
    type: String,
  
  },
  faculty: {
    type: String,
    
  },
  email: {
    type: String,
    required: true
  },
  phone_no: {
    type: String,
    
  },
  gender: {
    type: String,
    
  },
  user_type: {
    type: String,
    required: true
  },
  address: {
    type: String,
   
  },
  dob: {
    type: Date,
    
  }, 
  leaves: [
    {    
      type: Schema.Types.ObjectId,
      ref: 'leaves'    
    }
  ]
  ,
  user_id: {
    type: String,
   
  }
  ,
  password: {
    type: String,
    required: true
  },
  
});

module.exports = User = mongoose.model('users', UserSchema);
