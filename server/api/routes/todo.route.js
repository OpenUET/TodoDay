import { Router } from 'express';
import { catchAsync } from '../utils/catchAsync.js';
import { validateCreateTask, validateUpdateTask } from '../middlewares/validate/task.js';
import { createTask, deleteTask, getAllTasks, updateTask } from '../controllers/todo.controller.js';

const todoRouter = Router();

todoRouter.get("/", catchAsync(getAllTasks));

//POST: Them du lieu, body params
todoRouter.post("/", validateCreateTask, catchAsync(createTask));

//PUT: Sua du lieu, body params
todoRouter.put("/:id", validateUpdateTask, catchAsync(updateTask));

//DELETE: Xoa du lieu, query params
todoRouter.delete("/:id", catchAsync(deleteTask));
export default todoRouter;
