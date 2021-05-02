import {Router} from 'express';
import {Request, Response} from 'express';
import { ActivityController } from './controller/ActivityController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController'

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

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activity', activityController.create);
routes.post('/courseunity', courseUnityController.create);

export default routes;