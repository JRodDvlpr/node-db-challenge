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

module.exports = {
  find,
  add,
  findById
}