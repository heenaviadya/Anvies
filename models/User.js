const mongoose = require('mongoose')
const Schema = mongoose.Schema;




const UserSchema = new Schema({
  userName: String,
  user_Id: { type: String },
});

module.exports =mongoose.model('Users', UserSchema);