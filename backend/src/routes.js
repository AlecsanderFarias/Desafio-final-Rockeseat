import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegisterController from './app/controllers/RegisterController';
import ChekinController from './app/controllers/ChekinController';
import HelpOrderController from './app/controllers/HelpOrderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// ADMIN-routes

// update user
routes.put('/users', authMiddleware, UserController.update);

// TO-DO GET USERS ??

// get student
routes.get('/students?name', authMiddleware, StudentController.index);
// get one student
routes.get('/students/:id', authMiddleware, StudentController.indexOne);
// get students
routes.get('/students', authMiddleware, StudentController.index);
// create student
routes.post('/students', authMiddleware, StudentController.store);
// delete student
routes.delete('/students/:id', authMiddleware, StudentController.delete);
// update student
routes.put('/students/:id', authMiddleware, StudentController.update);

// get plans
routes.get('/plans', authMiddleware, PlanController.index);
// get one plan
routes.get('/plans/:id', authMiddleware, PlanController.indexOne);
// create plan
routes.post('/plans', authMiddleware, PlanController.store);
// update plan
routes.put('/plans/:id', authMiddleware, PlanController.update);
// delete plan
routes.delete('/plans/:id', authMiddleware, PlanController.delete);

// get registers
routes.get('/registers', authMiddleware, RegisterController.index);
// get one register
routes.get('/registers/:id', authMiddleware, RegisterController.indexOne);
// create register
routes.post('/registers', authMiddleware, RegisterController.store);
// update register
routes.put('/registers/:id', authMiddleware, RegisterController.update);
// delete register
routes.delete('/registers/:id', authMiddleware, RegisterController.delete);

// get all help_orders
routes.get('/help-orders', authMiddleware, HelpOrderController.indexall);
routes.get('/help-orders/:id', authMiddleware, HelpOrderController.indexOne);
// answer help_order
routes.put(
  '/help-orders/:id/answer',
  authMiddleware,
  HelpOrderController.update
);

// STUDENTS-ROUTES

// create checkin
routes.post('/students/:student_id/checkins', ChekinController.store);
// get checkin
routes.get('/students/:student_id/checkins', ChekinController.index);

// get my help_orders
routes.get('/students/:student_id/help-orders', HelpOrderController.index);
// create help_order
routes.post('/students/:student_id/help-orders', HelpOrderController.store);

export default routes;
