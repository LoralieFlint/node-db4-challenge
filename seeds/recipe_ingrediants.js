exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recepies_ingrediants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recepies_ingrediants").insert([
        { recepie_id: 1, qty: 1, measurements: "cup" },
        { recepie_id: 1, qty: 1, measurements: "half tomato" },
        { recepie_id: 1, qty: 2, measurements: "tblsp" },
        { recepie_id: 1, qty: 1, measurements: "quarter cup" },
        { recepie_id: 2, qty: 8, measurements: "cups" },
        {
          recepie_id: 2,
          qty: 10,
          measurements: "whole potatoes thinly sliced"
        },
        { recepie_id: 2, qty: 2, measurements: "tblsp" }
      ]);
    });
};
