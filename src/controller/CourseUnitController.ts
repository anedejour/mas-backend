import { Request, Response } from 'express';
import { CreateCourseService } from '../services/CreateCourseService'

class CourseUnitController {
    async create (request: Request, response: Response){
        const consultUnitData = request.body

        const createCourseUnit = new CreateCourseService();

        const course_unit = await createCourseUnit.execute(consultUnitData);

        return response.json(course_unit);
    }
}

export { CourseUnitController };
