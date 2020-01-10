
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recepies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recepies').insert([
        {name: 'taco'},
        {name: 'Burger'},
        {name: 'fries'},
      ]);
    });
};
