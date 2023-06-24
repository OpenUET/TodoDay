import { Router } from 'express';
import * as controller from '#api/controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', controller.getAllUsers);

export default userRouter;
