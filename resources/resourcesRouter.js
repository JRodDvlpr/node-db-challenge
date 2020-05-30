const express = require('express')

const Resources = require('../resources/resources-Model')

const router = express.Router()

router.get('/', (req, res) => {
   Resources.find()
      .then(resources => {
         res.status(200).json(resources)
      })
      .catch(err => {
         res.status(500).json({ message: 'Failed to get resources' });
      })
})

router.post('/', (req, res) => {
   const resourceData = req.body

   Resources.add(resourceData)
      .then (resource => {
         res.status(201).json(resource)
      })
      .catch(err => {
         res.status(500).json({ message: 'Failed to create a new resource' });
      })
})

module.exports = router