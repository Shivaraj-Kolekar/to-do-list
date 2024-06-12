const { getUser } = require('../service/auth')
const User = require('../models/user')

async function restricUser (req, res, next) {
  const token = req.cookies?.uid
  if (!token) {
    return res.redirect('/login')
  }
  const user = getUser(token)
  if (!user) {
    return res.redirect('/login')
  }
  req.user = user
  next()
}

async function checkAuth (req, res, next) {
  const userUid = req.cookies?.uid

  const user = getUser(userUid)

  req.user = user
  next()
}

module.exports = { restricUser, checkAuth }
