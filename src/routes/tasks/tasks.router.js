const express = require("express");
const { createTasksSchema } = require("./tasks.validation.schema");
const requestValidator = require("../../middlewares/requestValidator");
const {
  httpCreateTask,
  httpDeleteTask,
  httpGetAllTasks,
  httpGetTask,
  httpUpdateTask,
  httpGetTasksByPriority,
} = require("./tasks.controller");

const tasksRouter = express.Router();

tasksRouter
  .route("/")
  .get(httpGetAllTasks)
  .post(requestValidator(createTasksSchema), httpCreateTask);

tasksRouter.get("/priority/:level", httpGetAllTasks);

tasksRouter
  .route("/:id")
  .get(httpGetTask)
  .put(requestValidator(createTasksSchema), httpUpdateTask)
  .delete(httpDeleteTask);

module.exports = tasksRouter;
