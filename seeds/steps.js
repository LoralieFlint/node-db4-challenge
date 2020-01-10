
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recepie_id: 1, step: 1, description: 'cook and season the beef.'},
        {recepie_id: 1, step: 2, description: 'put in a taco shell.'},
        {recepie_id: 1, step: 3, description: 'add toppings'},
        {recepie_id: 3, step: 1, description: 'heat up the oil.'},
        {recepie_id: 3, step: 3, description: 'fry in oil until golden brown'},
        {recepie_id: 3, step: 2, description: 'drop the fries in.'},
      ]);
    });
};
