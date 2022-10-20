const mongoose = require('mongoose')

const Schema = mongoose.Schema;

import { v4 } from 'uuid';


const UserSchema = new Schema({
  userName: String,
  user_Id: { type: String, default: v4() },
});

module.exports =mongoose.model('Users', UserSchema);