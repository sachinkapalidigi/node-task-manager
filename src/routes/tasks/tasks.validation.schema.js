const Joi = require("joi");

const createTasksSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isComplete: Joi.boolean().required(),
  priority: Joi.allow("low", "high", "medium").default("low"),
});

module.exports = { createTasksSchema };
