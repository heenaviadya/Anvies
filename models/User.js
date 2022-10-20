const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;




const UserSchema = new Schema({
  userName: String,
  user_Id: { type: String ,default: uuid.v4() },
});

module.exports =mongoose.model('Users', UserSchema);