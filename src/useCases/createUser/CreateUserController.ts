import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateAccountUseCase } from "../createAccount/CreateAccountUseCase";
import { UpdateUserUseCase } from "../updateUser/UpdateUserUseCase";
import { Users } from "./UsersModel";

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const userModel = new Users(username, password);

            //Criando Usuario
            const createUserUseCase = new CreateUserUseCase();
            await createUserUseCase.execute({
                username: await userModel.username,
                password: await userModel.password
            });

            //Criando Conta!
            const createAccountUseCase = new CreateAccountUseCase();
            const account = await createAccountUseCase.execute({ balance: 100 });

            //Atualizando usuário
            const updateUserUseCase = new UpdateUserUseCase();
            const updateUser = await updateUserUseCase.execute({ username })

            
            return res.status(200).json({ updateUser, account })

        }catch(err){
            return res.status(400).json({err: err.message})
        }
    }
}

export { CreateUserController }