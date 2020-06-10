const express = require('express')

const Projects = require('../projects/project-Model')

const router = express.Router()

// GET PROJECT
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    })
})

// GET PROJECT BY ID
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
 

// POST PROJECT
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
 

// UPDATE PROJECT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
        .then(project => {
            if (project) {
                Projects.updateProject(changes, id)
                    .then(updatedProject => {
                        res.json(updatedProject);
                    });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update project' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Projects.deleteProject(id)
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