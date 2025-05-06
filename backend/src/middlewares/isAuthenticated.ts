import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;

}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){

    // recebere o token
    const authToken = req.headers.authorization;

    // verifica se o token veio na headers
    if(!authToken){
        return res.status(401).end();
    }

    // pega apenas o token , ele é enviado junto com o Baerer
    const [, token] = authToken.split(" ")

    try{

        // validar token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload

        // recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
        req.user_id = sub

        return next();

    } catch {
        return res.status(401).end()
    }

}