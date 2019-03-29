const express = require("express");

const dishesRouter = require("./projects/projectsRouter");
const recipesRouter = require("./recipes/actionsRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
