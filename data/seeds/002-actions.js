exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    { name: "Pass the sprint challenges!", description: "Gotta pass those!" }, // 1
    { name: "Pet Vincent!", description: "Pet Vincent regularly!" } // 2
  ]);
};
