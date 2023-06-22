const {
  addTask,
  getTasks,
  deleteTask,
  updateTask,
  getTask,
} = require("../../models/tasks.model");
const APIFeatures = require("../../utils/apiFeatures");

const httpGetAllTasks = (req, res) => {
  const { level } = req.params;
  const { sortBy, isComplete } = req.query;
  const isCompleteBool = isComplete && isComplete === "true";
  const tasks = new APIFeatures(getTasks(), {
    isComplete: isCompleteBool,
    priority: level,
    sortBy,
  })
    .filter()
    .sort().collection;
  return res.status(200).json({
    tasks,
  });
};

const httpGetTasksByPriority = (req, res) => {
  const { level } = req.params;
  const tasks = new APIFeatures(getTasks(), { priority: level })
    .filter()
    .sort().collection;
  return res.status(200).json({
    tasks,
  });
};

const httpCreateTask = (req, res) => {
  const { title, description, isComplete, priority } = req.body;
  const task = addTask(title, description, isComplete, priority);
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
  const { title, description, isComplete, priority } = req.body;
  const task = updateTask(id, title, description, isComplete, priority);
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
  httpGetTasksByPriority,
};
