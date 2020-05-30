const express = require('express')

const Projects = require('../projects/projectModel')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.find()
       .then(projects => {
          res.status(200).json(projects)
       })
       .catch(err => {
          res.status(500).json({ message: 'Failed to get projects' });
       })
 })
 
 router.post('/', (req, res) => {
    const projectData = req.body
 
    Projects.add(projectData)
       .then (project => {
          res.status(201).json(project)
       })
       .catch(err => {
          res.status(500).json({ message: 'Failed to create a new project' });
       })
 })
 
 router.get('/:id', (req, res) => {
     const { id } = req.params;
 
     Projects.findById(id)
         .then(project => {
             if (project) {
                 res.json(project);
             } else {
                 res.status(404).json({ message: 'Could not find project with given id.' })
             }
         })
         .catch(err => {
             res.status(500).json({ message: 'Failed to get projects' });
         });
 });
 
 module.exports = router