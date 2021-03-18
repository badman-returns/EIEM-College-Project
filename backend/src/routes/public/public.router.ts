import * as express from "express";

class Public {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    private configRoutes() {

       

    }
}

const PublicRouter = new Public().router;
export { PublicRouter };
