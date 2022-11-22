import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(req: Request, res: Response){
        const { username, password } = req.body;
        try{
            const authenticateUserUseCase = new AuthenticateUserUseCase();
            const auth = await authenticateUserUseCase.execute({
                username,
                password
            })
            return res.status(200).json(auth)
        }catch(err){
            res.status(401).json({err: err.message});
        }
    }
}

export { AuthenticateUserController }