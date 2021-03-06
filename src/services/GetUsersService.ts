import { getRepository } from "typeorm";
import { User } from "../models/User";

interface UserId{
    id?: string;
}

class GetUsersService {
    public async execute({id}: UserId){
        const userRepository = getRepository(User);

        const users = userRepository.find();

        if(!users){
            return {
                message: 'course unit not found'
            }
        }
        return users;
    }
}

export { GetUsersService };