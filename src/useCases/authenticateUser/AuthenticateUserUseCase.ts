import { client } from "../../prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
    username: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({ username, password }:IRequest){
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username   
            }
        });

        if(!userAlreadyExists){
            throw new Error("User or password incorrect");
        }

        const passwordCompare = await compare(password, userAlreadyExists.password);
        if(!passwordCompare){
            throw new Error("User or password incorrect");
        }

        const payload = {
            id: userAlreadyExists.id
        }
        const token = sign(payload, process.env.KEY_TOKEN, {
            subject: userAlreadyExists.username,
            expiresIn: "1d"
        })
        return {token: token};
    }
}

export { AuthenticateUserUseCase }