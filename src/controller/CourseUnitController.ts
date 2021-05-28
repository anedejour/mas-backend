import { Request, Response } from 'express';
import { CreateCourseService } from '../services/CreateCourseService'
import { getCoursesUnitsService } from '../services/getCoursesUnitsService';

class CourseUnitController {
    async create (request: Request, response: Response){
        const consultUnitData = request.body

        const createCourseUnit = new getCoursesUnitsService();

        const course_unit = await createCourseUnit.execute(consultUnitData);

        return response.json(course_unit);
    }
    
    async show(request: Request, response: Response){
        const userId = request.body.user;

        const getCouseUnit = new getCoursesUnitsService();

        const coursesUnits = await getCouseUnit.execute(userId);

        return response.json(coursesUnits);
    }
}

export { CourseUnitController };
