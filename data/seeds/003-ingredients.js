exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "egg" },
    { name: "flour" },
    { name: "chicken wings" },
    { name: "sugar" },
    { name: "soy sauce" }
  ]);
};
