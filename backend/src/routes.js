import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegisterController from './app/controllers/RegisterController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// update user
routes.put('/users', UserController.update);

// create student
routes.post('/students', StudentController.store);
// update student
routes.put('/students/:id', StudentController.update);

// get plans
routes.get('/plans', PlanController.index);
// create plan
routes.post('/plans', PlanController.store);
// update plan
routes.put('/plans/:id', PlanController.update);
// delete plan
routes.delete('/plans/:id', PlanController.delete);

// create register
routes.post('/registers', RegisterController.store);

export default routes;
