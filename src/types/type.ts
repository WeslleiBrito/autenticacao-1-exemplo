import { USER_ROLES } from "../models/User";

export interface TokenPayload {
    id: string,
    name: string,
    role: USER_ROLES
}