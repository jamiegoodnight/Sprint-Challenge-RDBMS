const db = require("../data/dbConfig");

module.exports = {
  addAction
};

function addAction(action) {
  return db("actions")
    .insert(action)
    .then(ids => {
      return getDishById(ids[0]);
    });
}
