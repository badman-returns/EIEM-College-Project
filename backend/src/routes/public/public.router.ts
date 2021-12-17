import * as express from "express";
// import { GetAllNotice } from "../admin/controller/admin.notice.controller";

class Public {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes() {

    //    this.router.get('/notice', GetAllNotice);

    }
}

const PublicRouter = new Public().router;
export { PublicRouter };
