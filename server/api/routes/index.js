import { Router } from 'express';
import userRouter from './user.route.js';
import todoRouter from './todo.route.js';

const router = Router();

router.use('/users', userRouter);
router.use('/todo',todoRouter)
export default router;
