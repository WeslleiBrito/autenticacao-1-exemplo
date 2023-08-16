import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { TokenPayload } from "../types/type";

dotenv.config()

export class TokenManager {

    public createToken = (payload: TokenPayload): string => {

        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }
}





