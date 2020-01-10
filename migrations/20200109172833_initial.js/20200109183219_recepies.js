exports.up = async function(knex) {
    await knex.schema.createTable("recepies", table => {
        table.increments("id");
        table.string("name").notNullable()
    })};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recepies")
}
