exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    { description: "Gotta pass those Sprints!", project_id: 1 }, // 1
    { description: "Pet Vincent regularly!", project_id: 2 } // 2
  ]);
};
