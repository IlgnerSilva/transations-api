// import { Request, Response } from "express";
// import { UpdateUserUseCase } from "./UpdateUserUseCase";
// import { CreateAccountUseCase } from "../CreateAccount/CreateAccountUseCase"

// class CreateUserController {
//     async handle(req: Request, res: Response){
//         const { accountId, password } = req.body;
//         const updateUserUseCase = new UpdateUserUseCase();
//         const user = await updateUserUseCase.execute({});

//        const createAccountUseCase = new CreateAccountUseCase();
//        const account = await createAccountUseCase.execute({id: user.id, balance: 100});
//        return res.status(200).json({ user, account })
//     }
// }

// export { CreateUserController }