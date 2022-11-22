import { client } from "../../prisma/client";

interface ITrasationsRequest {
    value: any;
}

class CreateTransactionsUseCase {
    async execute({ value }:ITrasationsRequest){
        const verifyValue = await client.accounts.findUnique({
            where: {
                id: 1 
            }
        })
        if(verifyValue.balance < value)
            throw new Error("Você não tem saldo suficiente para realizar essa transação")

        const transation = await client.transactions.create({
            data: {
                debitedAccount: {
                    connect: {id: 1}
                }
            }
        })
    }
}