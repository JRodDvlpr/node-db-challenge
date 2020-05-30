
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'apple battery', description: '' },
        { id: 2, name: 'garbage', description: '' },
        { id: 3, name: 'install battery', description: '' },
        { id: 4, name: 'Space', description: '' },
        { id: 5, name: 'mouth', description: '' },
        { id: 6, name: 'food', description: '' }
      ]);
    });
};
