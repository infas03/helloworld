const mongoose = require('mongoose');

const HelloSchema = new mongoose.Schema({ 

  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  }
});
module.exports = Hello = mongoose.model('hello', HelloSchema);