exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, project_id: 1, description: 'remove battery', notes: 'battery can explode so be careful', completed: false },
        { id: 2, project_id: 1, description: 'dump the battery', notes: 'Throw outside trash', completed: false },
        { id: 3, project_id: 1, description: 'install new battery', notes: 'make sure it is a new battery', completed: false },
        { id: 4, project_id: 2, description: 'Draw Solar system', notes: 'make sure it looks like one', completed: false },
        { id: 5, project_id: 2, description: 'be good to environment', notes: 'Keep our planet clean', completed: false },
        { id: 6, project_id: 2, description: 'read more about different solar systems', notes: 'make sure they are real', completed: false },
        { id: 7, project_id: 3, description: 'gain hunger', notes: 'Work out', completed: false },
        { id: 8, project_id: 3, description: 'make a bomb sandwich to eat', notes: 'use peanut butter and jelly', completed: false },
        { id: 9, project_id: 3, description: 'EAT IT!', notes: 'Do not forget the milk or a drink', completed: false }
      ]);
    });
};
