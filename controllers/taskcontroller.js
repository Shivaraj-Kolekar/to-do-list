const Task = require('../models/task')
const mongoose = require('mongoose')

async function createtask (req, res) {
  try {
    //await authenticateUser(req, res)
    const body = req.body
    const newTask = await Task.create({
      taskname: body.taskname,
      description: body.description,
      status: body.status,
      date: body.date
      //createdBy: req.user._id // Assuming user is stored in req.user
    })
    await newTask.save()
    //res.status(200).json({ message: 'Task created successfully!', task: newTask }) return res.render('tasks')
    return res.redirect('/tasks')
  } catch (err) {
    console.log(err)
  }
}

/*
async function createtask (req, res) {
  try {
    const body = req.body
    const newTask = await Task.create({
      taskname: body.taskname,
      description: body.description,
      status: body.status,
      date: body.date
    })

    res
      .status(200)
      .json({ message: 'the task created succesfuly!', task: newTask })
  } catch (err) {
    res.status(500).json({ error: 'internal server error' })
    console.log(err)
  }
}
*/
async function getTask (req, res) {
  try {
    //await authenticateUser(req, res)
    const usertask = await Task.find({})
    if (!usertask.length) {
      res.status(500).json({ error: 'internal server error' })
    }
    //res.send(usertask)
    return res.render('tasks', { Task: usertask })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  createtask,
  getTask
}
