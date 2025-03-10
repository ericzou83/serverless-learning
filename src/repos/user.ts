import { User } from "../models/user";

export class UserRepo {
    static makeOne = async (username: string, name: string) => {
        return await User.create({
            username,
            name,
        });
    }

    static getOne = async (username: string) => {
        return User.get({ username });
    }
}
