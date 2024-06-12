const express = require('express')
const router = express.Router()
const {
  handleusersignup,
  handleuserLogin
} = require('../controllers/usercontroller')

router.post('/signup', handleusersignup)
router.post('/login', handleuserLogin)

module.exports = router
