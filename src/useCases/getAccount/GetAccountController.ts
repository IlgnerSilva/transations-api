import { Request, Response } from "express";
import { GetAccountUseCase } from "./GetAccountUseCase";

class GetAccountController {
    async handle(req: Request, res: Response){
        try{
            const { username, password } = req.headers;

            const getAccountUseCase = new GetAccountUseCase();
            const account = await getAccountUseCase.execute({username, password})

            return res.status(200).json({
                contaId: account.id,
                balance: account.balance,
                user: account.user[0].username
            })
        }catch(err){
            return res.status(401).json({err: err.message})
        }
    }
}

export { GetAccountController }