exports.seed = function(knex, Promise) {
  return knex("recipe").insert([
    { recipe_name: "cake", instructions: "1.mix flour, 2.put egg, 3.bake" },
    { recipe_name: "chicken wings", instructions: "oven bake chicken wings" }
  ]);
};
