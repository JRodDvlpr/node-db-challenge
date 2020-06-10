exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'fix computer', description: 'Battery keeps dying', completed: false },
        { id: 2, name: 'Read about the solar system', description: 'find articles on Nasa', completed: false },
        { id: 3, name: 'eat sandwich', description: 'nom nom into your tummy', completed: true }
      ]);
    });
};