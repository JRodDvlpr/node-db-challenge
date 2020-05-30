const db = require('../data/db-config.js')

const find = () => {
   return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id' )
    .select('tasks.id', 'tasks.description as taskDescription', 'projects.name', 'projects.description as projectDescription')
}

const add = (task) => {
   return db('tasks')
    .insert(task, 'id')
}

const findTaskById = (id) => {
    return db('tasks')
    .where({ id })
    .first()
}

module.exports = {
   find,
   add,
   findTaskById
}