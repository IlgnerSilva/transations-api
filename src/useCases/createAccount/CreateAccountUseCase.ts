import { client } from "../../prisma/client";

interface IAccountRequest {
    balance: number;
}

class CreateAccountUseCase {
    async execute({ balance }: IAccountRequest) {
        const account = await client.accounts.create({
            data: {
                balance
            }
        })
        return account;
    }
}

export { CreateAccountUseCase }
