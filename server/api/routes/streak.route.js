import { Router } from 'express';
import { catchAsync } from '../utils/catchAsync.js';
import * as controller from "../controllers/streak.controller.js"

const router = Router();

router.get('/latest', catchAsync(controller.getLatestStreak))
router.get('/longest', catchAsync(controller.getLongestStreak))
router.post('/', catchAsync(controller.createStreak))
router.put('/:id', catchAsync(controller.updateStreakEndDate))

export default router;