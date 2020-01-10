exports.up = async function(knex) {
  await knex.schema.createTable("recepies", table => {
    table.increments("id");
    table.string("name").notNullable();
  });
  await knex.schema.createTable("ingrediants", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.float("quantity").notNullable();
  });
  await knex.schema.createTable("recepies_ingrediants", table => {
    table
      .integer("recepie_id")
      // finds item in recepie table and returns the id
      .references("id")
      .inTable("recepies")
      // CASCADE allows the deletion of recepie or ingrediant but any connections on all tables will be deleted
      .onDelete("CASCADE")
      // CASCADE allows the deletion of recepie or ingrediant but any connections on all tables will be updated
      .onUpdate("CASCADE");
    table
      .integer("ingrediant_id")
      .notNullable()
      .references("id")
      .inTable("ingrediants")
      // CASCADE allows the deletion of recepie or ingrediant but any connections on all tables will be deleted
      .onDelete("CASCADE")
      // CASCADE allows the deletion of recepie or ingrediant but any connections on all tables will be update
      .onUpdate("CASCADE")
      // primary gives the given columns names the primary key
    table.primary(["recepie_id", "ingrediant_id"]);
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recepies_ingrediants")
    await knex.schema.dropTableIfExists("ingrediants")
    await knex.schema.dropTableIfExists("recepies")
};
