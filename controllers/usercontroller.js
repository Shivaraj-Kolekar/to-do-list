const User = require('../models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { setUser } = require('../service/auth')
async function handleusersignup (req, res) {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    //res.status(200).json({ message: 'user created succesfully', user: newUser })
    return res.render('tasks')
    /*if (!newUser) {
      console.log('error occcured in crating the user')
      res.status(500).json({ error: 'internal server error' })
    }*/
  } catch (err) {
    console.log('error ocured in signinng up', err)
    res.status(500).json({ error: 'internal server error' })
  }
}

async function handleuserLogin (req, res) {
  const { email, password } = req.body
  try {
    const user = await User.findOne({
      email,
      password
    })
    if (!user) {
      res.render('/login', { message: 'email and password not matched' })
    }
    const token = setUser(user)
    res.cookie('uid', token)
    return res.redirect('/')
    console.log('user logged in succesfullly')

    // const token
  } catch (err) {
    console.log('inccorect info of user!')
    res.status(500).json({ error: 'internal server error' })
    return res.redirect('/')
  }
}

module.exports = { handleusersignup, handleuserLogin }
