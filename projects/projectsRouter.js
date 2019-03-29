const express = require("express");

const db = require("./projectsModel");

const router = express.Router();

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

module.exports = router;
