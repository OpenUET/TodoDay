import { Router } from 'express';
import { catchAsync } from '../utils/catchAsync.js';
import { validateCreateTask, validateUpdateTask } from '../middlewares/validate/task.js';
import * as controller from '../controllers/todo.controller.js';

const router = Router();

router.get("/", catchAsync(controller.getAllTasks));

//POST: Them du lieu, body params
router.post("/", validateCreateTask, catchAsync(controller.createTask));

//PUT: Sua du lieu, body params
router.put("/:id", validateUpdateTask, catchAsync(controller.updateTask));

//DELETE: Xoa du lieu, query params
router.delete("/:id", catchAsync(controller.deleteTask));

export default router;
