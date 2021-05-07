import { getRepository } from 'typeorm'
import { CourseUnit } from '../models/CourseUnit'

type CourseUnitData = {
    name: string;
    description: string
}

class CreateCourseService {
    public async execute({name, description}: CourseUnitData){
        const courseUnitRepository = getRepository(CourseUnit);

        const createCourse = new CourseUnit();
        createCourse.name = name;
        createCourse.description = description;

        await courseUnitRepository.save(createCourse);

        return createCourse;

    }
}

export { CreateCourseService };