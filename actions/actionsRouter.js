const express = require("express");

const db = require("./actionsModel");

const router = express.Router();

// POST a new action ----------

router.post("/", (req, res) => {
  const newAction = req.body;

  if (newAction.description) {
    db.addAction(newAction)
      .then(action => {
        res.status(201).json(action);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "There was an error saving your action!" });
      });
  } else {
    res.status(400).json({
      message: "Please provide a description for your action!"
    });
  }
});

module.exports = router;
