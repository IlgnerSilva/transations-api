import { client } from "../../prisma/client"
import { compare } from "bcryptjs";

interface IUserRequest {
    username: string | any
    password: string | any;
}

class GetAccountUseCase {
    async execute({ username, password }:IUserRequest){
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username,
            }
        });
        if (!userAlreadyExists)
            throw new Error("Username or password not exists!");

        const passwordCompare = compare(password, userAlreadyExists.password)
        if (!passwordCompare)
            throw new Error("Username or password not exists!");

        
        const account = await client.accounts.findUnique({
            where: {
                id: userAlreadyExists.accountId
            },
            include: {
                user: true
            }
        })
        return account;
    }
}

export { GetAccountUseCase }