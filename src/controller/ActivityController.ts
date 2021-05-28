import { Response, Request} from 'express';
import { CreateActivityService } from '../services/CreateActivityService'


class ActivityController{
    async create ( request: Request, response: Response){
        const ActivityData = request.body;

        const CreateActivity = new CreateActivityService();

        const activity = await CreateActivity.execute(ActivityData);

        return response.json(activity);
    }


}

export { ActivityController };