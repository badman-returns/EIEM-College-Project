import * as express from "express";
import multer from 'multer';
import { GetStorage } from "../../utility/uploader";

class AdminRouting {
    public router: express.Router;
    private upload = multer({ storage: GetStorage() });
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes() {

        
    }
}

const AdminRouter = new AdminRouting().router;

export {
    AdminRouter
}