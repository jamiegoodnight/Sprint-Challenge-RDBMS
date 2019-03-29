const express = require("express");

const db = require("./projectsModel");

const router = express.Router();

// POST a new project ----------

router.post("/", (req, res) => {
  const newProject = req.body;

  if (newProject.name && newProject.description) {
    db.addProject(newProject)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "There was an error saving your project!" });
      });
  } else {
    res.status(400).json({
      message: "Please provide a name and description for your project!"
    });
  }
});

// GET a project by id ----------

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getProject(id)
    .then(project => {
      if (project) {
        const projectAndActions = { ...project };
        db.getProjectActions(req.params.id).then(actions => {
          projectAndActions.actions = actions;
          res.status(200).json(projectAndActions);
        });
      } else {
        res.status(404).json({
          message: "The project with the specified id could not be found!"
        });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was a problem retrieving your project!" });
    });
});

module.exports = router;
