import { RequestHandler } from "express";
import jwt, {JsonWebTokenError,NotBeforeError,TokenExpiredError} from "jsonwebtoken";

class AuthMiddleware {
    verifyToken: RequestHandler = (req, res, next) => {
        try{
            const authHeader = req.headers.authorization;
            const token = authHeader.split(" ")[1];
            if(!token){
                return res.status(403).json({Error: "Invalid token"});
            }
            try{
                const decoredToken = jwt.verify(token, process.env.SELECT_JWT) as {
                    [key: string]: any
                };
                if(decoredToken.exp && Date.now() >= decoredToken.exp * 1000){
                    return res.status(403).json({Error: "Token expired"});
                }
                next();
            }catch(error){
                if(error instanceof TokenExpiredError){
                    return res.status(401).json({Error: "Token expired"});
                }else if(error instanceof JsonWebTokenError){
                    return res.status(403).json({Error: "Forbidden"});
                }else{
                    return res.status(500).json({Error: "Invalid server error"});
                }
            }
        }catch(error){
            return res.status(500).json({Error: "Invalid server error"});
        }
    }
}

export default new AuthMiddleware();
