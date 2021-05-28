import {Router} from 'express';
import {Request, Response, response} from 'express';
import { ActivityController } from './controller/ActivityController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';
import { AuthenticateController } from './controller/AuthenticateController';
import  authenticated from './middlewares/autheticated';

const userController = new UserController();
const activityController = new ActivityController();
const courseUnityController = new CourseUnitController();
const autheticateController = new AuthenticateController();

const routes = Router();

routes.post ('/auth', autheticateController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activity', authenticated, ActivityController.show);
routes.get('/courseunity', authenticated, CourseUnitController.show);

routes.post('/user', userController.create);
routes.post('/activity', authenticated, activityController.create);
routes.post('/courseunity', authenticated, courseUnityController.create);

export default routes;