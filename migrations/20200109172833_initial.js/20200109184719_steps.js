
exports.up = async function(knex) {
    await knex.schema.createTable("steps", table => {
    table.integer("id")
    table
    .integer("recepie_id")
    .unsigned()
    // finds item in recepie table and returns the id
    .references("id")
    .inTable("recepies")
    // CASCADE allows the deletion of recepie or ingrediant but any connections on all tables will be deleted
    .onDelete("CASCADE")
    // CASCADE allows the deletion of recepie or ingrediant but any connections on all tables will be updated
    .onUpdate("CASCADE")
    table.string("step").notNullable();
    table.string("description", 250).notNullable();
})};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("steps")
};
