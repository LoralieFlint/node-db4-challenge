
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingrediants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingrediants').insert([
        {name: 'lettuce'},
        {name: 'tomato'},
        {name: 'sour cream'},
        {name: 'cheese'},
        {name: 'oil'},
        {name: 'potatoes'},
        {name: 'fry sauce'}
      ]);
    });
};
