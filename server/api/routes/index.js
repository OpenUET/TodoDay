import { Router } from 'express';
import todoRouter from './todo.route.js';
import streakRouter from './streak.route.js'

const router = Router();

router.use('/todo', todoRouter)
router.use('/streak', streakRouter)

export default router;
