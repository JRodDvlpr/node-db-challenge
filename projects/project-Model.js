const db = require('../data/db-config.js')

const find = () => {
  return db('projects')
}

const add = (project) => {
  return db('projects')
  .insert(project, 'id')
}

const findById = (id) => {
  return db('projects')
  .where({ id })
  .first()
}

const updateProject = (changes, id) => {
  return db('projects')
  .where({ id })
  .update(changes, 'id')
  .then(() => {
    return findById(id)
  })
}


const deleteProject = (id) => {
  return db('projects')
  .where({ id })
  .del()
}

module.exports = {
  find,
  add,
  findById,
  updateProject,
  deleteProject
}