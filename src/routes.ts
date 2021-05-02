import {Router} from 'express';
import {Request, Response} from 'express';

const routes = Router();

routes.get('/user/:id', (request:Request, response:Response) => {
    const { id } = request.params;

    response.json({
        userId:id
    });
});

routes.get('/user_from_request', (request:Request, response:Response) => {
    const { nome, fase, ano, uc, nota } = request.query;

    response.json({
        nome, fase, ano, uc, nota
    });
});

routes.get('/paramams_routes/:matricula', (request:Request, response:Response) => {
    const { matricula } = request.params;

    const { nome, fase, ano, uc, nota } = request.query;

    response.json({
        matricula,
        nome, fase, ano, uc, nota
    })

})

routes.post('/user', (request:Request, response:Response) => {
    const{ nome, fase, ano, uc, nota } = request.body;

    const user = ({
        nome, fase, ano, uc, nota
    });
    return response.json(user);
})

export default routes