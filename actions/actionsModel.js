const db = require("../data/dbConfig");

module.exports = {
  addAction
};

function getActionById(id) {
  return db("actions")
    .where({ id })
    .first();
}

function addAction(action) {
  return db("actions")
    .insert(action)
    .then(ids => {
      return getActionById(ids[0]);
    });
}
