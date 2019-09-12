exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable();
      tbl.string("instructions", 255);
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .unique()
        .notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.float("portion");

      tbl.primary(["recipe_id", "ingredients_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients");
};
