const db = require("../data/dbConfig");

module.exports = {
  addProject,
  getProject,
  getProjectActions
};

function getProjectActions(id) {
  return db("actions").where({ project_id: id });
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProject(ids[0]);
    });
}
