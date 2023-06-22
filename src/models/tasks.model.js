const uuid = require("uuid");

const tasks = {};

const addTask = (title, description, isComplete) => {
  const taskId = uuid.v4();
  const task = {
    id: taskId,
    title,
    description,
    isComplete,
  };
  tasks[taskId] = task;
  return task;
};

const getTasks = () => {
  return tasks.values();
};

const getTask = (taskId) => {
  if (!tasks.has(taskId)) return null;
  return tasks[taskId];
};

const deleteTask = (taskId) => {
  if (!tasks.has(taskId)) return false;
  delete tasks[taskId];
  return true;
};

const updateTask = (taskId, title, description, isComplete) => {
  if (!tasks.has(taskId)) return null;
  tasks[taskId].title = title;
  tasks[taskId].description = description;
  tasks[taskId].isComplete = isComplete;
  return tasks[taskId];
};

module.exports = {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
