exports.up = async function(knex) {
  await knex.schema.createTable("recepies_ingrediants", table => {
    table.increments("id");
    table
      .integer("recepie_id")
      .unsigned()
      .notNullable()
      // finds item in recepie table and returns the id
      .references("id")
      .inTable("recepies")
      table
      .integer("ingrediants_id")
      .unsigned()
      .notNullable()
      // finds item in recepie table and returns the id
      .references("id")
      .inTable("ingrediants");
    table.float("qty", 25).notNullable();
    table.string("measurements", 255).notNullable();
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recepies_ingrediants")
};
