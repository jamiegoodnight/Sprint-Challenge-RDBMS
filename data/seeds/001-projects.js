exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Graduate Lambda",
      description: "Have to graduate from Lambda School!"
    }, // 1
    {
      name: "Make Cat Feel Loved",
      description: "Have to make my cat, Vincent, feel loved and appreciated!"
    } // 2
  ]);
};
