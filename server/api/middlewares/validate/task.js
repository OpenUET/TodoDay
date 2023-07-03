import { createTaskSchema } from "../schemas.js";

export const validateCreateTask = (req, res, next) => {
  const { error } = createTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

// export const validateUpdateNote = (req, res, next) => {
//   const { error } = updateNoteSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: error.message });
//   }
//   next();
// };
