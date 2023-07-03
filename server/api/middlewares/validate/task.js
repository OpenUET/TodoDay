import { createTaskSchema, updateTaskSchema } from "../schemas.js";

export const validateCreateTask = (req, res, next) => {
  const { error } = createTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export const validateUpdateTask = (req, res, next) => {
  const { error } = updateTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
