const db = require("../data/dbConfig");

module.exports = {
  addProject,
  getProject,
  getProjectActions
};

function getProjectActions(id) {
  return db("actions")
    .select({
      id: "actions.id",
      description: "actions.description",
      notes: "actions.notes",
      complete: "actions.complete"
    })
    .where({ project_id: id });
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
