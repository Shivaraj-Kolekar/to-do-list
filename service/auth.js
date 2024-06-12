const jwt = require('jsonwebtoken')
const secret = 'todo@834'

function setUser (user) {
  const payload = {
    _id: user._id,
    email: user.email
  }
  return jwt.sign(payload, secret)
}

function getUser (token) {
  if (!token) {
    return null
  }
  try {
    jwt.verify(token, secret)
  } catch (err) {
    return null
  }
}

module.exports = { setUser, getUser }
