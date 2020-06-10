const express = require('express')

const Tasks = require('../tasks/tasks-model')

const router = express.Router()

// GET TASK
router.get('/', (req, res) => {
   Tasks.find()
   .then(tasks => {
      res.status(200).json(tasks)
   })
   .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
   })
})

// GET TASKS BY ID
router.get('/:id', (req, res) => {
   const { id } = req.params;

   Tasks.findTaskById(id)
   .then(task => {
   if (task) {
      res.json(task);
   } else {
      res.status(404).json({ message: 'Could not find task with given id.' })
      }
   })
   .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
   });
});

// POST TASK
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

// UPDATE TASK
router.put('/:id', (req, res) => {
   const { id } = req.params;
   const changes = req.body;

   Tasks.findTaskById(id)
   .then(task => {
   if (task) {
   Tasks.updateTask(changes, id)
   .then(updatedTask => {
      res.json(updatedTask);
      });
      } else {
         res.status(404).json({ message: 'Could not find task with given id' });
         }
      })
      .catch(err => {
      res.status(500).json({ message: 'Failed to update task' });
   });
});

// DELETE TASK

router.delete('/:id', (req, res) => {
   const { id } = req.params;

   Tasks.deleteTask(id)
   .then(deleted => {
      if (deleted) {
         res.json({ removed: deleted });
      } else {
         res.status(404).json({ message: 'Could not find project with given id' });
      }
      })
      .catch(err => {
      res.status(500).json({ message: 'Failed to delete project' });
   });
});

module.exports = router