exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients").insert([
    {},
    { recipe_id: 1, ingredients_id: 1, portion: 5 },
    { recipe_id: 1, ingredients_id: 2, portion: 1 },
    { recipe_id: 1, ingredients_id: 4, portion: 3 },
    { recipe_id: 2, ingredients_id: 3, portion: 4 },
    { recipe_id: 2, ingredients_id: 1, portion: 5 }
  ]);
};
