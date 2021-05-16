import { Response, Request} from 'express';
import { CreateActivityService } from '../services/CreateActivityService'
import { GetActivitiesService } from '../services/GetActivitiesService';


class ActivityController{
    async create ( request: Request, response: Response){
        const ActivityData = request.body;

        const CreateActivity = new CreateActivityService();

        const activity = await CreateActivity.execute(ActivityData);

        return response.json(activity);
    }

    async show(request: Request, response: Response){
        const userId = request.body.user;

        const getActivities = new GetActivitiesService();

        const activities = await getActivities.execute(userId);
        
        return response.json(activities);
    }

}

export { ActivityController };