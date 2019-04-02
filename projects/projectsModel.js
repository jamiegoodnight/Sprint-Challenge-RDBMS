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
    .where({ project_id: id })
    .then(actions => actions.map(obj => accomodateKnexsShortcomings(obj)));
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first()
    .then(obj => accomodateKnexsShortcomings(obj));
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProject(ids[0]);
    })
    .then(obj => accomodateKnexsShortcomings(obj));
}

function accomodateKnexsShortcomings(obj) {
  return {
    ...obj,
    complete: obj.complete ? true : false
  };
}
