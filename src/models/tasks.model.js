const uuid = require("uuid");

const tasks = {};

const addTask = (title, description, isComplete, priority = "low") => {
  const taskId = uuid.v4();
  const task = {
    id: taskId,
    title,
    description,
    isComplete,
    priority,
    createdAt: new Date().toISOString(),
    updateTask: new Date().toISOString(),
    // deleteAt: new Date().toISOString(),
  };
  tasks[taskId] = task;
  return task;
};

const getTasks = () => {
  return Object.values(tasks);
};

const getTask = (taskId) => {
  if (!tasks.hasOwnProperty(taskId)) return null;
  return tasks[taskId];
};

const deleteTask = (taskId) => {
  if (!tasks.hasOwnProperty(taskId)) return false;
  // TODO: SOFT delete
  delete tasks[taskId];
  return true;
};

const updateTask = (
  taskId,
  title,
  description,
  isComplete = false,
  priority
) => {
  if (!tasks.hasOwnProperty(taskId)) return null;
  tasks[taskId].title = title;
  tasks[taskId].description = description;
  tasks[taskId].isComplete = isComplete;
  tasks[taskId].updatedAt = new Date().toISOString();
  tasks[taskId].priority = priority;
  return tasks[taskId];
};

module.exports = {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
