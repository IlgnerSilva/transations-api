import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function middlewareAuthentication(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).json({
            message: "Invalid or missing token"
        });
    }
    // Desestruturando Token
    const [, token] = authToken.split(" ");
    try{
        verify(token, process.env.KEY_TOKEN);
        next();
    }catch(err){
        return res.status(401).json({
            message: "Token invalid"
        });
    }
}