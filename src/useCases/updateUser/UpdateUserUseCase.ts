import { client } from "../../prisma/client";

interface IUpdateUserRequest {
    username: string
}

class UpdateUserUseCase {
    async execute({ username }: IUpdateUserRequest) {
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username 
            }
        });

        if (userAlreadyExists){
            const user = await client.user.update({
                where: {
                    id: userAlreadyExists.id
                },
                data: {
                    accountId: userAlreadyExists.id
                }
            })
            return user;

        }else{
            throw new Error("User already exists!")
        }
    }
}

export { UpdateUserUseCase }