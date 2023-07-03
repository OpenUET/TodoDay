import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("").default(""),
  weight: Joi.number().allow(0).default(0),
  status: Joi.boolean().allow(null).default(false),
});

export const updateTaskSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string().allow(""),
    weight: Joi.number().allow(0),
  });
