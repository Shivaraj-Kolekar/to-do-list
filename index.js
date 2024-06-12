const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./models/user')
const task = require('./models/task')
const bodyParser = require('body-parser')
const connectMongoDB = require('./connect')
const url = 'mongodb://localhost:27017/to-do-list'
const createtask = require('./controllers/taskcontroller')
const taskroutes = require('./routes/tasks')
const userroutes = require('./routes/users')
const { restricUser, checkAuth } = require('./middleware/authmiddleware')
const staticroutes = require('./routes/static')
const ejs = require('ejs')
const path = require('path')
const cookieParser = require('cookie-parser')
app.use(express.urlencoded({ extended: false }))
connectMongoDB(url)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(error => {
    console.log('the error occured in connection with mongodb!')
  })

app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // use for parsing the json body
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use('/tasks', taskroutes)
app.use('/users', userroutes)
app.use('/', staticroutes)

app.listen(8001, () => {
  console.log('server is running on port 8001')
})
