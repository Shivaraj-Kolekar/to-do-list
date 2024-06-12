const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
      unique: true
    },
    email: {
      type: String,
      requried: true,
      unique: true
    },
    password: {
      type: String,
      requried: true
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
