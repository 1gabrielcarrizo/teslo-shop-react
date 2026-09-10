import { User } from "@/interfaces/user.interface";

// login, register, checkstatus
export interface AuthResponse {
    user: User;
    token: string;
}