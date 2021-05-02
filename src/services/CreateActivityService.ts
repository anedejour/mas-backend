import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs';
import { Activity } from '../models/Activity'

type AcitivyData = {
    name: string;
    activity_date: Date;
    course_unit_id: string;
}

class CreateActivityService {
    public async execute({name, activity_date, course_unit_id}: AcitivyData){
        const activityRepository = getRepository(Activity);

        const activity = new Activity(course_unit_id);
        activity.name = name;
        activity.activity_date = activity_date;

        await activityRepository.save(activity);

        return activity;
    
    }
}

export { CreateActivityService };