
exports.up = async function(knex) {
    await knex.schema.createTable("ingrediants", table => {
    table.increments("id");
    table.string("name").notNullable();
})};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("ingrediants")
};
