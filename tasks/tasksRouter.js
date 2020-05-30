const express = require('express')

const Tasks = require('../tasks/tasks-model')

const router = express.Router()

router.get('/', (req, res) => {
   Tasks.find()
      .then(tasks => {
         res.status(200).json(tasks)
      })
      .catch(err => {
         res.status(500).json({ message: 'Failed to get tasks' });
      })
})

router.post('/', (req, res) => {
   const taskData = req.body

   Tasks.add(taskData)
      .then (task => {
         res.status(201).json(task)
      })
      .catch(err => {
         res.status(500).json({ message: 'Failed to create a new task' });
      })
})

module.exports = router