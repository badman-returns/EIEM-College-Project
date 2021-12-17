import * as express from "express";
import multer from 'multer';
import { LoadAuthorizedUser } from "../../middleware/common.middleware";
import { LoadAuthorization } from "../../middleware/common.middleware";
import { ValidateBearerToken } from "../../middleware/common.middleware";
import { ValidateBasicAuth } from "../../middleware/common.middleware";
import { GetStorage } from "../../utility/uploader";
// import { LoginByEmailPassword } from "./admin.controller";
// import { InsertNotice, UpdateNotice } from "./controller/admin.notice.controller";

class AdminRouting {
    public router: express.Router;
    private upload = multer({ storage: GetStorage() });
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes() {

        // this.router.get('/authentication', [...ValidateBasicAuth, ...LoadAuthorization], LoginByEmailPassword);

        // Notice Routes
        // this.router.post('/notice', [...ValidateBearerToken, ...LoadAuthorization, ...LoadAuthorizedUser, this.upload.none()], InsertNotice);
        // this.router.post('/notice/:id', [...ValidateBearerToken, ...LoadAuthorization, ...LoadAuthorizedUser, this.upload.none()], UpdateNotice);
    }
}

const AdminRouter = new AdminRouting().router;

export {
    AdminRouter
}