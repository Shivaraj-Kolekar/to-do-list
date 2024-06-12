const express = require('express')
const router = express.Router()
const { createtask, getTask } = require('../controllers/taskcontroller')
const { authenticateUser } = require('../middleware/authmiddleware')

const task = require('../models/task')

router.post('/', createtask)
router.get('/', getTask)
module.exports = router
