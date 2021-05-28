import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs';
import { User } from '../models/User'

type UserData = {
    name: string;
    email: string;
    password: string
}

class CreateUserService {
    public async execute({name, email, password}: UserData){
        const usersRepository = getRepository(User);

        const checkUserExist = await usersRepository.findOne({email})

        if(checkUserExist){
            throw new Error ('Email adress already exist')
        }

        const hashedPassword = await hash(password, 8);

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;

        await usersRepository.save(user);

        return user;

    }
}

export {CreateUserService };