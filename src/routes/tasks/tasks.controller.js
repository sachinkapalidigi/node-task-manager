const {
  addTask,
  getTasks,
  deleteTask,
  updateTask,
  getTask,
} = require("../../models/tasks.model");

const httpGetAllTasks = (req, res) => {
  return res.status(200).json({
    tasks: getTasks(),
  });
};

const httpCreateTask = (req, res) => {
  const { title, description, isComplete } = req.body;
  const task = addTask(title, description, isComplete);
  return res.status(201).json({
    task,
  });
};

const httpDeleteTask = (req, res) => {
  const { id } = req.params;
  const deleteSuccessfull = deleteTask(id);
  if (deleteSuccessfull) {
    return res.status(200).json({
      task,
    });
  }
  return res.status(404).json({
    message: "Task not found",
  });
};

const httpUpdateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, isComplete } = req.body;
  const task = updateTask(id, title, description, isComplete);
  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  return res.status(200).json({
    task,
  });
};

const httpGetTask = (req, res) => {
  const { id } = req.params;
  const task = getTask(id);
  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
  return res.status(200).json({
    task,
  });
};

module.exports = {
  httpCreateTask,
  httpDeleteTask,
  httpGetAllTasks,
  httpGetTask,
  httpUpdateTask,
};
