const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

async function connectMongoDB (url) {
  try {
    await mongoose.connect(url)
    console.log('connected to mongodb')
  } catch (err) {
    console.log('the error occured in connection with mongodb!')
    res.status(500).json({ error: 'internal server error!' })
  }
}

module.exports = connectMongoDB
