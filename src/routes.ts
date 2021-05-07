import {Router} from 'express';
import {Request, Response} from 'express';
import { ActivityController } from './controller/ActivityController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';
import { AuthenticateController } from './controller/AuthenticateController';
import  authenticated from './middlewares/autheticated';

interface UserRequest {
    name: string;
    email: string;
    password: string
}

interface CourseUnitRequest { 
    name: string;
    activity_date: Date;
    course_unit_id: string
}

interface ActivityRequest {
    name: string;
    description: string
}
const userController = new UserController();
const activityController = new ActivityController();
const courseUnityController = new CourseUnitController();
const autheticateController = new AuthenticateController();

const routes = Router();

routes.post('/user', userController.create);
routes.post ('/auth', autheticateController.create);
routes.post('/activity', authenticated, activityController.create);
routes.post('/courseunity', authenticated, courseUnityController.create);

export default routes;