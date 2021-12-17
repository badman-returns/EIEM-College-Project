import { Users } from "../models/user";
import { Collections } from "../configs/collection.config";
import { Encryption } from "./encryption";
const dotenv = require('dotenv');
dotenv.config();


class DefaultAdminUser {

    constructor() {

    }

    public static createDefaultAdminUser = async () => {
        const name = process.env.SUPER_ADMIN_NAME;
        const email = process.env.SUPER_ADMIN_EMAIL;
        const phone = process.env.SUPER_ADMIN_PHONE;
        const role = Collections.ADMIN;
        const active = true;
        const password = Encryption.encryptPassword(process.env.SUPER_ADMIN_PASSWORD);

        try {
            const defaultUserAdmin = await Users.findOne({ email: email });
            if (!defaultUserAdmin) {
                await Users.create({
                    name, email, phone, role, active, password,
                });
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export {
    DefaultAdminUser,
}
