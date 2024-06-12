const express = require('express')
const User = require('../models/user')
const router = express.Router()
const app = express()
const taskroutes = require('../routes/tasks')
const userroutes = require('../routes/users')
router.get('/', async (req, res) => {
  if (!User) {
    return res.redirect('/')
  }

  return res.render('home')
  console.log('not working')
})

router.get('/signup', (req, res) => {
  return res.render('signup')
})

router.get('/login', (req, res) => {
  return res.render('login')
})

router.get('/tasks', (req, res) => {
  return res.render('tasks')
})

module.exports = router
